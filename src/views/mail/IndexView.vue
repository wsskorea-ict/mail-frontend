<template>
  <div class="d-flex flex-column w-100 h-100">
    <app-header></app-header>
    <div class="d-flex col contentArea">
      <app-sidebar></app-sidebar>

      <div class="col-4 mailWrapperArea">
        <div class="d-flex flex-column h-100 mailWrapper" v-if="mailList">
          <mail-menu-nav></mail-menu-nav>
          <mail-list-wrapper></mail-list-wrapper>
          <mail-list-pagination></mail-list-pagination>
        </div>
      </div>

      <div class="col mailShowArea">
        <mail-show-item v-if="mailDetail"></mail-show-item>
        <mail-empty-item v-else></mail-empty-item>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from "@/components/layout/AppHeader";
import AppSidebar from '@/components/layout/AppSidebar';
import MailMenuNav from "@/components/mail/MailMenuNav";
import MailListWrapper from "@/components/mail/MailListWrapper";
import MailListPagination from "@/components/mail/MailListPagination";
import MailShowItem from "@/components/mail/MailShowItem";
import MailEmptyItem from "@/components/mail/MailEmptyItem";
import {mapState} from "vuex";

export default {
  name: 'MailIndexView',
  components: {AppHeader, AppSidebar, MailMenuNav, MailListWrapper, MailListPagination, MailShowItem, MailEmptyItem},
  computed: {
    ...mapState(['mailDetail', 'mailList']),
  },
}
</script>

<style>
.contentArea {
  padding: var(--area-gap) 0;
  padding-right: var(--area-gap);
}

.mailWrapperArea {
  padding: 0 var(--area-gap);
}

.mailWrapper {
  border-radius: var(--area-radius);
  background-color: var(--light-mode-bg-0-color);
}

.mailShowArea {
  border-radius: var(--area-radius);
  background-color: var(--light-mode-bg-0-color);
  color: var(--light-mode-text-4-color);
  overflow: hidden;
}

[theme="dark"] .mailShowArea {
  background-color: var(--dark-mode-bg-1-color);
  color: var(--dark-mode-text-4-color);
}
</style>