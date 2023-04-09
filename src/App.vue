<template>
  <div class="wrapper">
    <Navbar />
    <router-view />
  </div>
</template>
<script lang="ts">

import Navbar from './components/UI/Navbar.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    Navbar
  }
})
</script>
<style lang="scss">
@import url('@/assets/css/main.css');

.wrapper {
  margin: 0 40px;
}

@media screen and (max-width: 992px) {
  .wrapper {
    margin: 0 20px;
  }
}
</style>
