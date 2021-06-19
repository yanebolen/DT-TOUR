import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tours: [
     {
       image: "https://cdn.eapteka.ru/upload/offer_photo/506/595/resized/230_230_1_4e2ef13a598501cc12ce986daa699d62.jpeg?_cvc=1622209430",
       name: 'Поездка на фишт',
       time:'12:55',
       day:'1',
     },
     {
       image: "https://cdn.eapteka.ru/upload/offer_photo/326/704/resized/230_230_1_9f65988def262d75e21c8c0c8adfcff7.jpeg?_cvc=1622209430",
       name: 'Разбиваем лагерь',
       time:'15:45',
       day:'2',
     },
   ],
  },
  mutations: {
  },
  actions: {

  },
  getters: {
    TOURS(state){
      return state.tours;
    }
  }
})
