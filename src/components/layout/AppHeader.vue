<template>
  <header class="border-bottom">
    <div class="d-flex align-items-center h-100">
      <!-- logo -->
      <div class="side px-5">
        <h1>
          <router-link :to="{name: 'index'}">LOGO</router-link>
        </h1>
      </div>

      <div class="searchBox">
        <input type="text" name="search" v-model="searchKeyWord" class="form-control" placeholder="Search mail" @keyup="searchReady">
      </div>

    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      searchKeyWord: "",
      searchReadyTimeout: null,
    }
  },
  methods: {
    search() {
      console.log(this.searchKeyWord);
    },
    searchReady() {
      clearTimeout(this.searchReadyTimeout);
      this.searchReadyTimeout = setTimeout(this.search, 500);
    }
  }
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
</style>