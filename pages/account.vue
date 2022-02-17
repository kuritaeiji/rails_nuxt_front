<template>
  <v-container>
    <nuxt-child />
  </v-container>
</template>

<script>
export default {
  layout: 'loggedIn',
  middleware ({ redirect, route }) {
    if (route.name === 'account') {
      redirect('/')
    }
  }
}
</script>
