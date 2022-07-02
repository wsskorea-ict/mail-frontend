<template>
  <router-view :theme="theme"></router-view>
</template>

<script>

import {mapState} from "vuex";

export default {
  name: 'App',
  computed: {
    ...mapState(['theme']),
  }
}
</script>

<style>

</style>