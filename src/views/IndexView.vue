<template>
  <app-header></app-header>
  <div class="d-flex">
    <app-sidebar></app-sidebar>

    <div class="col">
      <mail-menu-nav></mail-menu-nav>
      <mail-list-wrapper></mail-list-wrapper>
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/layout/AppHeader";
import AppSidebar from '@/components/layout/AppSidebar';
import MailMenuNav from "@/components/MailMenuNav";
import MailListWrapper from "@/components/MailListWrapper";

export default {
  name: 'IndexView',
  components: {AppHeader, AppSidebar, MailMenuNav, MailListWrapper},
}
</script>

<style>

</style>