<template>
  <div class="settings-page display-none">
    <div class="settings-page__name-page">
      <h4>Settings</h4>
    </div>
    <div class="setting-page__save-city" >
      <div v-if="saveCities.length > 0">
        <settings-save-city v-for="(name, index) in saveCities" v-bind:key="index" v-bind:name="name" v-bind:getWeather="getWeather"/>
      </div>
      <div v-else>
        Add city
      </div>
    </div>
    <div class="setting-page__add-city-frame">
      <label class="setting-page__label" >Add city</label>
      <div class="setting-page__add-city">
        <input class="setting-page__input" type="text" placeholder="Enter city">
        <Send class="setting-page__add" v-on:click="addCity(this)" />
      </div>
      <div class="setting-page__alert" v-show="visibleAlert">{{alertBody}}</div>
    </div>
  </div>
</template>

<script>
import SettingsSaveCity from './SettingsSaveCity.vue';
import { Send } from 'mdue';

export default {
  name: 'Settings',
  props: {
    getWeather: Function
  },
  components: {
    SettingsSaveCity,
    Send
  },
  data() {
    return {
      saveCities: [],
      visibleAlert: false,
      alertBody: ''
    }
  },
  methods: {
    addCity: async function (elem) {
      let city = elem.$el.querySelector('.setting-page__input').value;
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9a1a96279762372298912cc9f5ea961f`;
      let response = await fetch(url);
      let weather = await response.json();
      if (weather.cod == 200) {
        let checkCity = true;
        this.getListCities().forEach(city => {
          if (city == weather.name) {
            checkCity = false;
          }  
        });
        if (checkCity) {
          elem.$el.querySelector('.setting-page__input').value = '';
          this.saveCities.push(weather.name);
          localStorage.setItem('saveCities', JSON.stringify(this.saveCities));
          this.getWeather();
        } else {
          this.changeVisibleAlert('The city already exists');
          elem.$el.querySelector('.setting-page__input').value = '';
        }
      } else {
        this.changeVisibleAlert('Unknown city');
        elem.$el.querySelector('.setting-page__input').value = '';
      }
    },
    getListCities: function () {
      if (JSON.parse(localStorage.getItem('saveCities'))) {
        return JSON.parse(localStorage.getItem('saveCities'));
      }
    },
    changeVisibleAlert: function (alert) {
      this.alertBody = alert;
      this.visibleAlert = true;
      setTimeout(() => {
        this.alertBody = ''
        this.visibleAlert = false
      }, 3000);
    }
  },
  created: async function () {
    this.saveCities = this.getListCities();
  }
}
</script>

<style scoped>
  .settings-page {
    height: 250px;
    display: grid;
    grid-template-rows: 1fr 3fr 2fr;
  }
  .setting-page__add-city {
    display: grid;
    grid-template-columns : 5fr 1fr;
  }
  .setting-page__add-city-frame {
    display: grid;
    grid-template-rows : 1fr 1fr 1fr;
    margin-top: 20px;
  }
  .setting-page__input {
    max-height: 13px;
  }
  .setting-page__add {
    margin-top: 3px;
    margin-left: 3px;
  }
  .setting-page__add:hover {
    cursor: pointer;
  }
  .setting-page__alert {
    margin-left: 14px;
    border: 1px solid;
    border-radius: 2px;
    border-color: red;
    padding: 2px;
    max-width: 121px;
    max-height: 15px;
    text-align: center;
    vertical-align: middle;
}
</style>

