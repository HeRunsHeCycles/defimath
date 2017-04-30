<template>
  <div class="hello">
    <transition name="fade">
      <div class="win" v-if="userWin"> 
        <div>🎉 BRAVO 🎉</div>
        <div>✨🏆🎖👑🐲🐉</div>
        <button>Recommencer</button>
      </div>
    </transition>
    <div v-if="!userWin">
      <h1>{{ currentQuestion }}</h1>
      <div><input v-model="userAnswer" class="reponse" type="text"></div>
      <button v-on:click="validerReponse" class="envoyer">GO ! 🌊</button>
      <audio id="myAudio">
        <source src="./static/fireworks.mp3" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>

      <h2>Résultat</h2>

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
  created: function () {
    this.setNewQuestion()
  },
  methods: {
    ...mapActions([
      'makeUserWin' // map this.increment() to this.$store.dispatch('increment')
      // mapActions also supports payloads:
      // 'incrementBy' // this.incrementBy(amount) maps to this.$store.dispatch('incrementBy', amount)
    ]),
    validerReponse: function () {
      if (this.$store.state.goodAnswer === Number(this.$data.userAnswer)) {
        this.$store.dispatch('bonnereponse')
        this.checkIfWin()
        this.setNewQuestion()
        this.$data.userAnswer = null
      } else {
        this.$store.dispatch('mauvaisereponse')
      }
    },
    checkIfWin: function () {
      if (this.$store.state.totalReponsesPourGagner === this.$store.state.reponsesJustes) {
        this.makeUserWin()
        this.playSound()
      }
    },
    playSound: function (name) {
      let playPromise = document.getElementById('myAudio')
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
    setNewQuestion: function () {
      let leftNumber = Math.floor((Math.random() * 5) + 1)
      let rightNumber = Math.floor((Math.random() * 10) + 1)
      let goodAnswer = leftNumber * rightNumber
      let newQuestion = 'calcule ' + leftNumber + ' fois ' + rightNumber
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

.fade-enter-active, .fade-leave-active {
  transition: opacity 10s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
</style>
