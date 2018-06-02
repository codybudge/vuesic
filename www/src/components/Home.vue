<template>
  <div class="container-fluid">
    <div class="Home">
      <div class="row">
        <div class="col d-flex justify-content-center">
          <!--Serch Bar-->
          <form @submit.prevent="findSongs">
            <input type="text" placeholder="Search for HotLineMusic" v-model="query">
            
          </form>
          <button class="but" @click="findSongs"><i class="fa fa-fw fa-search"></i></button>
          <div class="results">
          </div>
        </div>
      </div>
      
      <div class="row">
        <div class="col d-flex justify-content-center">
          <div class="songoutercard" style="width: 27rem;">
              <h3>Songs</h3>
          <div class="card-body d-flex justify-content-center">
            <div class="songinnercard" style="width: 24rem;">
              <div class="card-body">
                <ol>
                  <li v-for="song in songs" class="list">
                    <img class="img" :src="song.albumArt" alt="">
                    <h2> Song Title:{{song.title}}</h2>
                    <p> Artist Name:{{song.artist}}</p>
                    <p> Album Name: {{song.album}}</p>
                    <p>Cost: ${{song.price}}</p>
                    <audio class="audioBar" controls="controls">
                      <source :src="song.preview">
                      <type="audio/wav">
                    </audio>
                    <button class="but" @click="addToPlaylist(song)">Add to playList</button>
                  </li>
                </ol>
              </div>
            </div>
          </div>
          </div>
          </div>


          <div class="col d-flex justify-content-center">
            <!--Your Play list side-->
            <div class="playoutercard  " style="width: 27rem;">
                <h3>My Playlist</h3>
              <div class="card-body d-flex justify-content-center">

                <div class="playinnercard" style="width: 24rem;">
                  <div class="card-body ">
                    <ol class="unlist">
                      <li v-for="(song, index) in playlist.songs" class="list">
                        <img class="img" :src="song.albumArt" alt="">
                        <h2> Song Title:{{song.title}}</h2>
                        <button class="but" @click="moveUp(index)">move up</button>
                        <button class="but" @click="moveDown(index)">move down</button>
                        <p> Artist Name:{{song.artist}}</p>
                        <p> Album Name: {{song.album}}</p>
                        <audio class="audioBar" controls="controls">
                          <source :src="song.preview">
                          <type="audio/wav">
                        </audio>
                        <button class="but" @click="removeSong(song._id)">Remove</button>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'Home',
    mounted() {
      this.$store.dispatch('getPlaylist')
    },
    data() {
      return {
        query: ''
      }
    },
    computed: {
      songs() {
        return this.$store.state.songs
      },
      playlist() {
        return this.$store.state.playList
      },
      activeSong() {
        return this.$store.state.activeSong
      }

    },
    methods: {
      findSongs() {
        this.$store.dispatch('findSongs', this.query)
      },
      addToPlaylist(song) {
        this.$store.dispatch('addToPlayList', song)
      },
      removeSong(songId) {
        this.$store.dispatch('removeSong', songId)
      },
      moveUp(index) {
        var store = this.playlist.songs[index]
        this.playlist.songs.splice(index, 1)
        this.playlist.songs.splice(index - 1, 0, store)
        this.$store.dispatch('moveUp', this.playlist)
      },
      moveDown(index) {
        var store = this.playlist.songs[index]
        this.playlist.songs.splice(index, 1)
        this.playlist.songs.splice(index + 1, 0, store)
        this.$store.dispatch('moveDown', this.playlist)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3{
    text-align: center
  }
  .container-fluid {
   background: linear-gradient(#374955,#203541);
   font-family: 'Fjalla One', sans-serif;
  }
  .playoutercard{
    text-align: center;
    background: linear-gradient(#f62a66,#a11640);
    border-radius: 10px 50px 10px 20px
  }
  .playinnercard{
    background: linear-gradient(#ffd933,#e08815)
  }
  .songoutercard{
    text-align: center;
    background: linear-gradient(#f62a66,#a11640);
    border-radius: 50px 10px 20px 10px
  }
  .songinnercard{
    background: linear-gradient(#ffd933,#e08815)
  }
  .list{
    margin-bottom: 2rem;
    margin-top: 2rem
  }
  .img{
    border: solid .3rem rgb(51, 51, 51);
    border-radius: 1rem
  }
  .but{
    border-radius: 2rem;
    background: #a11640;
    border: solid .3rem rgb(51, 51, 51);
    color: white
  }
</style>