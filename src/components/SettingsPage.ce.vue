<template>
  <div class="settings-page display-none">
    <div class="settings-page__name-page">
      <h4>Settings</h4>
    </div>
    <div class="setting-page__save-city">
      <settings-save-city />
    </div>
    <div class="setting-page__add-city">
      <h4>Add sity</h4>
      <input>
    </div>
  </div>
</template>

<script>
import SettingsSaveCity from './SettingsSaveCity.ce.vue'

export default {
  name: 'Settings',
  components: {
    SettingsSaveCity
  }
}
</script>

