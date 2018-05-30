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
                  <img :src="song.artworkUrl100" alt="">
                 <p> Song Title:{{song.trackName}}</p>
                 <p> Artist Name:{{song.artistName}}</p> <p> Collection Name: {{song.collectionName}}</p>
                 <audio class="audioBar" controls="controls">
                    <source :src="song.previewUrl"> <type="audio/wav">
                    </audio>
                  
                 
                </li>
              </ol>
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
    data() {
      return {
        query: ''
      }
    },
    computed: {
      songs() {
        return this.$store.state.songs
      },
      playList() {
        return this.$store.state.playList
      },
      activeSong() {
        return this.$store.state.activeSong
      }
    },
    methods: {
      findSongs() {
        this.$store.dispatch('findSongs', this.query)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>