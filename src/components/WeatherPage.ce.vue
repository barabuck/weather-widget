<template>
  <div class="weather-page">
    <div class="weather-page__name-city">London</div>
    <div class="weather-page__weather-degrees">
      <div class="weather-page__weather-icon">{{ msg }}</div>
      <div class="weather-page__degrees">17</div>
    </div>
    <div class="weather-page__feel">good</div>
    <div class="weather-page__wind-pressure">
      <div class="weather-page__wind">13 m/c</div>
      <div class="weather-page__pressure">1002</div>
    </div>
    <div class="weather-page__humidity-dew-point">
      <div class="weather-page__humidity">40%</div>
      <div class="weather-page__dew-point">35</div>
    </div>
    <div class="weather-page__visibility">20%</div>
  </div>
</template>

<script>

export default {
  name: "Weather",
  props: {
    msg: String,
  }
};
</script>

