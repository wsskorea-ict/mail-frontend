<template>
  <app-header></app-header>
  <div class="d-flex">
    <app-sidebar></app-sidebar>

    <div class="col">
      <div class="d-flex flex-column h-100">
        <mail-menu-nav></mail-menu-nav>
        <mail-list-wrapper></mail-list-wrapper>
        <mail-list-pagination></mail-list-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/layout/AppHeader";
import AppSidebar from '@/components/layout/AppSidebar';
import MailMenuNav from "@/components/MailMenuNav";
import MailListWrapper from "@/components/MailListWrapper";
import MailListPagination from "@/components/MailListPagination";

export default {
  name: 'IndexView',
  components: {AppHeader, AppSidebar, MailMenuNav, MailListWrapper, MailListPagination},
}
</script>

<style>

</style>