<template>
  <div class="save-city">
    <label class="save-city__name" >{{name}}</label>
    <Delete class="save-city__delete" v-on:click="deleteCity(this)"/>
  </div>
</template>

<script>
import { Delete } from 'mdue';

export default {
  name: 'Settings City',
  props: {
    name: String,
    id: Number,
    getWeather: Function
  },
  components: {
    Delete
  },
  methods: {
    deleteCity: function (elem) {
      let newListCities = elem.$parent.$el;
      elem.$el.remove();
      let newListCitiesArr = [];
      newListCities.querySelectorAll('.save-city__name').forEach(element => {
        newListCitiesArr.push(element.innerText);
      });
      localStorage.setItem('saveCities', JSON.stringify(newListCitiesArr));
      this.getWeather();
    }
  }
}
</script>

<style scoped>
  .save-city {
    display: grid;
    grid-template-columns : 5fr 1fr;
    margin-bottom: 10px;
  }
  .save-city__name {
    border: 1px solid;
    border-radius: 2px;
    padding: 1px;
}
  .save-city__delete {
    margin-top: 3px;
    margin-left: 5px;
  }
  .save-city__delete:hover {
    cursor: pointer;
  }
</style>
