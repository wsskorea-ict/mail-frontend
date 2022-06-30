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
            :class="{disabled: !checkMailNumber}"
            @click="deleteMail" />
      </div>
    </div>
  </div>
</template>

<script>
import CheckBoxIcon from "@/components/icons/CheckBoxIcon";
import {mapGetters, mapMutations, mapState} from "vuex";

export default {
  name: 'MailMenuNav',
  components: {CheckBoxIcon},
  computed: {
    ...mapState(['checkedMailAll']),
    ...mapGetters(['checkMailNumber']),
  },
  methods: {
    ...mapMutations(['SET_CHECKED_MAIL_LIST']),
    deleteMail() {
      if(!this.checkMailNumber) return;

      console.log("delete mail");
    }
  },
}
</script>

<style scoped>
.toolWrapper .tool:not(:last-child) {
  margin-right: 2rem;
}
</style>