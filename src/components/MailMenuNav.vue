<template>
  <div class="p-4">
    <input type="checkbox" v-model="checkAll" @change="checkAllToggle">
  </div>
</template>

<script>
export default {
  name: 'MailMenuNav',
  data() {
    return {
      checkAll: false,
    }
  },
  methods: {
    checkAllToggle() {
      this.$emit("checkAll", this.checkAll);
    }
  }
}
</script>

<style scoped>

</style>