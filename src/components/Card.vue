<template>
<div class="card">
  <div class="card-body">
    <h5>{{pais.name.common}}</h5>
    <p class="card-text">
      <span class="bagde bagde-dark d-block">Poblacion :{{pais.population}}</span>
      <span class="bagde bagde-dark d-block">Capital :{{pais.capital[0]}}</span>

    </p>
  </div>
</div>
</template>

<script>
export default {
  name: "Card",
  props:['pais']
}
</script>

<style scoped>

</style>