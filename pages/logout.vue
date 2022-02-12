<template>
  <div />
</template>

<script>
export default {
  layout: 'logout',
  async middleware ({ store, redirect, from }) {
    await store.dispatch('logout')
    if (from.name !== 'index') { return redirect('/') }
  },
  // routeがindexからログアウトする場合はbeforeCreatedを使う
  beforeCreate () {
    this.$router.replace('/')
  }
}
</script>
