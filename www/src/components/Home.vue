<template>
  <div class="container-fluid">
    <div class="Home">
      <div class="row">
        <div class="col">
          <!--Serch Bar-->
          <form @submit.prevent="findSongs">
            <input type="text" v-model="query">
          </form>
          <button @click="findSongs">Search</button>
          <div class="results">
            <h4>Results for: {{query}}</h4>
            <div class="row">
              <ol class="col sm-6">
                <li v-for="song in songs">
                  <img :src="song.albumArt" alt="">
                 <p> Song Title:{{song.title}}</p>
                 <p> Artist Name:{{song.artist}}</p>
                  <p> Album Name: {{song.album}}</p>
                  <p>Cost: ${{song.price}}</p>
                 <audio class="audioBar" controls="controls">
                    <source :src="song.preview"> <type="audio/wav">
                    </audio>
                    <button @click="addToPlaylist(song)">Add to playList</button>
                </li>
              </ol> 
              <div class="col">
                <h3>myTunes</h3>
                <ol class="col sm-6">
                    <li v-for="(song, index) in playlist.songs">
                      <img :src="song.albumArt" alt="">
                      <p> Song Title:{{song.title}}</p>
                      <button @click="moveUp(index)">move up</button>
                      <button @click ="moveDown(index)">move down</button>
                     <p> Artist Name:{{song.artist}}</p>
                      <p> Album Name: {{song.album}}</p>
                      <audio class="audioBar" controls="controls">
                        <source :src="song.preview"> <type="audio/wav">
                        </audio>
                        <button @click="removeSong(song._id)">Remove</button>
                    </li>
                  </ol>
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
    mounted(){
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
        this.playlist.songs.splice(index -1, 0, store)
        this.$store.dispatch('moveUp', this.playlist)
      },
      moveDown(index) {
        var store = this.playlist.songs[index]
        this.playlist.songs.splice(index, 1)
        this.playlist.songs.splice(index +1, 0, store)
        this.$store.dispatch('moveDown', this.playlist)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>