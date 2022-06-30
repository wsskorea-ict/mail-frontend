<template>
  <ul class="px-4 col">
    <li
        class="item"
        :key="mail.id"
        v-for="mail in mailList">
      <check-box-icon
          :modelValue="checkedMailIds[mail.idx]"
          @update:modelValue="(value) => checkMail(mail.idx, value)"></check-box-icon>

      {{ mail.content }}
    </li>
  </ul>
</template>

<script>
import CheckBoxIcon from "@/components/icons/CheckBoxIcon";
import {mapActions, mapMutations, mapState} from "vuex";

export default {
  name: "MailListWrapper",
  components: {CheckBoxIcon},
  computed: {
    ...mapState(['mailList', 'checkedMailIds']),
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
    ...mapMutations(['SET_CHECKED_MAIL', 'SET_MAIL_TYPE', 'SET_MAIL_PAGE']),
    ...mapActions(['FETCH_MAIL_LIST']),
    checkMail(idx, bool) {
      this.SET_CHECKED_MAIL({idx, bool});
    }
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
    },
    'page': function (value) {
      this.SET_MAIL_PAGE(value);
    },
  }
}
</script>

<style scoped>
</style>