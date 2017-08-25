<template>
  <div class="home">
    <!-- YOU WILL PROBABLY END UP WITH SOMETHING LIKE THIS -->
    <mytunes class="mytunes">myTunes</mytunes>
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
    },
    mounted() {
      // this.$store.dispatch("getBlogs")
    }
  }

</script>


<style>
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

  /* background: url('./ocean.jpg') no-repeat center center fixed; */

  /* body { */
    /* text-align: center; */
    /* -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

  .card-img-top {
    width: 250px;
    height: 250px;
  }

  .card-deck {
    text-align: middle;
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
    width: 50px;
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
  } */
  /* .sticky {
        position: sticky;
        top: 0;
        z-index: 100000;
    } */
</style>