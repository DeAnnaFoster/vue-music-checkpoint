webpackJsonp([0],[,,function(t,s,e){"use strict";var a=e(9),i=e.n(a),n=e(1),o=e(25),c=e(16),r=e.n(c),l=!window.location.host.includes("localhost"),u=l?"//deesmusic.heroku.com/api/":"//localhost:3000/api/playlist";n.a.use(o.a);var d=new o.a.Store({state:{myTunes:[],results:[]},mutations:{setResults:function(t,s){t.results=s},saveToMyTunes:function(t,s){},removeSong:function(t,s){},promoteTrack:function(t,s){},demoteTrack:function(t,s){},setMyTunes:function(t,s){t.myTunes=s}},actions:{getMusicByArtist:function(t,s){var e=t.commit,a=(t.dispatch,"https://itunes.apple.com/search?term="+s),i="//bcw-getter.herokuapp.com/?url="+encodeURIComponent(a);r.a.get(i).then(function(t){e("setResults",JSON.parse(t)),console.log(JSON.parse(t))})},getMyTunes:function(t){var s=t.commit;t.dispatch;r.a.get(u).then(function(t){var e=t.sort(function(t,s){var e=t.trackName.toUpperCase(),a=s.trackName.toUpperCase();return e<a?-1:e>a?1:0}).reverse(),a=e.sort(function(t,s){return t.weight-s.weight}).reverse();s("setMyTunes",a)})},addToMyTunes:function(t,s){var e=(t.commit,t.dispatch);r.a.post(u,s).then(function(t){e("getMyTunes")}).fail(function(){console.log("could not add to myTunes")})},removeTrack:function(t,s){var e=(t.commit,t.dispatch);r.a.ajax({contentType:"application/json",method:"DELETE",url:u+"/"+s._id}).then(function(t){e("getMyTunes")}).fail(function(){console.log("could not remove track from myTunes")})},promoteTrack:function(t,s){var e=(t.commit,t.dispatch),a={weight:s.weight+1};r.a.ajax({contentType:"application/json",method:"PUT",url:u+"/"+s._id,data:i()(a)}).then(function(t){e("getMyTunes")}).fail(function(){console.log("could not promote track")})},demoteTrack:function(t,s){var e=(t.commit,t.dispatch),a={weight:s.weight-1};r.a.ajax({contentType:"application/json",method:"PUT",url:u+"/"+s._id,data:i()(a)}).then(function(t){e("getMyTunes")}).fail(function(){console.log("could not promote track")})}}});s.a=d},function(t,s,e){e(12);var a=e(0)(e(4),e(20),null,null);t.exports=a.exports},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(17),i=e.n(a);s.default={name:"app",components:{Home:i.a}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(18),i=e.n(a),n=e(19),o=e.n(n);s.default={name:"home",data:function(){return{right:"-400px"}},components:{Itunes:i.a,Mytunes:o.a},computed:{},methods:{openMusic:function(){this.right="0px",document.getElementById("slideBlock").style.right="0px"},closeMusic:function(){this.right="-400px",document.getElementById("slideBlock").style.right="-400px"}},mounted:function(){}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"itunes",data:function(){return{artist:"",songUrl:""}},components:{},computed:{songs:function(){return this.$store.state.results.results}},methods:{getMusicByArtist:function(){this.$store.dispatch("getMusicByArtist",this.artist)},loadPlayer:function(t){this.songUrl=t},addToMyTunes:function(t){this.$store.dispatch("addToMyTunes",t)}},mounted:function(){}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={name:"mytunes",data:function(){return{artist:"",artwork:"",songUrl:"",trackName:"",collectionName:"",previewUrl:"",weight:"",_id:""}},components:{},computed:{songs:function(){return this.$store.state.myTunes}},methods:{getMyTunes:function(){this.$store.dispatch("getMyTunes")},loadPlayer:function(t){this.songUrl=t},promoteTrack:function(t){this.$store.dispatch("promoteTrack",t)},demoteTrack:function(t){this.$store.dispatch("demoteTrack",t)},removeTrack:function(t){this.$store.dispatch("removeTrack",t)}},mounted:function(){this.$store.dispatch("getMyTunes")}}},function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(1),i=e(3),n=e.n(i),o=e(2);new a.a({el:"#app",template:"<App/>",store:o.a,components:{App:n.a}})},,,,function(t,s){},function(t,s){},function(t,s){},function(t,s){},,function(t,s,e){e(14);var a=e(0)(e(5),e(22),"data-v-a13c13d6",null);t.exports=a.exports},function(t,s,e){e(13);var a=e(0)(e(6),e(21),"data-v-9de3ae30",null);t.exports=a.exports},function(t,s,e){e(15);var a=e(0)(e(7),e(23),"data-v-d706c4ee",null);t.exports=a.exports},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"app"}},[e("home")],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container-fluid wide"},[e("form",{staticClass:"form-inline test",on:{submit:function(s){s.preventDefault(),t.getMusicByArtist(s)}}},[e("div",{staticClass:"form-group"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.artist,expression:"artist"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Artist Name"},domProps:{value:t.artist},on:{input:function(s){s.target.composing||(t.artist=s.target.value)}}}),t._v(" "),e("button",{staticClass:"btn btn-primary",attrs:{type:"submit",id:"get-music-button"}},[t._v("Get Music")])])]),t._v(" "),e("div",{attrs:{id:"ssongs"}},[e("div",{attrs:{id:"mainTitle"}},[e("h2",[t._v("Summary of Results for: "+t._s(t.artist.toUpperCase()))])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-12"},[e("div",{staticClass:"row sticky"},[e("div",{staticClass:"player"},[e("audio",{staticClass:"audioPlay",attrs:{id:"theOne",src:this.songUrl,type:"audio/wav",controls:"",autoplay:""}})])]),t._v(" "),e("div",{staticClass:"row "},[e("div",{staticClass:"col-xs-12"},[e("div",{staticClass:"card-deck "},[e("div",{attrs:{id:"templateInsert"}},t._l(t.songs,function(s){return e("div",[e("div",{staticClass:"card card-outline-primary "},[e("img",{staticClass:"card-img-top",attrs:{src:s.artworkUrl100,alt:"song image"}}),t._v(" "),e("div",{staticClass:"card-block"},[e("p",{staticClass:"card-title"},[t._v(t._s(s.trackName)+" from "+t._s(s.collectionName)+" ("+t._s(s.collectionPrice)+")")]),t._v(" "),e("div",[e("button",{staticClass:"btn btn-default",attrs:{type:"button"},on:{click:function(e){t.loadPlayer(s.previewUrl)}}},[e("span",{staticClass:"glyphicon glyphicon-play",attrs:{"aria-hidden":"true"}})]),t._v(" "),e("button",{staticClass:"btn btn-primary",attrs:{type:"button",id:"save-to-mytunes"},on:{click:function(e){t.addToMyTunes(s)}}},[t._v("+Playlist")])])])])])}))])])])])])])])},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"home wide"},[e("button",{staticClass:"leftArrow",attrs:{"aria-hidden":"true"},on:{click:function(s){s.preventDefault(),t.openMusic()}}}),t._v(" "),e("div",{attrs:{id:"slideBlock",right:this.right}},[e("button",{staticClass:"mybtn",on:{click:function(s){s.preventDefault(),t.closeMusic()}}},[t._v("X")]),t._v(" "),e("div",{attrs:{id:"data"}},[e("mytunes",{staticClass:"mytunes"},[t._v("myTunes")])],1)]),t._v(" "),e("itunes",{staticClass:"itunes"},[t._v("itunes")])],1)},staticRenderFns:[]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container-fluid"},[e("div",{attrs:{id:"ssongs"}},[t._m(0),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-12"},[e("div",{staticClass:"row sticky"},[e("div",{staticClass:"player"},[e("audio",{staticClass:"audioPlay",attrs:{id:"theOne",src:this.songUrl,type:"audio/wav",controls:"",autoplay:""}})])]),t._v(" "),e("div",{staticClass:"row"},[e("div",{staticClass:"col-xs-12 wide"},[e("div",{staticClass:"card-deck wide"},[e("div",{staticClass:"wide",attrs:{id:"templateInsert"}},t._l(t.songs,function(s){return e("div",{staticClass:"wide"},[e("div",{staticClass:"myDiv",staticStyle:{margin:"2px",width:"375px",height:"50px"}},[e("ul",{staticClass:"myDiv"},[e("li",{staticStyle:{float:"left"}},[e("span",{staticStyle:{display:"block",float:"left"}},[e("button",{staticClass:"btn btn-default",staticStyle:{margin:"3px",height:"20px","vertical-align":"top"},attrs:{type:"button"},on:{click:function(e){t.promoteTrack(s)}}},[e("span",{staticClass:"glyphicon glyphicon-arrow-up",attrs:{"aria-hidden":"true"}})]),e("br"),t._v(" "),e("button",{staticClass:"btn btn-default glyphicons glyphicons-arrow-down",staticStyle:{margin:"3px",height:"20px"},attrs:{type:"button"},on:{click:function(e){t.demoteTrack(s)}}},[e("span",{staticClass:"glyphicon glyphicon-arrow-down special",attrs:{"aria-hidden":"true"}})])]),t._v(" "),e("img",{staticClass:"card-img-top",staticStyle:{width:"50px",height:"50px"},attrs:{src:s.artworkUrl100,alt:"song image"}})]),t._v(" "),e("li",{staticStyle:{"vertical-align":"top","text-align":"left"}},[t._v("\n                                                "+t._s(s.trackName)+" from "+t._s(s.collectionName)+"\n                                            ")]),t._v(" "),e("li",{staticStyle:{float:"right"}},[e("button",{staticClass:"btn btn-default",staticStyle:{float:"left",position:"absolute",bottom:"5px",right:"40px"},attrs:{type:"button"},on:{click:function(e){t.loadPlayer(s.previewUrl)}}},[e("span",{staticClass:"glyphicon glyphicon-play",attrs:{"aria-hidden":"true"}})]),t._v(" "),e("button",{staticClass:"btn btn-danger",staticStyle:{float:"left",position:"absolute",bottom:"5px",right:"2px"},attrs:{type:"button"},on:{click:function(e){t.removeTrack(s)}}},[e("span",{staticClass:"glyphicon glyphicon-remove",attrs:{"aria-hidden":"true"}})])])])])])}))])])])])])])])},staticRenderFns:[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{attrs:{id:"mainTitle"}},[e("h2",[t._v("My Play-List: ")])])}]}}],[8]);
//# sourceMappingURL=app.2468588c85fff7eb881e.js.map