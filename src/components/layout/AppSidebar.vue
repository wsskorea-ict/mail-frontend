<template>
  <aside class="d-flex flex-column justify-content-between p-5 border-end">
    <!-- sidebar top area -->
    <div>
      <!-- mail navigation -->
      <ul class="ps-0">
        <li>
          <router-link :to="{name: 'index'}">Inbox</router-link>
        </li>
        <li>
          <router-link :to="{name: 'starred'}">Starred</router-link>
        </li>
        <li>
          <router-link :to="{name: 'sent'}">Sent</router-link>
        </li>
      </ul>
    </div>

    <!-- sidebar bottom area -->
    <div>

    </div>
  </aside>
</template>

<script>
export default {
  name: 'AppSidebar',

}
</script>

<style scoped>
aside {
  width: var(--app-sidebar-width);
  height: calc(100vh - var(--app-header-height));
}
</style>