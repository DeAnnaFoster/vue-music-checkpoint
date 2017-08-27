<template>
    <div class="container-fluid wide">
        <form class="form-inline test" @submit.prevent="getMusicByArtist">
            <div class="form-group">
                <input type="text" class="form-control" v-model="artist" placeholder="Artist Name" />
                <button type="submit" class="btn btn-primary" id="get-music-button">Get Music</button>
            </div>
        </form>

        <div id="ssongs">
            <!-- <div class="container-fluid"> -->

            <div id="mainTitle">
                <h2>Summary of Results for: {{artist.toUpperCase()}}</h2>
            </div>

            <div class="row">
                <div class="col-xs-12">

                    <div class="row sticky">
                        <div class="player">
                            <audio class="audioPlay" id="theOne" :src="this.songUrl" type="audio/wav" controls autoplay></audio>
                        </div>
                    </div>

                    <div class="row " >

                        <div class="col-xs-12">

                            <div class="card-deck ">
                                <div id="templateInsert">

                                    <!-- Template Goes Here -->

                                    <div v-for="song in songs" >
                                        <div class="card card-outline-primary ">
                                            <img class="card-img-top" :src="song.artworkUrl100" alt="song image">
                                            <div class="card-block">
                                                <p class="card-title">{{song.trackName}} from {{song.collectionName}} ({{song.collectionPrice}})</p>
                                                <!-- <p>By: {{song.artistName}}</p> -->
                                                <div>
                                                    <button type="button" @click="loadPlayer(song.previewUrl)" class="btn btn-default"><span class="glyphicon glyphicon-play" aria-hidden="true"></span></button>
                                                    <button type="button" @click="addToMyTunes(song)" class="btn btn-primary" id="save-to-mytunes">+Playlist</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- End Template -->

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- </div> -->
        </div>
    </div>
</template>

<script>
    export default {
        name: 'itunes',

        data() {
            return {
                artist: '',
                songUrl: ''
            }
        },

        components: {

        },

        computed: {
            songs() {
                return this.$store.state.results.results;
            }
        },

        methods: {
            getMusicByArtist() {
                this.$store.dispatch("getMusicByArtist", this.artist)
            },
            loadPlayer(song) {
                this.songUrl = song;
            },
            addToMyTunes(song) {
                this.$store.dispatch("addToMyTunes", song)
            }
        },

        mounted() {

        }
    }

</script>


<style scoped>
    .itunes {
        display: inline-block;
        background-color: black;
        color: white;
        height: 100%;
    }

    * {
        /* outline: 1px solid black; */
    }

    #mainTitle {
        text-align: center;
    }

    body {
        text-align: center;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
    }

    .test {
        text-align: center;
        padding: 20px;
    }

    .card-img-top {
        width: 250px;
        height: 250px;
    }

    .card-deck {
        text-align: center;
        display: inline-block;
        width: 100%;
        padding: 0 0px 75px 20px;
  
    }

    .card {
        width: 250px;
        padding: 5px;
        float: left;
        margin: 10px;
        text-align: center;
    }

    .card-outline-primary {
        padding: 0;
        margin: 5px;
    }

    .card-title {
        height: 4em;
        font-size: 1em;
    }

    .btn {
        width: 75px;
        font-size: 10px;
        text-align: center;
    }

    .btn-primary {
        width: 100px;
    }

    p,
    h4 {
        font-size: 12px;
        margin: 2px;
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

    .wide {
        width: 100%;
        text-align: center;
    }
</style>