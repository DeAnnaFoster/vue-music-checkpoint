<template>
    <div class="container-fluid">
        <!-- <form class="form-inline test" @submit.prevent="getMusicByArtist">
            <div class="form-group">
                <input type="text" class="form-control" v-model="artist" placeholder="Artist Name" />
                <button type="submit" class="btn btn-primary" id="get-music-button">Get Music</button>
            </div>
        </form> -->

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
                            <!-- <div class="col-xs-1"></div> -->
                            <div class="col-xs-12">
                                <div class="card-deck">
                                    <div id="templateInsert">

                                        <!-- Template Goes Here -->

                                        <div v-for="song in songs">
                                            <!-- <div class="card card-outline-primary"> -->

                                            <!-- <img class="card-img-top" :src="song.artworkUrl100" style="width:50px; height:50px;" alt="song image">
                                                <div class="card-block " style="float: left;">
                                                    <p style="float: left;" class="card-title">{{song.trackName}} from {{song.collectionName}} ({{song.collectionPrice}})</p>
                                                    <p style="float: left;" >By: {{song.artistName}}</p>
                                                    <div style="float: left;">
                                                        <button type="button" @click="loadPlayer(song.previewUrl)" class="btn btn-default"><span class="glyphicon glyphicon-play" aria-hidden="true"></span></button>
                                                        <button type="button" @click="" class="btn btn-default glyphicons glyphicons-arrow-up">Promote</button>
                                                        <button type="button" @click="" class="btn btn-defaultglyphicons glyphicons-arrow-down">Demote</button>
                                                        <button type="button" @click="" class="btn btn-danger">Remove</button>
                                                    </div>

                                                </div> -->
                                            <div style="margin: 10px; width: 350px; ">
                                                <ul>
                                                    <li style="display:block; float:left; ">
                                                        <div style=" vertical-align: top">
                                                            <button style=" vertical-align: top; float: left; height: 20px;" type="button" @click="" class="btn btn-default"><span class="glyphicon glyphicon-arrow-up" aria-hidden="true"></span></button>
                                                            <button style=" vertical-align: bottom; float: left; height: 20px;" type="button" @click="" class="btn btn-default glyphicons glyphicons-arrow-down"><span class="glyphicon glyphicon-arrow-down special" aria-hidden="true"></span></button>
                                                        </div>


                                                        <img class="card-img-top" :src="song.artworkUrl100" style="width:50px; height:50px;" alt="song image">
                                                    </li>
                                                    
                                                    <li style="float: left;">
                                                        {{song.trackName}} from {{song.collectionName}}
                                                    </li>

                                                    <li style="float: right;">

                                                        <button style="float: left;" type="button" @click="loadPlayer(song.previewUrl)" class="btn btn-default"><span class="glyphicon glyphicon-play" aria-hidden="true"></span></button>

                                                        <button style="float: left;" type="button" @click="" class="btn btn-danger">Remove</button>

                                                    </li>
                                                </ul>
                                            </div>

                                            <!-- </div> -->
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
                previewUrl: ''
            }
        },

        components: {
            //Mytunes
            //Itunes
        },

        computed: {
            songs() {
                return this.$store.state.myTunes;
            }
        },

        methods: {
            // getMusicByArtist() {
            //     this.$store.dispatch("getMusicByArtist", this.artist)
            // },
            getMyTunes() {
                this.$store.dispatch("");
            },
            loadPlayer(song) {
                this.songUrl = song;
            }
        },

        mounted() {

        }
    }

</script>


<style>
    .mytunes {
        display: inline-block;
        background: red;
        min-height: 500px;
        min-width: 45%;
    }
    /* * { */
    /* outline: 1px solid black;    */
    /* } */
    /* .test {
        text-align: center;
        padding: 20px;
    }

    body { */
    /* background: url('./ocean.jpg') no-repeat center center fixed; */
    /* text-align: center;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    } */

    li {
        display: inline-block;
        display: inline;
        list-style: none;
        font-size: 10px;
    }

    .card-img-top {
        width: 250px;
        height: 250px;
    }
    img{
        float:right;
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
        top: 0;
        z-index: 100000;
    }
</style>