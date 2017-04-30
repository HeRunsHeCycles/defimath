<template>
  <div class="hello">
    <div v-if="!userWin">
      <div class="question">{{ currentQuestion }}</div>
      <div><input v-model="userAnswer" v-on:keyup.enter="validerReponse" ref="reponse" class="reponse" type="number" pattern="[0-9]*" inputmode="numeric"></div>
      <button v-on:click="validerReponse">Envoyer ma réponse ! 🚀</button>
      <audio id="blipaudio">
        <source src="./static/blip.mp3" type="audio/mpeg">
        <source src="./static/blip.m4a" type="audio/mpeg" />
        <source src="./static/blip.ogg" type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>
      <ul class="resultat">
        <li v-for="reponse in reponsesJustes">🌕</li>
        <li v-for="reponse in getTotalReponsesRestantesPourGagner">🌑</li>
        <li v-for="reponse in reponsesFausses">🙊💥</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Un défi pour H',
      userAnswer: null
    }
  },
  created () {
    this.setNewQuestion()
  },
  mounted () {
    this.resetGameState()
  },
  methods: {
    ...mapActions([
      'makeUserWin', // map this.increment() to this.$store.dispatch('increment')
      'resetGameState'
      // mapActions also supports payloads:
      // 'incrementBy' // this.incrementBy(amount) maps to this.$store.dispatch('incrementBy', amount)
    ]),
    playSound: function (name) {
      let playPromise = document.getElementById('blipaudio')
      // In browsers that don’t yet support this functionality,
      // playPromise won’t be defined.
      if (playPromise !== undefined) {
        playPromise.play().then(function () {
          playPromise.play()
        }).catch(function (error) {
          if (error) {
            console.log('bad')
          }
        })
      }
    },
    validerReponse: function () {
      if (this.$store.state.goodAnswer === Number(this.$data.userAnswer)) {
        this.$store.dispatch('bonnereponse')
        this.checkIfWin()
        this.playSound()
        this.setNewQuestion()
        this.$data.userAnswer = null
        this.$refs.reponse.focus()
      } else {
        this.$store.dispatch('mauvaisereponse')
        this.$router.push('Youlost')
      }
    },
    checkIfWin: function () {
      if (this.$store.state.totalReponsesPourGagner === this.$store.state.reponsesJustes) {
        this.makeUserWin()
        this.$router.push('Victory')
      }
    },
    setNewQuestion: function () {
      let leftArray = [3, 4, 5]
      let rightArray = [3, 4, 5, 6, 7, 8, 9]
      let leftNumber = leftArray[Math.floor(Math.random() * leftArray.length)]
      let rightNumber = rightArray[Math.floor(Math.random() * rightArray.length)]
      let goodAnswer = leftNumber * rightNumber
      let newQuestion = 'Calcule ' + leftNumber + ' fois ' + rightNumber
      this.$store.dispatch('setCurrentQuestion', newQuestion)
      this.$store.dispatch('setGoodAnswer', goodAnswer)
    }
  },
  computed: {
    ...mapState([
      // map this.count to store.state.count
      'userWin',
      'currentQuestion',
      'reponsesFausses',
      'reponsesJustes',
      'totalReponsesPourGagner'
    ]),
    getTotalReponsesRestantesPourGagner: function () {
      return this.$store.state.totalReponsesPourGagner - this.$store.state.reponsesJustes
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
.win {
  font-size: 8em
}
.question {
  font-size: 3em;
  color: #607d8b;
}
.reponse{
  height: 2em;
  width: 10em;
  font-size: 3em;
}

.resultat{
  font-size: 4em;
}
</style>
