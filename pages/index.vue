<template>
  <v-container fluid>
    <v-card
      flat
      tile
      color="transparent"
    >
      <v-card-title>
        Usersテーブルの取得
      </v-card-title>

      <v-card-text>
        <v-data-table
          :headers="headers"
          :items="users"
          :items-per-page="-1"
        />
      </v-card-text>

      <v-card-title>
        Vuetifyの導入
      </v-card-title>

      <v-card-text>
        <v-btn
          v-for="(color, i) of colors"
          :key="`color-${i}`"
          :color="color"
          class="mr-2"
        >
          {{ color }}
        </v-btn>
      </v-card-text>

      <v-card-title>
        displayの確認
      </v-card-title>

      <v-card-text>
        <v-card
          v-for="(display, i) of displays"
          :key="`display-${i}`"
          :color="display.color"
          :class="display.name"
        >
          {{ display.description }}
        </v-card>
      </v-card-text>

      <v-card-title>
        VueI18nの検証
      </v-card-title>

      <v-card-text v-for="(title, i) of ['signup', 'login']" :key="`title-${i}`">
        {{ $t(`title.${title}`) }}
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  async asyncData ({ $axios }) {
    const users = await $axios.$get('/api/v1/users')
    const userAttrs = Object.keys(users[0] || {})
    const headers = userAttrs.map(attr => ({ text: attr, value: attr }))
    return { users, userAttrs, headers }
  },
  data () {
    return {
      colors: ['primary', 'info', 'success', 'warning', 'error', 'background'],
      displays: [
        { name: 'd-none d-md-block', description: 'pc以上で表示', color: 'error' },
        { name: 'd-block d-md-none', description: 'タブレット以下で表示', color: 'info' },
        { name: 'd-none d-sm-block', description: 'タブレット以上で表示', color: 'success' },
        { name: 'd-none', description: '全て隠す', color: 'warning' }
      ]
    }
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
