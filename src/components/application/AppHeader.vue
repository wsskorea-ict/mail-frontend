<template>
  <div id="header">
    <div class="d-flex align-items-center justify-content-between h-100">
      <!-- left items -->
      <div class="d-flex align-items-center">
        <!-- logo -->
        <h1 class="logo ps-4 mb-0 h3">
          <router-link :to="{name: 'index'}">LOGO</router-link>
        </h1>

        <!-- search -->
        <div class="searchBox d-flex align-items-center searchForm ms-2" :class="{focusInput}">
          <input @focus="focusInput = true" @blur="focusInput = false" type="text" name="search" v-model="searchKeyWord"
                 placeholder="Search mail" @change="searchReady"
                 class="form-control" autocomplete="off">
          <font-awesome-icon icon="fa-solid fa-xmark" class="button close" @click="searchKeyWord = ''"/>
        </div>
      </div>

      <!-- right items -->
      <div class="pe-4">
        <!-- user profile -->
        <span class="me-3">{{ auth.name }}</span>

        <button class="btn btn-outline-light" @click="logout">logout</button>
      </div>
    </div>

  </div>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
  name: 'AppHeader',
  data() {
    return {
      searchKeyWord: "",
      searchReadyTimeout: null,
      focusInput: false,
    }
  },
  computed: {
    ...mapState(['auth'])
  },
  methods: {
    ...mapActions(['LOGOUT']),
    search() {
      console.log(this.searchKeyWord);
    },
    searchReady() {
      clearTimeout(this.searchReadyTimeout);
      this.searchReadyTimeout = setTimeout(this.search, 500);
    },
    logout() {
      this.LOGOUT();
      this.$router.push({name: 'login'});
    }
  },
}
</script>

<style scoped>
#header {
  height: var(--app-header-height);
  background-color: var(--point-bg-color);
  color: #fff;
}

.logo {
  width: var(--app-sidebar-width);
}

.searchBox {
  width: 500px;
}

.searchForm {
  border-radius: .5rem;
  border: 1px solid rgba(0, 0, 0, .3);
  overflow: hidden;
  background-color: rgba(255, 255, 255, .8);
  color: rgba(0, 0, 0, .5);
  transition: background-color .3s;
}

.searchForm.focusInput {
  background-color: rgba(255, 255, 255, 1);
}

.searchForm input {
  border: none;
  background: none;
}

.searchForm input:focus {
  box-shadow: none;
}

.searchForm .button {
  padding: .375rem .75rem;
}
</style>