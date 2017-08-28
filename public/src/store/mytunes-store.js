import vue from 'vue'
import vuex from 'vuex'
import $ from 'jquery'

//mongodb://<dbuser>:<dbpassword>@ds157873.mlab.com:57873/playlist
var production = !window.location.host.includes('localhost');
var baseUrl = production ? '//deesmusic.herokuapp.com' : '//localhost:3000/api/playlist'

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
      // state.myTunes.push(song);
    },
    removeSong(state, song) {
      // var index = state.myTunes.indexOf(song);
      // state.myTunes.splice(index, 1);

    },
    promoteTrack(state, song) {
      // var index = state.myTunes.indexOf(song);
      // state.myTunes.splice(index - 1, 2, song, state.myTunes[index - 1]);

    },
    demoteTrack(state, song) {
      // var index = state.myTunes.indexOf(song);
      // state.myTunes.splice(index, 2, state.myTunes[index + 1], song);


    },
    setMyTunes(state, data) {
      //console.log('data is: ' +data)
      state.myTunes = data;
    }
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

    getMyTunes({ commit, dispatch }) {
      //this should send a get request to your server to return the list of saved tunes
      $.get(baseUrl).then(res => {
        var firstSort = res.sort(function (a, b) {
          var tnA = a.trackName.toUpperCase();
          var tnB = b.trackName.toUpperCase(); 
          if (tnA < tnB) {
            return -1;
          }
          if (tnA > tnB) {
            return 1;
          }

          // equal
          return 0;
        }).reverse();

        var mySongs = firstSort.sort(function (a, b) {
          return a.weight - b.weight;
        }).reverse();

        commit('setMyTunes', mySongs)
      });
    },

    addToMyTunes({ commit, dispatch }, song) {
      //this will post to your server adding a new track to your tunes
      //console.log('song is: ' + song)
      $.post(baseUrl, song)
        .then((res) => {
          dispatch('getMyTunes') // 
          //console.log(state.myTunes)
        })
        .fail(() => {
          console.log("could not add to myTunes")
        })
    },

    removeTrack({ commit, dispatch }, song) {
      //Removes track from the database with delete
      $.ajax({
        contentType: 'application/json',
        method: 'DELETE',
        url: baseUrl + '/' + song._id   //needed full path - //localhost:3000
      })
        .then((res) => {
          dispatch('getMyTunes') // 
        })
        .fail(() => {
          console.log("could not remove track from myTunes")
        })

    //commit('removeSong', song);
  },

  promoteTrack({ commit, dispatch }, song) {
    //this should increase the position / upvotes and downvotes on the track
    var dataObject = { 'weight': song.weight + 1 };

    $.ajax({
      contentType: 'application/json',
      method: 'PUT',
      url: baseUrl + '/' + song._id,
      data: JSON.stringify(dataObject)
    })
      .then((res) => {
        //console.log('getting MyTunes')
        dispatch('getMyTunes')
      })
      .fail(() => {
        console.log("could not promote track")
      })

    // commit('promoteTrack', song);
  },

  demoteTrack({ commit, dispatch }, song) {
    //this should decrease the position / upvotes and downvotes on the track
    var dataObject = { 'weight': song.weight - 1 };

    $.ajax({
      contentType: 'application/json',
      method: 'PUT',
      url: baseUrl + '/' + song._id,
      data: JSON.stringify(dataObject)
    })
      .then((res) => {
        //console.log('getting MyTunes')
        dispatch('getMyTunes')
      })
      .fail(() => {
        console.log("could not promote track")
      })
    // commit('demoteTrack', song);
  }

}
})

export default store
