<template>
  <div class="hello">
    <h1>Current Weather</h1>
    <h3>{{ msg }}</h3>
  </div>
</template>

<script>
export default {
  name: 'Current Wetaher',
  props: {
    msg: String
  }
}
</script>

<style scoped>

</style>
