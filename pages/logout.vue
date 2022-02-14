<template>
  <div />
</template>

<script>
export default {
  layout: 'logout',
  // routeがindexからログアウトする場合はbeforeCreatedを使う
  async beforeCreate () {
    await this.$auth.logout()
    this.$router.replace('/')
  }
}
</script>
