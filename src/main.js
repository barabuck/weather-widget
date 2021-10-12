import { defineCustomElement } from 'vue';
import WeatherWidget from './WeatherWidget.vue';

customElements.define('weather-widget', defineCustomElement(WeatherWidget));

