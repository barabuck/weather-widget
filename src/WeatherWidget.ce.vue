<template>
  <div class="weather-widget">
    <button v-on:click="openSetings">s</button>
    <weather-page msg="Soon..." />
    <settings-page />
  </div>
</template>

<script>
import WeatherPage from "./components/WeatherPage.ce.vue";
import SettingsPage from "./components/SettingsPage.ce.vue";

export default {
  name: "Weather Widget",
  components: {
    WeatherPage,
    SettingsPage
  },
  methods: {
    getDomWidget: function () {
      return document.querySelector('weather-widget').shadowRoot
    },
    openSetings: function () {
      this.getDomWidget().querySelector('.weather-page').classList.toggle('display-none')
      this.getDomWidget().querySelector('.settings-page').classList.toggle('display-none')
    }
  }
};
</script>

<style>
  .weather-widget {
    width: 250px;

  }

  .display-none {
    display: none !important;
  }
  /* SETINGS PAGE */
  .settings-page {
    height: 300px;
    display: grid;
    grid-template-rows: 1fr 3fr 2fr;
  }
  .setting-page__add-city {
    display: grid;
    grid-template-rows: 1fr 1fr;
  }
  /* WEATHER PAGE */
  .weather-page {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2fr 1fr 1fr 1fr 1fr;
  }
  .weather-page__weather-degrees {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .weather-page__wind-pressure {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .weather-page__humidity-dew-point  {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
</style>
