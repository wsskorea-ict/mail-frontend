<template>
  <ul class="px-4">
    <li
        class="item"
        :key="mail.id"
        v-for="(mail, i) in mailList">
      <check-box-icon
          :modelValue="checkedMailList[i]"
          @update:modelValue="(value) => checkMail(i, value)"></check-box-icon>

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
    ...mapState(['mailList', 'checkedMailList'])
  },
  methods: {
    ...mapMutations(['SET_CHECKED_MAIL']),
    ...mapActions(['FETCH_MAIL_LIST']),
    checkMail(i, bool) {
      this.SET_CHECKED_MAIL({i, bool});
    }
  },
  created() {
    this.FETCH_MAIL_LIST();
  },
}
</script>

<style scoped>
</style>