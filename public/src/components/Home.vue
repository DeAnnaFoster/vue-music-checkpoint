<template>
  <div class="home">
    <!-- YOU WILL PROBABLY END UP WITH SOMETHING LIKE THIS -->
    <!-- <mytunes class="mytunes"></mytunes> -->
    <itunes class="itunes"></itunes>

  </div>


</template>

<script>
  import Itunes from './Itunes'
  
  // import Mytunes from './Mytunes'

  export default {
    name: 'home',
    data() {
      return {
      }
    },

    components: {
      Itunes
      //Mytunes
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
  .my-tunes {
    display: inline-block;
    min-height: 500px;
    min-width: 50%;
    background: green;
  }

  .itunes {
    display: inline-block;
    background: red;
    min-height: 500px;
    min-width: 45%;
  }
</style>