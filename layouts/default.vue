<template>
  <v-app>
    <logged-in-header />
    <v-main class="main-background">
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  middleware: 'authenticator'
}
</script>
