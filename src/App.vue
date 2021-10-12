<template>
  <div class="weather">
    <WeatherWidget msg="Soon..."/>
  </div>
</template>

<script>
import WeatherWidget from './components/WeatherWidget.vue';

export default {
  name: 'App',
  components: {
    WeatherWidget
  }
}
</script>

<style>

</style>
