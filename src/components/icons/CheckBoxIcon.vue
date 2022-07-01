<template>
  <label>
    <input type="checkbox" @change="$emit('update:modelValue', $event.target.checked)" none :checked="modelValue">
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
    }
  },
}
</script>

<style scoped>

</style>