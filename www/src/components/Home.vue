<template>
  <div class="Home">
    <div class="row">
      <div class="col">
        <!--Serch Bar-->
        WHAT
        <input type="text" v-model="query">
        <button @click="search">Search</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
     query: ''
    }
  },
  computed: {
    results(){
      return this.$store.state.results
    }
  },
  methods:{
    search() {
        this.$store.dispatch('search', this.query)
        this.query = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
