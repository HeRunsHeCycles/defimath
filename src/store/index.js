import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    reponsesJustes: 0,
    reponsesFausses: 0,
    totalReponsesPourGagner: 50,
    currentQuestion: '',
    goodAnswer: null,
    userAnwser: null,
    userWin: false

  },
  mutations: {
    bonnereponse (state) {
      state.reponsesJustes++
    },
    mauvaisereponse (state) {
      state.reponsesFausses++
    },
    currentQuestion (state, question) {
      state.currentQuestion = question
    },
    goodAnswer (state, answer) {
      state.goodAnswer = answer
    },
    currentUserAnswer (state, userAnswer) {
      state.userAnwser = userAnswer
    },
    userWin (state) {
      state.userWin = !state.userWin
    }
  },
  actions: {
    bonnereponse ({ commit }) {
      commit('bonnereponse')
    },
    mauvaisereponse ({ commit }) {
      commit('mauvaisereponse')
    },
    setCurrentQuestion ({ commit }, question) {
      commit('currentQuestion', question)
    },
    setGoodAnswer ({ commit }, answer) {
      commit('goodAnswer', answer)
    },
    setCurrentUserAnswer ({ commit }, userAnswer) {
      commit('currentUserAnswer', userAnswer)
    },
    makeUserWin ({ commit }) {
      commit('userWin')
    }
  }
})
