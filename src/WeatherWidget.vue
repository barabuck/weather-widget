<template>
  <div class="weather-widget">
    <weather-page msg="Soon..." />
    <settings-page />
  </div>
</template>

<script>
import WeatherPage from "./components/WeatherPage.vue";
import SettingsPage from "./components/SettingsPage.vue";
import WeatherWidgetCss from './styles/WeatherWidget.module.css';

export default {
  name: "Weather Widget",
  components: {
    WeatherPage,
    SettingsPage,
  }
};
</script>
