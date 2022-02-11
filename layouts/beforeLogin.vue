<template>
  <v-app>
    <before-login-app-bar />
    <v-main :style="{ backgroundColor: '#F5F5F5' }">
      <nuxt />
    </v-main>
    <before-login-footer />
  </v-app>
</template>

<script>
export default {

}
</script>
