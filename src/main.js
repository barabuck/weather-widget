import { createApp } from 'vue';
import WeatherWidget from './WeatherWidget.vue';
//style
import Equal from 'equal-vue';
import 'equal-vue/dist/style.css';

createApp(WeatherWidget).use(Equal).mount('weather-widget')
