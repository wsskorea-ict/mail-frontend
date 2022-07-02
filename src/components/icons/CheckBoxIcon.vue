<template>
  <label @click="event => event.stopPropagation()">
    <input :id="id" type="checkbox" @change="$emit('update', $event.target.checked)" none :checked="modelValue">
    <font-awesome-icon v-if="modelValue" :icon="checkIcon" class="buttonIcon" :class="classes"/>
    <font-awesome-icon v-else :icon="unCheckIcon" class="buttonIcon" :class="classes"/>
  </label>
</template>

<script>
export default {
  name: "CheckBoxIcon",
  props: {
    classes: String,
    modelValue: Boolean,
    checkIcon: {
      type: String,
      default: "fa-regular fa-square-check",
    },
    unCheckIcon: {
      type: String,
      default: "fa-regular fa-square",
    },
    id: String,
  },
  watch: {
    modelValue(v) {
      console.log(v);
    }
  },
}
</script>

<style scoped>
</style>