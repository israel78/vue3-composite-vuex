<template>
<div class="row">
  <div class="col-12">
{{paises}}
  </div>
</div>

</template>

<script>
import {computed, onMounted} from 'vue'
import {useStore} from 'vuex'
import {store} from "core-js/internals/reflect-metadata";
export default {
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