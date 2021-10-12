import { defineCustomElement } from 'vue';
import App from './App.vue';

customElements.define('weather-widget', defineCustomElement(App));

