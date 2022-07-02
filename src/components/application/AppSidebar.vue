<template>
  <nav :class="{smallSide: smallSideBar}">
    <div class="p-3 h-100 d-flex flex-column justify-content-between sidebarArea">
      <!-- sidebar top area -->
      <div class="pt-3">
        <!-- mail navigation -->
        <ul class="navigation ps-2">
          <li>
            <router-link :to="{name: 'index', params: {type: 'inbox'}}">
              <span class="iconBox"><font-awesome-icon icon="fa-solid fa-inbox"/></span>
              <span class="iconTitle" v-if="!smallSideBar">Inbox</span>
            </router-link>
          </li>
          <li>
            <router-link :to="{name: 'index', params: {type: 'starred'}}">
              <span class="iconBox"><font-awesome-icon icon="fa-solid fa-star"/></span>
              <span class="iconTitle" v-if="!smallSideBar">Starred</span>
            </router-link>
          </li>
          <li>
            <router-link :to="{name: 'index', params: {type: 'sent'}}">
              <span class="iconBox"><font-awesome-icon icon="fa-solid fa-paper-plane"/></span>
              <span class="iconTitle" v-if="!smallSideBar">Sent</span>
            </router-link>
          </li>
          <li>
            <router-link :to="{name: 'draft.index'}">
              <span class="iconBox"><font-awesome-icon icon="fa-solid fa-floppy-disk"/></span>
              <span class="iconTitle" v-if="!smallSideBar">Draft</span>
            </router-link>
          </li>
        </ul>
      </div>

      <!-- sidebar bottom area -->
      <div class="d-flex flex-column align-items-start">
        <font-awesome-icon icon="fa-solid fa-gear" class="buttonIcon leadIcon"/>

        <div class="iconBox leadIcon text-center mt-3">
          <check-box-icon
              checkIcon="fa-solid fa-chevron-right"
              unCheckIcon="fa-solid fa-chevron-left"
              :modelValue="smallSideBar"
              @update="SET_SIDEBAR(!smallSideBar)"
          ></check-box-icon>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import CheckBoxIcon from "@/components/icons/CheckBoxIcon";
import {mapMutations, mapState} from "vuex";

export default {
  name: 'AppSidebar',
  components: {CheckBoxIcon},
  computed: {
    ...mapState(['smallSideBar']),
  },
  methods: {
    ...mapMutations(['SET_SIDEBAR']),
  }
}
</script>

<style scoped>
nav {
  width: var(--app-sidebar-width);
  background-color: var(--point-deep-color);
  color: #fff;
  border-top-right-radius: var(--area-radius);
  border-bottom-right-radius: var(--area-radius);
  transition: width .3s;
}

nav.smallSide {
  width: var(--app-sidebar-small-width);
}

.sidebarArea {
  overflow: hidden;
}

.navigation li {
  margin-bottom: .6rem;
}

.navigation a {
  opacity: .6;
  position: relative;
}

.navigation a.router-link-active {
  opacity: 1;
  /*color: var(--point-text-color);*/
}

.iconTitle {
  position: absolute;
  top: 50%;
  left: calc(100% + .4em);
  transform: translateY(-50%);
}
</style>