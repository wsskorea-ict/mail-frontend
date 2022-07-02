<template>
  <app-layout>
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
  </app-layout>
</template>

<script>
import AppLayout from "@/views/template/AppLayout";
import MailMenuNav from "@/components/mail/MailMenuNav";
import MailListWrapper from "@/components/mail/MailListWrapper";
import MailListPagination from "@/components/mail/MailListPagination";
import MailShowItem from "@/components/mail/MailShowItem";
import MailEmptyItem from "@/components/mail/MailEmptyItem";
import {mapState} from "vuex";

export default {
  name: 'MailIndexView',
  components: {MailMenuNav, MailListWrapper, MailListPagination, MailShowItem, MailEmptyItem, AppLayout},
  computed: {
    ...mapState(['mailDetail', 'mailList']),
  },
}
</script>

<style>
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
  color: var(--light-mode-text-2-color);
  overflow: hidden;
}

[theme="dark"] .mailShowArea {
  background-color: var(--dark-mode-bg-1-color);
  color: var(--dark-mode-text-4-color);
}
</style>