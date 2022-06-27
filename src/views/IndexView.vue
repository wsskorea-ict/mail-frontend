<template>
  <div v-if="mails">
    <ul>
      <li v-for="mail in mails" :key="mail.id">{{ mail }}</li>
    </ul>
  </div>
</template>

<script>
import fetchData from '@/api/index.js';

export default {
  name: 'IndexView',
  data() {
    return {
      mails: [],
    }
  },
  mounted() {
    fetchData.mail.getAll().then(res => {
      this.mails = res;
    })
  }
}
</script>

<style>

</style>