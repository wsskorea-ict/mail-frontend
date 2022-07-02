<template>
  <div class="mailArea d-flex flex-column h-100">
    <!-- Header Area -->
    <div class="mailHeaderArea border-bottom p-4 d-flex justify-content-between">
      <!-- left items -->
      <div>
        <h3 class="mb-3">
          <check-box-icon
              :model-value="mailDetail.isStarred"
              @update="bool => FETCH_MAIL_STAR({id: mailDetail.id, bool})"
              checkIcon="fa-solid fa-star"
              unCheckIcon="fa-regular fa-star"
              classes=""
          ></check-box-icon>
          {{ mailDetail.title }}
        </h3>
        <div>
          <span class="userInfoPrefix">from.</span>
          {{ mailDetail.sender.name }}
          <span class="ms-1">&lt;{{ mailDetail.sender.email }}&gt;</span>
        </div>
        <div>
          <span class="userInfoPrefix">to.</span>
          {{ mailDetail.receiver.name }}
          <span class="ms-1">&lt;{{ mailDetail.receiver.email }}&gt;</span>
        </div>
      </div>

      <!-- right items -->
      <div class="d-flex flex-column justify-content-between align-items-end">
        <!-- mail date time -->
        <div>{{ mailDetail.dateTime }}</div>
        <!-- mail tool -->
        <div class="d-flex justify-content-end">
          <!-- Remove Button -->
          <div class="tool">
            <font-awesome-icon
                icon="fa-solid fa-trash"
                class="leadIcon buttonIcon"
                @click="deleteMail"/>
          </div>
          <!-- Reply Button -->
          <div class="tool">
            <font-awesome-icon
                icon="fa-solid fa-paper-plane"
                class="leadIcon buttonIcon"
                @click="replyMail"/>
          </div>
          <!-- Share Button -->
          <div class="tool">
            <font-awesome-icon
                icon="fa-solid fa-share"
                class="leadIcon buttonIcon"
                @click="shareMail"/>
          </div>
          <!-- Etc Button -->
          <div class="tool">
            <font-awesome-icon
                icon="fa-solid fa-ellipsis-vertical"
                class="leadIcon buttonIcon"
                @click="openEtc"/>
          </div>
        </div>
      </div>

    </div>

    <!-- File Area -->
    <div class="mailFileArea" v-if="mailDetail.attachments">
      <div class="px-4 py-3 fileInfo">
        <div class="d-flex justify-content-between">
          <div>
            <label for="showFileListCheckBox" class="h6">Attachments ({{ mailDetail.attachments.files.length }})</label>
            <check-box-icon
                :modelValue="showFileList"
                checkIcon="fa-solid fa-angle-up"
                unCheckIcon="fa-solid fa-angle-down"
                classes="ms-2"
                id="showFileListCheckBox"
                @update="v => showFileList = v"
            ></check-box-icon>
          </div>

          <a :href="mailDetail.attachments.downloadAll" class="ms-2 underline">Download All</a>
        </div>
      </div>

          <div class="px-4 pb-3 fileWrapper" v-if="showFileList">
            <div class="py-2 d-flex flex-wrap">

              <a :href="file.download" class="file" v-for="file in mailDetail.attachments.files" :key="file.id">
                <span class="pb-1">{{ file.name }}</span>
                <small>{{ file.size }}</small>
              </a>

            </div>
          </div>
    </div>

    <!-- Content Area -->
    <div class="mailContentArea col">
      <div class="w-100 mailContentHtml" v-html="mailDetail.content"></div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapMutations, mapState} from "vuex";
import CheckBoxIcon from "@/components/icons/CheckBoxIcon";

export default {
  name: "MailShowItem",
  components: {CheckBoxIcon},
  computed: {
    ...mapState(['mailDetail']),
  },
  data() {
    return {
      showFileList: false,
    }
  },
  methods: {
    ...mapActions(['FETCH_MAIL_STAR', 'DESTROY_MAIL_LIST']),
    ...mapMutations(['SET_MAIL_SHOW']),
    deleteMail() {
      this.DESTROY_MAIL_LIST([this.mailDetail.id]);
      this.SET_MAIL_SHOW({});
    },
    replyMail() {

    },
    shareMail() {

    },
    openEtc() {

    }
  }
}
</script>

<style scoped>

.mailHeaderArea {
  border-color: var(--light-mode-bg-1-color) !important;
}

.mailContentArea {
  overflow-y: scroll;
  position: relative;
}

.mailContentArea .mailContentHtml {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}

.userInfoPrefix {
  display: inline-block;
  width: 2.6em;
  margin-right: .3em;
}

.tool:not(:first-child) {
  margin-left: 1.4rem;
}

.mailFileArea {
  background-color: var(--light-mode-bg-1-color);
  position: relative;
  z-index: 2;
}

.fileInfo {
  position: relative;
  background-color: inherit;
}

.fileWrapper {
  margin-left: -.4rem;
  margin-right: -.4rem;
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  background-color: inherit;
  z-index: -1;
}

.file {
  display: flex;
  flex-direction: column;
  border: 1px solid var(--light-mode-text-4-color);
  background-color: var(--light-mode-bg-0-color);
  border-radius: .2rem;
  padding: .6rem 1rem;
  margin: 0 .4rem;
}

/* width */
.mailContentArea::-webkit-scrollbar {
  width: 10px;
}

/* Handle */
.mailContentArea::-webkit-scrollbar-thumb {
  background: var(--light-mode-text-4-color);
  border-radius: 50rem;
}

/* Handle on hover */
.mailContentArea::-webkit-scrollbar-thumb:hover {
  background: var(--light-mode-text-3-color);
}

</style>