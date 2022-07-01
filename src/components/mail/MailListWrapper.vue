<template>
  <!-- mail wrapper -->
  <div class="col">
    <mail-list-item
        :mail="mail"
        :key="mail.id"
        v-for="mail in mailList"></mail-list-item>
  </div>
</template>

<script>
import {mapActions, mapMutations, mapState} from "vuex";
import MailListItem from "@/components/mail/MailListItem";

export default {
  name: "MailListWrapper",
  components: {MailListItem},
  computed: {
    ...mapState(['mailList']),
    type() {
      const {type} = this.$route.params;
      return type;
    },
    page() {
      const {page} = this.$route.params;
      return page
    }
  },
  methods: {
    ...mapMutations(['SET_MAIL_TYPE', 'SET_MAIL_PAGE']),
    ...mapActions(['FETCH_MAIL_LIST']),
  },
  created() {
    this.SET_MAIL_TYPE(this.type);
    this.SET_MAIL_PAGE(this.page);
    this.FETCH_MAIL_LIST();
  },
  watch: {
    '$route.params': {
      handler: function () {
        this.FETCH_MAIL_LIST();
      },
    },
    'type': function (value) {
      this.SET_MAIL_TYPE(value);
      console.log(value);
    },
    'page': function (value) {
      this.SET_MAIL_PAGE(value);
    },
  }
}
</script>

<style scoped>
</style>