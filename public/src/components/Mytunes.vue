<template>
    <div class="container-fluid">

        <div id="ssongs">
            <div class="container-fluid">
                <div id="mainTitle">
                    <h2>My Play-List: </h2>
                </div>

                <div class="row">
                    <div class="col-xs-12">

                        <div class="row sticky">
                            <div class="player">
                                <audio class="audioPlay" id="theOne" :src="this.songUrl" type="audio/wav" controls autoplay></audio>
                            </div>
                        </div>

                        <div class="row">

                            <div class="col-xs-12">
                                <div class="card-deck">
                                    <div id="templateInsert">

                                        <!-- Template Goes Here -->

                                        <div v-for="song in songs">

                                            <div style="margin: 25px; width: 350px; height: 50px">
                                                <ul>
                                                    <li style="float:left; ">
                                                        <span style="display:block; float:left;">
                                                            <button style="margin: 3px; height: 20px; vertical-align: top;" type="button" @click="promoteTrack(song)" class="btn btn-default"><span class="glyphicon glyphicon-arrow-up" aria-hidden="true"></span></button><br/>
                                                        <button style="margin: 3px; height: 20px;" type="button" @click="demoteTrack(song)" class="btn btn-default glyphicons glyphicons-arrow-down"><span class="glyphicon glyphicon-arrow-down special" aria-hidden="true"></span></button>
                                                        </span>
                                                        <img class="card-img-top" :src="song.artworkUrl100" style="width:50px; height:50px;" alt="song image">
                                                    </li>

                                                    <li style="vertical-align: top; text-align:left;">
                                                        {{song.trackName}} from {{song.collectionName}}
                                                    </li>

                                                    <li style="float: right;">
                                                        <button style="float: left;" type="button" @click="loadPlayer(song.previewUrl)" class="btn btn-default"><span class="glyphicon glyphicon-play" aria-hidden="true"></span></button>
                                                        <button style="float: left;" type="button" @click="removeTrack(song)" class="btn btn-danger"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button>></button>
                                                    </li>
                                                </ul>
                                            </div>

                                        </div>

                                        <!-- End Template -->

                                    </div>
                                </div>
                            </div>
                            <!-- <div class="col-xs-1"></div> -->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    //import Itunes from './Itunes'
    //import Mytunes from './Mytunes'

    export default {
        name: 'mytunes',

        data() {
            return {
                artist: '',
                artwork: '',
                songUrl: '',
                trackName: '',
                collectionName: '',
                previewUrl: '',
                weight: '',
                _id:''
            }
        },

        components: {

        },

        computed: {
            songs() {
                return this.$store.state.myTunes;
            }
        },

        methods: {
            getMyTunes() {
                this.$store.dispatch("getMyTunes");
            },
            loadPlayer(song) {
                this.songUrl = song;
            },
            promoteTrack(song) {
                this.$store.dispatch("promoteTrack", song);
            },
            demoteTrack(song) {
                this.$store.dispatch("demoteTrack", song);
            },
            removeTrack(song) {
                this.$store.dispatch("removeTrack", song);
            }
        },

        mounted() {
            this.$store.dispatch("getMyTunes");
        }
    }

</script>


<style scoped>
    .mytunes {
        display: inline-block;
        background: red;
        min-height: 500px;
        min-width: 35%;
    }

    #mainTitle {
        text-align: center;
    }
    /* 
     * { 
     outline: 1px solid black;    
     }  */

    .test {
        text-align: center;
        padding: 20px;
    }

    body {
        /* background: url('./ocean.jpg') no-repeat center center fixed; */
        text-align: center;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    }

    li {
        display: inline-block;
        display: inline;
        list-style: none;
        font-size: 10px;
        font-style: arial;
    }

    .card-img-top {
        width: 250px;
        height: 250px;
    }

    img {
        float: right;
    }

    .card-deck {
        text-align: left;
        display: inline-block;
        width: 100%;
    }

    .card {
        width: 250px;
        padding: 5px;
        text-align: left;
        display: inline-block;

        margin: auto;
    }


    .card-title {
        height: 35px;
        font-size: 12px;
    }

    .btn {
        width: 35px;

        font-size: 10px;
        text-align: center;
    }

    .card-outline-primary {
        padding: 0;
        margin: 5px;
    }

    .btn-primary {
        width: 100px;
    }

    p,
    h4 {
        font-size: 12px;
    }

    #player {
        text-align: center;
    }

    .sticky {
        position: sticky;
        text-align: center;
        top: 0;
        z-index: 100000;
    }
</style>