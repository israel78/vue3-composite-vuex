import { createStore } from 'vuex'
import {computed} from "vue";
import {store} from "core-js/internals/reflect-metadata";

export default createStore({
  state: {
    paises:[],
    paisesFiltrados:[]
  },
  mutations: {
    setPaises(state,payload){
      state.paises = payload
    },
    setPaisesFiltrados(state,payload){
      state.paises = payload
    }
  },
  actions: {
    async getPaises({commit}){
      try{
        const res = await fetch('api.json')
        const data = await res.json()
        commit('setPaises',data)
      }catch (e) {
        console.log(e)
      }
    }
  },
  getters:{

  topPaisesPoblacion(state){
    return state.paises.sort((a,b)=>
       a.population<b.population?1:-1
    )
  }

  },
  modules: {
  }
})
