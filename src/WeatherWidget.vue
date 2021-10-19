<template>
  <div class="weather-widget">
    <Cog class="weather-widget__settings-open" v-on:click="openSetings"/>
    <Close class="weather-widget__settings-close display-none" v-on:click="openSetings"/>
    <div class="weather-widget__weather-page">
      <div v-if="weatherOfCities.length > 0" >
        <weather-page v-for="(weather, index) in weatherOfCities" v-bind:key="index" v-bind:weather="weather"/>
      </div>
      <div v-else>
          Select City
      </div>
    </div> 
    <settings-page v-bind:getWeather="getWeather" />
  </div>
</template>

<script>
import WeatherPage from "./components/WeatherPage.vue";
import SettingsPage from "./components/SettingsPage.vue";
import { Cog } from 'mdue';
import { Close } from 'mdue';

export default {
  name: "Weather Widget",
  components: {
    WeatherPage,
    SettingsPage,
    Cog,
    Close
  },
  data() {
    return {
      weatherOfCities: []
    }
  },
  methods: {
    openSetings: function () {
      document.querySelector('.weather-widget__weather-page').classList.toggle('display-none');
      document.querySelector('.settings-page').classList.toggle('display-none');
      document.querySelector('.weather-widget__settings-open').classList.toggle('display-none');
      document.querySelector('.weather-widget__settings-close').classList.toggle('display-none');
    },
    getWeather: async function () {
      this.weatherOfCities = [];
      let saveCities = JSON.parse(localStorage.getItem('saveCities'));
      if (saveCities) {
        for (let city in saveCities) {
          let url = `https://api.openweathermap.org/data/2.5/weather?q=${saveCities[city]}&appid=9a1a96279762372298912cc9f5ea961f`;
          let response = await fetch(url);
          let weather = await response.json();
          this.weatherOfCities.push(weather);
        }
      }
    }
  },
  created: async function () {
    await this.getWeather();
  }
};
</script>

<style skoped>
  .weather-widget {
    width: 195px;
    font-size: .7em;
    margin-bottom: 20px;
  }
  .display-none {
    display: none !important;
  }
  .weather-widget__settings-close{
    float: right;
  }
  .weather-widget__settings-close:hover{
    cursor: pointer;
  }
  .weather-widget__settings-open {
    float: right;
  }
  .weather-widget__settings-open:hover{
    cursor: pointer;
  }
</style>
