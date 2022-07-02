<template>
  <div class="p-3">
    <!-- write mail button -->
    <button class="btn btn-point">New Message</button>
  </div>
  <div class="px-4">
    <div class="border-bottom py-3 d-flex justify-content-between">
      <!-- left items: tool list -->
      <div class="toolWrapper d-flex">
        <!-- Check All Button -->
        <div class="checkAll">
          <check-box-icon
              :modelValue="checkedMailAll"
              @update="SET_CHECKED_MAIL_LIST"
              :classes="'leadIcon'"></check-box-icon>
        </div>

        <!-- Remove Button -->
        <div class="tool">
          <font-awesome-icon
              icon="fa-solid fa-trash"
              class="leadIcon buttonIcon"
              :class="{disabled: !checkedMailNumber}"
              @click="deleteMail"/>
        </div>

        <!-- Reply Button -->
        <div class="tool">
          <font-awesome-icon
              icon="fa-solid fa-paper-plane"
              class="leadIcon buttonIcon"
              :class="{disabled: !checkedMailNumber}"
              @click="replyMail"/>
        </div>

        <!-- Share Button -->
        <div class="tool">
          <font-awesome-icon
              icon="fa-solid fa-share"
              class="leadIcon buttonIcon"
              :class="{disabled: !checkedMailNumber}"
              @click="shareMail"/>
        </div>
      </div>

      <!-- right items: mail number -->
      <div>
        <font-awesome-icon
            icon="fa-solid fa-rotate-right"
            class="buttonIcon me-2"
            @click="FETCH_MAIL_LIST"/>
        {{ mailListInfo.currentNumber }} / {{ mailListInfo.totalNumber }}
      </div>
    </div>
  </div>
</template>

<script>
import CheckBoxIcon from "@/components/icons/CheckBoxIcon";
import {mapActions, mapGetters, mapMutations, mapState} from "vuex";

export default {
  name: 'MailMenuNav',
  components: {CheckBoxIcon},
  computed: {
    ...mapState(['checkedMailAll', 'mailListInfo']),
    ...mapGetters(['checkedMailNumber', 'checkedMailList']),
  },
  methods: {
    ...mapMutations(['SET_CHECKED_MAIL_LIST']),
    ...mapActions(['DESTROY_MAIL_LIST', 'FETCH_MAIL_LIST']),
    deleteMail() {
      if (!this.checkedMailNumber) return;
      if (!window.confirm("정말 삭제하시겠습니까?")) return;

      this.DESTROY_MAIL_LIST(this.checkedMailList.map(mail => mail.id));
    },
    replyMail() {

    },
    shareMail() {

    }
  },
}
</script>

<style scoped>
.toolWrapper .checkAll {
  margin-right: 2rem;
}

.toolWrapper .tool:not(:last-child) {
  margin-right: 1.4rem;
}
</style>