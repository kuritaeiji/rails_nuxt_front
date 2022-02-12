<template>
  <div>
    <logged-in-header-nav-drawer :drawer.sync="drawer" />
    <logged-in-header-app-bar>
      <template #nav-icon>
        <v-app-bar-nav-icon @click="drawer = !drawer" />
      </template>
    </logged-in-header-app-bar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      drawer: false
    }
  }
}
</script>
