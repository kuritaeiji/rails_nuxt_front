<template>
  <nuxt-child />
</template>

<script>
export default {
  async middleware ({ params, store, route, redirect }) {
    await store.dispatch('setCurrentProject', params)
    if (route.name === 'projects') {
      redirect('/')
    }
  }
}
</script>
