<template>
  <div class="mailArea">
    <div class="tool border-bottom">

    </div>
    <div class="mailContentArea">
      <div class="w-100" v-html="mailDetail.content"></div>
    </div>
  </div>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "MailShowItem",
  computed: {
    ...mapState(['mailDetail']),
  }
}
</script>

<style scoped>

.mailArea {
  height: calc(100vh - var(--app-header-height) - var(--area-gap) - var(--app-mail-detail-tool-height));
}

.tool {
  height: var(--app-mail-detail-tool-height);
}

.mailContentArea {
  height: 100%;
  overflow-y: scroll;
}

.mailContentArea::-webkit-scrollbar {
  display: none;
}

</style>