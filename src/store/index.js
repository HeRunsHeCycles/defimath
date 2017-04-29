import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    reponsesJustes: 0,
    reponsesFausses: 0,
    totalReponsesPourGagner: 10,
    currentQuestion: '',
    currentAnswer: null,
    userAnwser: null

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
    currentAnswer (state, answer) {
      state.currentAnswer = answer
    },
    currentUserAnswer (state, userAnswer) {
      state.userAnwser = userAnswer
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
    setCurrentAnswer ({ commit }, answer) {
      commit('currentAnswer', answer)
    },
    setCurrentUserAnswer ({ commit }, userAnswer) {
      commit('currentUserAnswer', userAnswer)
    }
  }
})
