<template>
  <app-layout>
    <template v-if="false">
      <div class="col-4 mailWrapperArea">
        <div class="d-flex flex-column h-100 mailWrapper" v-if="draftList">
          <mail-menu-nav></mail-menu-nav>
          <mail-list-wrapper></mail-list-wrapper>
          <mail-list-pagination></mail-list-pagination>
        </div>
      </div>

      <div class="col mailShowArea">
        <!--      <mail-show-item v-if="mailDetail"></mail-show-item>-->
        <mail-empty-item></mail-empty-item>
      </div>
    </template>
  </app-layout>
</template>

<script>
import AppLayout from "@/views/template/AppLayout";
import MailEmptyItem from "@/components/mail/MailEmptyItem";
import MailMenuNav from "@/components/mail/MailMenuNav";
import MailListWrapper from "@/components/mail/MailListWrapper";
import MailListPagination from "@/components/mail/MailListPagination";
import {mapState} from "vuex";

export default {
  name: "DraftIndexView",
  components: {AppLayout, MailEmptyItem, MailMenuNav, MailListWrapper, MailListPagination},
  ...mapState(['draftList']),
}
</script>

<style scoped>

</style>