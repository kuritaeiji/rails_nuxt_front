<template>
  <v-container>
    <h2>
      Usersテーブルの取得
    </h2>

    <v-list>
      <v-list-item v-for="user of users" :key="`user-${user.id}`">
        <v-list-item-content>
          {{ user.id }} {{ user.name }} {{ user.email }} {{ dateFormat(user.created_at) }}
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-container>
</template>

<script>
export default {
  async asyncData ({ $axios }) {
    const users = await $axios.$get('/api/v1/users')
    return { users }
  },
  computed: {
    dateFormat () {
      return (date) => {
        const dateTimeFormat = new Intl.DateTimeFormat(
          'ja', { dateStyle: 'medium', timeStyle: 'short' }
        )
        return dateTimeFormat.format(new Date(date))
      }
    }
  }
}
</script>
