<template>
  <div class="home wide">
    <button class="leftArrow" @click.prevent="openMusic()" aria-hidden="true"></button>

    <div id="slideBlock" :right="this.right">
      <button class="mybtn" @click.prevent="closeMusic()">X</button>
      <div id="data">
        <!-- myTunes goes here -->
        <mytunes class="mytunes">myTunes</mytunes>
        <!-- mt -->
      </div>
    </div>

    <itunes class="itunes">itunes</itunes>
  </div>
</template>

<script>
  import Itunes from './Itunes'
  import Mytunes from './Mytunes'

  export default {
    name: 'home',
    data() {
      return {
        right: '-400px',
      }
    },

    components: {
      Itunes,
      Mytunes
    },

    // export default {
    //   data() {
    //     return {
    //     }
    //   },

    computed: {
    },
    methods: {
      openMusic() {
        this.right = "0px";
        document.getElementById("slideBlock").style.right = "0px";
      },

      closeMusic() {
        this.right = "-400px";
        document.getElementById("slideBlock").style.right = "-400px";
      }
    },
    mounted() {
    }

  }

</script>


<style scoped>
  .mybtn {
    background: transparent;
    width: 15px;
    font-size: 6px;
    text-align: center;
    padding: 1px;
    margin: 10px;
    opacity: .6;
    outline: none;
    color: white;
  }

  .home {
    position: fixed;
    margin: 0;
    background-color: black;
    color: white;
  }

  #slideBlock {
    position: fixed;
    height: 100%;
    right: -400px;
    width: 400px;
    padding: 0px;
    text-align: left;
    z-index: 100001;
    transition: 3s;
    background-color: black;
  }

  #data {
    position: fixed;
    height: 100%;
    padding: 0px;
    text-align: left;
    overflow-y: scroll;
  }
  /* #slideBlock:hover {
     transition: 5s;
    right:0;
  }

  #slideBlock:hover #data {
     transition: 5s;
    right: -150px;
  } */

  .mytunes {
    display: inline-block;
  }

  .itunes {
    display: inline-block;
    background-color: black;
    color: white;
    margin: 0px;
    overflow: auto;
  }

  .wide {
    margin: 0;
    height: 100vh;
    width: 100vw;
  }

  .leftArrow {
    position: sticky;
    top: 50%;

    text-align: right;
    margin: 1.2%;
    float: right;
    z-index: 100000;
    opacity: .3;

    background: transparent;
    width: 20px;
    height: 20px;
    border-width: 0 5px 5px 0;
    border-top: 0px solid transparent;
    border-left: 0px solid transparent;
    transform: rotate(135deg);
    -webkit-transform: rotate(135deg);
    border-color: white;
    outline: none;
  }
</style>