<template>
  <div>
    <ul>
      <li v-for="mail in mails" :key="mail.id">{{ mail }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MailListWrapper",
  props: ['mails'],
}
</script>

<style scoped>

</style>