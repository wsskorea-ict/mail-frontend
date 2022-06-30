<template>
  <app-header></app-header>
  <div class="d-flex">
    <app-sidebar></app-sidebar>

    <div class="col">
      <mail-menu-nav></mail-menu-nav>


    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/layout/AppHeader";
import AppSidebar from '@/components/layout/AppSidebar';
import MailMenuNav from "@/components/MailMenuNav";

export default {
  name: 'StarredView',
  components: {AppHeader, AppSidebar, MailMenuNav},
}
</script>

<style scoped>

</style>