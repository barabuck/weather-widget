<template>
  <div class="weather-page">
    <div class="weather-page__name-city" >{{weather.name}}, {{weather.sys.country}}</div>
    <div class="weather-page__weather-degrees">
      <div class="weather-page__weather-icon">
        <img v-bind:src="'http://openweathermap.org/img/wn/' + weather.weather[0].icon.replace('n', 'd') + '.png'" />
      </div>
      <div class="weather-page__degrees">{{Math.round(weather.main.temp - 273.15)}}°C</div>
    </div>
    <div class="weather-page__feel">Feels like: {{Math.round(weather.main.feels_like - 273.15)}}°C</div>
    <div class="weather-page__wind-pressure">
      <div class="weather-page__wind"><WeatherWindy />{{weather.wind.speed}} m/c {{this.windDeg}}</div>
      <div class="weather-page__pressure">{{weather.main.pressure}}hPa</div>
    </div>
    <div class="weather-page__humidity-visibility">
      <div class="weather-page__humidity">Humidity: {{weather.main.humidity}}%</div>
      <div class="weather-page__visibility">Visibility: {{weather.visibility /1000}}km</div>
    </div>
    
  </div>
</template>

<script>
import { WeatherWindy } from 'mdue';

export default {
  
  name: "Weather",
  props: {
    weather: Object
  },
  components: {
    WeatherWindy
  },
  data() {
    return {
      windDeg: '',
      directions: ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'],
      scrImgWetaher: ''
    }
  },
  methods: {
    setWindDeg: function () {
      this.windDeg = this.directions[(Math.round((this.weather.wind.deg * 8 / 360), 0) + 8)%8];
    }
  },
  created: function () {
    this.setWindDeg();
  }
};
</script>

<style scoped>
  .weather-page {
    margin-bottom: 10px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 2fr 1fr 1fr 1fr;
    grid-gap: 0px;
  }
  .weather-page__weather-degrees {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .weather-page__wind-pressure {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .weather-page__humidity-visibility  {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .weather-page__name-city {
    font-weight: bold;
  }
  .weather-page__degrees {
    font-weight: bold;
    font-size: 2em;
    margin-top: 5px;
  }
  .weather-page__weather-icon {
    margin-left: 11px;
    margin-top: -5px;
}
</style>

