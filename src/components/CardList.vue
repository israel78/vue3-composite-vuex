<template>
<div class="row">
  <div class="col-12"
  v-for="pais in paises" key="pais.name">
    <Card :pais="pais"/>
  </div>
</div>

</template>

<script>
import {computed, onMounted} from 'vue'
import {useStore} from 'vuex'
import Card from "./Card";
export default {
  components: {Card},
  setup(){
    const store = useStore()
    const paises = computed(()=>{
      return store.getters.topPaisesPoblacion
    })
    onMounted(()=>{
      store.dispatch('getPaises')
    })
    return {paises}
  }
}
</script>

<style scoped>

</style>