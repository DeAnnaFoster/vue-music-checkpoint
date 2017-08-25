import vue from 'vue'
import vuex from 'vuex'
import $ from 'jquery'

//mongodb://<dbuser>:<dbpassword>@ds157873.mlab.com:57873/playlist

vue.use(vuex)

var store = new vuex.Store({
  state: {
    myTunes: [],
    results: []
  },
  mutations: {
    setResults(state, results) {
      state.results = results
    },
    saveToMyTunes(state, song) {
      state.myTunes.push(song);
    },
    removeTrack(state, song) {
      //array.splice(start, deleteCount)
      var index = state.myTunes.indexOf(song);
      state.myTunes.splice(index, 1);
    },
    promoteTrack(state, song) {
      var index = state.myTunes.indexOf(song);
      //remove 
      state.myTunes.splice(index - 1, 2, song, state.myTunes[index - 1]);

    },
    demoteTrack(state, song) {
      var index = state.myTunes.indexOf(song);
      state.myTunes.splice(index, 2, state.myTunes[index + 1], song);
    },
  },
  actions: {
    getMusicByArtist({ commit, dispatch }, artist) {
      var url = '//bcw-getter.herokuapp.com/?url=';
      var url2 = 'https://itunes.apple.com/search?term=' + artist;
      var apiUrl = url + encodeURIComponent(url2);
      $.get(apiUrl).then(data => {
        commit('setResults', JSON.parse(data))
        console.log(JSON.parse(data))
      })
    },

    getMyTunes({ commit, dispatch }, payload) {
      //this should send a get request to your server to return the list of saved tunes
      // $.get(ip + '/api/blogs/' + blogId).then(blog => {
      //   commit('setActiveBlog', blog)
      // })
    },

    addToMyTunes({ commit, dispatch }, song) {
      //this will post to your server adding a new track to your tunes

      commit('saveToMyTunes', song);
    },

    removeTrack({ commit, dispatch }, song) {
      //Removes track from the database with delete

      commit('removeTrack', song);
    },

    promoteTrack({ commit, dispatch }, song) {
      //this should increase the position / upvotes and downvotes on the track

      commit('promoteTrack', song);
    },

    demoteTrack({ commit, dispatch }, song) {
      //this should decrease the position / upvotes and downvotes on the track

      commit('demoteTrack', song);
    }

  }
})

export default store
