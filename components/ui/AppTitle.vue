<template>
  <v-app-bar-title>
    {{ appName }}
  </v-app-bar-title>
</template>

<script>
export default {
  data ({ $config: { appName } }) {
    return {
      appName
    }
  }
}
</script>
