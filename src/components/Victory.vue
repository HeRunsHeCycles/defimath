<template>
  <div class="victory">
    <transition name="fade">
      <div class="win"> 
        <div>🎉 BRAVO 🎉</div>
        <div>🐲 Le Dragon de Kai Loon est libre 🐲</div>
        <div>✨🏆🎖👑🐲🐉</div>
        <audio id="myAudio">
          <source src="./static/fireworks.mp3" type="audio/mpeg">
          <source src="./static/fireworks.m4a" type="audio/mpeg" />
          <source src="./static/fireworks.ogg" type="audio/ogg" />
          Your browser does not support the audio element.
        </audio>
        <button v-on:click="reload">Recommencer</button>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'victory',
  mounted () {
    this.playSound()
  },
  methods: {
    reload: function () {
      this.$router.push('/')
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
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.win {
  font-size: 6em
}

.fade-enter-active  {
  transition: opacity 10s
}
.fade-leave-active {
  transition: opacity .25s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in <2.1.8 */ {
  opacity: 0
}
</style>
