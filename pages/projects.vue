<template>
  <nuxt-child />
</template>

<script>
export default {
  async middleware ({ params, store }) {
    await store.dispatch('setCurrentProject', params)
  },
  validate ({ store }) {
    return !!store.getters.currentProject
  }
}
</script>
