<template>
  <header class="border-bottom">
    <div class="d-flex align-items-center h-100">
      <!-- logo -->
      <div class="side px-5">
        <h1>
          <router-link :to="{name: 'index'}">LOGO</router-link>
        </h1>
      </div>

      <div class="d-flex align-items-center justify-content-between col pe-5">
        <!-- search -->
        <div class="searchBox d-flex align-items-center searchForm">
          <input type="text" name="search" v-model="searchKeyWord" placeholder="Search mail" @change="searchReady"
                 class="form-control" autocomplete="off">
          <font-awesome-icon icon="fa-solid fa-xmark" class="button close" @click="searchKeyWord = ''"/>
        </div>

        <!-- user profile -->
        <div>
          <span class="me-3">{{auth.name}}</span>

          <button class="btn btn-secondary" @click="logout">logout</button>
        </div>
      </div>

    </div>
  </header>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
  name: 'AppHeader',
  data() {
    return {
      searchKeyWord: "",
      searchReadyTimeout: null,
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
header {
  height: var(--app-header-height);
}

.side {
  width: var(--app-sidebar-width);
}

.searchBox {
  width: 500px;
}

.searchForm {
  border-radius: 50rem;
  border: 1px solid #333;
  overflow: hidden;
}

.searchForm input {
  border: none;
}

.searchForm input:focus {
  box-shadow: none;
}

.searchForm .button {
  padding: .375rem .75rem;
}
</style>