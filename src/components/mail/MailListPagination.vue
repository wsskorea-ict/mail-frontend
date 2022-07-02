<template>
  <nav>
    <ul class="pagination justify-content-center">
      <li>
        <router-link :to="{name: 'index', params: {type: mailSetting.type, page: prevPage}}">
          <font-awesome-icon icon="fa-solid fa-angle-left"/>
        </router-link>
      </li>
      <li>
        <router-link :to="{name: 'index', params: {type: mailSetting.type, page: 1}}">
          1
        </router-link>
      </li>
      <li>
        <router-link :to="{name: 'index', params: {type: mailSetting.type, page: nextPage}}">
          <font-awesome-icon icon="fa-solid fa-angle-right"/>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "MailListPagination",
  computed: {
    ...mapState(['mailSetting']),
    prevPage() {
      return +this.mailSetting.page === 1 ? 1 : this.mailSetting.page - 1;
    },
    nextPage() {
      return this.mailSetting.page + 1;
    }
  },
  created() {
  }
}
</script>

<style scoped>
.pagination a {
  padding: .4em;
}
</style>