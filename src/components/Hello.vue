<template>
  <div class="hello">
    <button v-on:click="setNewQuestion" class="envoyer">Une autre ! 🚀</button>
    <h1>{{ getCurrentQuestion }}</h1>
    <div><input v-model="userAnswer" class="reponse" type="text"></div>
    <button v-on:click="validerReponse" class="envoyer">GO ! 🌊</button>

    <h2>Résultat</h2>
    <ul class="resultat">
      <li v-for="reponse in nombrebonnereponses">😀</li>
      <li v-for="reponse in nombremauvaisesreponses">🙊</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Un défi pour H',
      userAnswer: null
    }
  },
  methods: {
    validerReponse: function () {
      if (this.$store.state.currentAnswer === Number(this.$data.userAnswer)) {
        this.$store.dispatch('bonnereponse')
      } else {
        this.$store.dispatch('mauvaisereponse')
      }
    },
    setNewQuestion: function () {
      let leftNumber = Math.floor((Math.random() * 5) + 1)
      let rightNumber = Math.floor((Math.random() * 5) + 1)
      let goodAnswer = leftNumber * rightNumber
      let newQuestion = 'calcule ' + leftNumber + ' fois ' + rightNumber
      this.$store.dispatch('setCurrentQuestion', newQuestion)
      this.$store.dispatch('setCurrentAnswer', goodAnswer)
    }
  },
  computed: {
    nombrebonnereponses: function () {
      return this.$store.state.reponsesJustes
    },
    nombremauvaisesreponses: function () {
      return this.$store.state.reponsesFausses
    },
    getCurrentQuestion: function () {
      return this.$store.state.currentQuestion
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.reponse{
  height: 2em;
  width: 10em;
  font-size: 3em;
}

.envoyer{
  margin-top: 1em;
  width: 7em;
  height: 2em;
  font-size: 3em;
}

.resultat{
  font-size: 4em;
}
</style>
