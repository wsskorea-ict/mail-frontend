<template>
  <div class="item px-4 py-2" @click="FETCH_MAIL_DETAIL(this.mail.id)">
    <div class="d-flex justify-content-between align-items-end">
      <p class="lead mb-0">{{mail.sender}}</p>
      <span class="datetime">{{ relativeDateTime(mail.dateTime) }}</span>
    </div>
    <div class="ps-1 d-flex align-items-center">
      <check-box-icon
          :modelValue="checkedMailIds[mail.idx]"
          @update:modelValue="bool => SET_CHECKED_MAIL({idx: mail.idx, bool})"></check-box-icon>

      <check-box-icon
          :model-value="mail.isStarred"
          @update:modelValue="bool => FETCH_MAIL_STAR({id: mail.id, bool})"
          checkIcon="fa-solid fa-star"
          unCheckIcon="fa-regular fa-star"
          classes="ms-2 me-3"
      ></check-box-icon>

      {{ mail.title }}
    </div>
  </div>
</template>

<script>
import CheckBoxIcon from "@/components/icons/CheckBoxIcon";
import {mapActions, mapGetters, mapMutations, mapState} from "vuex";

export default {
  name: "MailListItem",
  components: {CheckBoxIcon},
  props: ["mail"],
  computed: {
    ...mapState(['checkedMailIds']),
    ...mapGetters(['relativeDateTime']),
  },
  methods: {
    ...mapMutations(['SET_CHECKED_MAIL']),
    ...mapActions(['FETCH_MAIL_DETAIL', 'FETCH_MAIL_STAR']),
  },
}
</script>

<style scoped>
.item {
  cursor: pointer;
}

.item:hover {
  background: var(--light-mode-bg-2-color);
}

.item .datetime {
  color: var(--light-mode-text-4-color);
}
</style>