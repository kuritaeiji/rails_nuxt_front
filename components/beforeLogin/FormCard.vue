<template>
  <v-container fluid>
    <v-row justify="center" align="center">
      <v-col cols="12" class="mt-3">
        <h1 class="text-h5 font-weight-bold text-center">
          {{ appName }}に{{ pageTitle }}
        </h1>
      </v-col>

      <v-card
        flat
        width="80%"
        max-width="400"
        color="transparent"
      >
        <slot name="form-card-content" />
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data ({ $config: { appName }, $route }) {
    return {
      appName,
      pageTitle: this.$t(`pages.${$route.name}`)
    }
  }
}
</script>
