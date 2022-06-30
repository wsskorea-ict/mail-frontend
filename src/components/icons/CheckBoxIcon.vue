<template>
  <label>
    <input type="checkbox" @change="$emit('update:modelValue', $event.target.checked)" none :checked="modelValue">
    <font-awesome-icon v-if="modelValue" icon="fa-regular fa-square-check" class="buttonIcon" :class="classes"/>
    <font-awesome-icon v-else icon="fa-regular fa-square" class="buttonIcon" :class="classes"/>
  </label>
</template>

<script>
export default {
  name: "CheckBoxIcon",
  props: {
    classes: String,
    modelValue: Boolean,
  },
}
</script>

<style scoped>

</style>