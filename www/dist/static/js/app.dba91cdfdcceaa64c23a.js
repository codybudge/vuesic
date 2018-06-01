webpackJsonp([1],{"4Bgk":function(t,s){},NHnr:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=a("7+uW"),e={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]};var n=a("VU/8")({name:"App"},e,!1,function(t){a("z62K")},null,null).exports,o=a("NYxO"),c=a("/ocq"),l={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"Home"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col d-flex justify-content-center"},[a("form",{on:{submit:function(s){return s.preventDefault(),t.findSongs(s)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],attrs:{type:"text"},domProps:{value:t.query},on:{input:function(s){s.target.composing||(t.query=s.target.value)}}})]),t._v(" "),a("button",{on:{click:t.findSongs}},[t._v("Search")]),t._v(" "),a("div",{staticClass:"results"},[a("h4",[t._v("Results for: "+t._s(t.query))])])])]),t._v(" "),a("div",{staticClass:"row"},[a("div",{staticClass:"col d-flex justify-content-center"},[a("div",{staticClass:"card",staticStyle:{width:"27rem"}},[a("h3",[t._v("Songs")]),t._v(" "),a("div",{staticClass:"card-body"},[a("div",{staticClass:"card",staticStyle:{width:"24rem"}},[a("div",{staticClass:"card-body"},[a("ol",t._l(t.songs,function(s){return a("li",[a("img",{attrs:{src:s.albumArt,alt:""}}),t._v(" "),a("p",[t._v(" Song Title:"+t._s(s.title))]),t._v(" "),a("p",[t._v(" Artist Name:"+t._s(s.artist))]),t._v(" "),a("p",[t._v(" Album Name: "+t._s(s.album))]),t._v(" "),a("p",[t._v("Cost: $"+t._s(s.price))]),t._v(" "),a("audio",{staticClass:"audioBar",attrs:{controls:"controls"}},[a("source",{attrs:{src:s.preview}}),t._v(" "),t._v('="audio/wav">\n                  ')]),t._v(" "),a("button",{on:{click:function(a){t.addToPlaylist(s)}}},[t._v("Add to playList")])])}))])])])])]),t._v(" "),a("div",{staticClass:"col d-flex justify-content-center"},[a("div",{staticClass:"card",staticStyle:{width:"27rem"}},[a("h3",[t._v("My Playlist")]),t._v(" "),a("div",{staticClass:"card-body"},[a("div",{staticClass:"card",staticStyle:{width:"24rem"}},[a("div",{staticClass:"card-body"},[a("ol",{staticClass:"list"},t._l(t.playlist.songs,function(s,i){return a("li",[a("img",{attrs:{src:s.albumArt,alt:""}}),t._v(" "),a("p",[t._v(" Song Title:"+t._s(s.title))]),t._v(" "),a("button",{on:{click:function(s){t.moveUp(i)}}},[t._v("move up")]),t._v(" "),a("button",{on:{click:function(s){t.moveDown(i)}}},[t._v("move down")]),t._v(" "),a("p",[t._v(" Artist Name:"+t._s(s.artist))]),t._v(" "),a("p",[t._v(" Album Name: "+t._s(s.album))]),t._v(" "),a("audio",{staticClass:"audioBar",attrs:{controls:"controls"}},[a("source",{attrs:{src:s.preview}}),t._v(" "),t._v('="audio/wav">\n                      ')]),t._v(" "),a("button",{on:{click:function(a){t.removeSong(s._id)}}},[t._v("Remove")])])}))])])])])])])])])},staticRenderFns:[]};var r=a("VU/8")({name:"Home",mounted:function(){this.$store.dispatch("getPlaylist")},data:function(){return{query:""}},computed:{songs:function(){return this.$store.state.songs},playlist:function(){return this.$store.state.playList},activeSong:function(){return this.$store.state.activeSong}},methods:{findSongs:function(){this.$store.dispatch("findSongs",this.query)},addToPlaylist:function(t){this.$store.dispatch("addToPlayList",t)},removeSong:function(t){this.$store.dispatch("removeSong",t)},moveUp:function(t){var s=this.playlist.songs[t];this.playlist.songs.splice(t,1),this.playlist.songs.splice(t-1,0,s),this.$store.dispatch("moveUp",this.playlist)},moveDown:function(t){var s=this.playlist.songs[t];this.playlist.songs.splice(t,1),this.playlist.songs.splice(t+1,0,s),this.$store.dispatch("moveDown",this.playlist)}}},l,!1,function(t){a("4Bgk")},"data-v-7a95c4b2",null).exports;i.a.use(c.a);var u=new c.a({routes:[{path:"/",name:"Home",component:r}]}),d=a("mtWM"),v=a.n(d),p=!window.location.host.includes("localhost")?"//kanban.herokuapp.com/":"//localhost:3000/";i.a.use(o.a);var m=v.a.create({baseURL:"https://itunes.apple.com/search?media=music&&term=",timeout:3e3}),f=v.a.create({baseURL:p,timeout:3e3}),h=new o.a.Store({state:{songs:[],playList:{}},mutations:{setSong:function(t,s){t.songs=s},setPlayList:function(t,s){t.playList=s},addSong:function(t,s){t.playList.push(s)}},actions:{findSongs:function(t,s){var a=t.dispatch,i=t.commit;m.get(s).then(function(t){var s=t.data.results.map(function(t){return{title:t.trackName,albumArt:t.artworkUrl100,artist:t.artistName,album:t.collectionName,price:t.collectionPrice,preview:t.previewUrl}});i("setSong",s)}).catch(function(t){return a("showNotification",t)})},getPlaylist:function(t,s){var a=t.commit;t.dispatch;f.get("playlists/5b0ddaa33ce72e0fb8a0c051",s).then(function(t){a("setPlayList",t.data)})},addToPlayList:function(t,s){t.dispatch;var a=t.commit;f.put("playlists/5b0ddaa33ce72e0fb8a0c051/songs",s).then(function(t){a("setPlayList",t.data)})},removeSong:function(t,s){t.dispatch;var a=t.commit;f.delete("playlists/5b0ddaa33ce72e0fb8a0c051/songs/"+s).then(function(t){a("setPlayList",t.data)})},moveUp:function(t,s){t.dispatch;var a=t.commit;f.put("playlists/5b0ddaa33ce72e0fb8a0c051",s).then(function(t){a("setPlayList",t.data)})},moveDown:function(t,s){t.dispatch;var a=t.commit;f.put("playlists/5b0ddaa33ce72e0fb8a0c051",s).then(function(t){a("setPlayList",t.data)})},showNotification:function(t,s){t.commit;console.log(s)}}});i.a.config.productionTip=!1,new i.a({el:"#app",store:h,router:u,components:{App:n},template:"<App/>"})},z62K:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.dba91cdfdcceaa64c23a.js.map