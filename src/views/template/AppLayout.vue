<template>
  <div class="d-flex flex-column w-100 h-100">
    <app-header></app-header>
    <div class="d-flex col contentArea">
      <app-sidebar></app-sidebar>

      <slot></slot>
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/application/AppHeader";
import AppSidebar from '@/components/application/AppSidebar';

export default {
  name: "AppLayout",
  components: {AppHeader, AppSidebar},
}
</script>

<style scoped>
.contentArea {
  padding: var(--area-gap) 0;
  padding-right: var(--area-gap);
}
</style>