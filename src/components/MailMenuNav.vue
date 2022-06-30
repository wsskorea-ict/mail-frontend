<template>
  <div class="p-2">
    <div class="border-bottom p-3 d-flex toolWrapper">
      <!-- Check All Button -->
      <div class="tool">
        <check-box-icon
            :modelValue="checkedMailAll"
            @update:modelValue="SET_CHECKED_MAIL_LIST"
            :classes="'leadIcon'"></check-box-icon>
      </div>

      <!-- Remove Button -->
      <div class="tool">
        <font-awesome-icon
            icon="fa-solid fa-trash"
            class="leadIcon buttonIcon"
            :class="{disabled: !checkedMailNumber}"
            @click="deleteMail" />
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
    ...mapState(['checkedMailAll']),
    ...mapGetters(['checkedMailNumber', 'checkedMailList']),
  },
  methods: {
    ...mapMutations(['SET_CHECKED_MAIL_LIST']),
    ...mapActions(['DESTROY_MAIL_LIST']),
    deleteMail() {
      if(!this.checkedMailNumber) return;
      if(!window.confirm("정말 삭제하시겠습니까?")) return;

      this.DESTROY_MAIL_LIST(this.checkedMailList.map(mail => mail.id));
    }
  },
}
</script>

<style scoped>
.toolWrapper .tool:not(:last-child) {
  margin-right: 2rem;
}
</style>