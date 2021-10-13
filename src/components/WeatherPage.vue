<template>
  <div class="weather-page">
    <h1 class="again">Weather</h1>
    <h3>{{ msg }}</h3>
  </div>
</template>

<script>
export default {
  name: "Wetaher",
  props: {
    msg: String,
  }
};
</script>
