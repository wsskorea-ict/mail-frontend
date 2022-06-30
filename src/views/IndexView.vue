<template>
  <app-header></app-header>
  <div class="d-flex">
    <app-sidebar></app-sidebar>

    <div class="col">
      <mail-menu-nav @checkAll="checkAll"></mail-menu-nav>

      <mail-list-wrapper :mails="mails"></mail-list-wrapper>
    </div>
  </div>
</template>

<script>
import fetchData from '@/api/index';
import AppHeader from "@/components/layout/AppHeader";
import AppSidebar from '@/components/layout/AppSidebar';
import MailMenuNav from "@/components/MailMenuNav";
import MailListWrapper from "@/components/MailListWrapper";

export default {
  name: 'IndexView',
  components: {AppHeader, AppSidebar, MailMenuNav, MailListWrapper},
  data() {
    return {
      mails: [],
      checked: [],
    }
  },
  methods: {
    checkAll(bool) {
      this.checked = new Array(this.mails.length).fill(bool);
      console.log(this.checked);
    }
  },
  mounted() {
    fetchData.mail.getAll().then(res => {
      this.mails = res;
    })
  },
}
</script>

<style>

</style>