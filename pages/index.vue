<template>
  <v-container>
    <v-btn depressed color="primary" @click="getMessage">
      RailsからAPIを取得する
    </v-btn>

    <v-card
      v-for="(message, i) of messages"
      :key="i"
      color="grey lighten-4"
      flat
      tile
      class="mb-3"
    >
      {{ message }}
    </v-card>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      messages: []
    }
  },
  methods: {
    async getMessage () {
      const message = await this.$axios.$get('/api/v1/hello')
      this.messages.push(message)
    }
  }
}
</script>
