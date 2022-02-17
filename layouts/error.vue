<template>
  <v-container fluid fill-height class="main-background">
    <v-row justify="center" align="center">
      <v-col>
        <v-card-title class="justify-center">
          {{ status }}
        </v-card-title>

        <v-card-text class="text-center">
          {{ message }}
        </v-card-text>

        <v-card-actions class="justify-center flex-column">
          <v-icon>
            mdi-emoticon-sick-outline
          </v-icon>

          <v-btn
            icon
            x-large
            color="primary"
            to="/"
          >
            <v-icon>
              mdi-home
            </v-icon>
          </v-btn>
        </v-card-actions>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  layout: 'none',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    status () {
      return this.error.statusCode
    },
    message () {
      const message = this.error.message
      const path = `error.${message}`
      return this.$te(path) ? this.$t(path) : message
    }
  }
}
</script>
