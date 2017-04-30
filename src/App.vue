<template>
  <div id="app">
  <transition name="fade">
        <router-view></router-view>
  </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
button {
    display: inline-block;
    vertical-align: middle;
    margin: 1rem 0 1rem 0;
    padding: 0.85em 1em;
    -webkit-appearance: none;
    border: 1px solid transparent;
    border-radius: 0;
    -webkit-transition: background-color 0.25s ease-out, color 0.25s ease-out;
    transition: background-color 0.25s ease-out, color 0.25s ease-out;
    font-size: 2rem;
    line-height: 1;
    text-align: center;
    cursor: pointer;
    background-color: #2196f3;
    color: #fefefe;
}
.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
