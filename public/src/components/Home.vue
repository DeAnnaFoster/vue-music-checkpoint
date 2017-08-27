<template>
  <div class="home">
    <!-- YOU WILL PROBABLY END UP WITH SOMETHING LIKE THIS -->
    <!-- <span>&#x276E;</span> -->




    <button class="leftArrow" @click.prevent="openMusic()" aria-hidden="true"></button>

    <div id="slideBlock" :right="this.right">
      <button class="mybtn" @click.prevent="closeMusic()">X</button>
      <div id="data">
        <!-- myTunes goes here -->

        <mytunes class="mytunes">myTunes</mytunes>

        <!-- mt -->
      </div>
    </div>

    <!-- <mytunes class="mytunes">myTunes</mytunes> -->
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
      // blogs() {
      //   return this.$store.state.blogs
      // }


    },
    methods: {
      // createNewBlog() {
      //   var newBlog = {
      //     title: "A NEW BLOG",
      //     body: "YOU GET A BLOG"
      //   }
      //   this.$store.dispatch("createBlog", newBlog)
      // }

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
      // this.$store.dispatch("getBlogs")
    }

  }

</script>


<style scoped>
  .mybtn {
    background: transparent;
    width: 10px;
    font-size: 6px;
    text-align: center;
    padding: 1px;
    margin: 10px;
    opacity: .6;
    /* background: transparent; */
    outline: none;
    color: black;
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
    background-color: gray;
  }

  #data {
    position: fixed;
    height: 100%;
    /* right: -150px; */
    /* width: 250px; */
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
    min-height: 500px;
    min-width: 100%;
    background: green;
    margin: 10px;
  }

  .itunes {
    display: inline-block;
    background: red;
    min-height: 500px;
    min-width: 100%;
    margin: 10px;
  }


  .leftArrow {
    position: sticky;
    top: 50%;

    text-align: right;
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
    border-color: black;
    outline: none;
  }
</style>