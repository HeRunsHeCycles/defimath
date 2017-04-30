<template>
  <div class="intro">
    <div class="title"> 🀄 </div>
    <div class="subtitle">
      <p>
        Illumine les {{ numberOfMoon }} Lunes Noires pour libérer le dragon de Kai Loon
      </p>
    </div>
    <div class="subtitle">
      <p>
        Chaque bonne réponse va illuminer une Lune 
      </p>
      <div>🌑 ➡ 🌕</div>
      <p>
        Mais une seule mauvaise réponse refermera toutes les Lunes et tu devras tout recommencer !
      </p>
      <div>🙊💥 🌕🌕🌕 ➡ 🌑🌑🌑 </div>
    </div>
    <button v-on:click="goToGame">Commencer le défi</button>
  </div>
</template>

<script>
export default {
  name: 'intro',
  methods: {
    goToGame: function () {
      this.$router.push('Play')
    }
  },
  computed: {
    numberOfMoon: function () {
      return this.$store.state.totalReponsesPourGagner
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.title{
  font-size: 6em;
}
.subtitle{
  font-size: 2em;
}
</style>
