<template>
  <ul class="px-4">
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
    ...mapState(['mailList', 'checkedMailIds'])
  },
  methods: {
    ...mapMutations(['SET_CHECKED_MAIL']),
    ...mapActions(['FETCH_MAIL_LIST']),
    checkMail(idx, bool) {
      this.SET_CHECKED_MAIL({idx, bool});
    }
  },
  created() {
    this.FETCH_MAIL_LIST();
  },
}
</script>

<style scoped>
</style>