<template>
  <v-app-bar app absolute flat color="white">
    <nuxt-link to="/" class="text-decoration-none">
      <ui-app-logo />
    </nuxt-link>
    <ui-app-title class="d-none d-sm-block" />

    <v-spacer />

    <before-login-signup-link />
    <before-login-link />
  </v-app-bar>
</template>
