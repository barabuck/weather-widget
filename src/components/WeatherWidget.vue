<template>
  <div class="hello">
    <h1>Weather Widget</h1>
    <h3>{{ msg }}</h3>
  </div>
</template>

<script>
export default {
  name: 'Weather Widget',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
