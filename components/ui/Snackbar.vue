<template>
  <v-snackbar
    v-model="setSnackbar"
    top
    text
    :timeout="snackbar.timeout"
    :color="snackbar.color"
  >
    {{ snackbar.message }}
    <template #action="{ attrs }">
      <v-btn v-bind="attrs" @click="resetSnackbar">
        Close
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['snackbar']),
    setSnackbar: {
      get () {
        return !!this.snackbar.message
      },
      set (newValue) {
        this.resetSnackbar()
      }
    }
  },
  beforeDestroy () {
    this.resetSnackbar()
  },
  methods: {
    resetSnackbar () {
      this.$store.dispatch('setSnackbar', { message: '' })
    }
  }
}
</script>
