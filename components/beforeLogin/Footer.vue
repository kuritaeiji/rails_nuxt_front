<template>
  <div>
    <v-footer
      app
      absolute
      dark
      color="black"
      class="justify-center"
    >
      &copy;{{ copyRightYear }}
      <strong class="ml-1">{{ appName }}</strong>
    </v-footer>
  </div>
</template>

<script>
export default {
  data ({ $config: { appName } }) {
    return {
      appName
    }
  },
  computed: {
    copyRightYear () {
      const begginingYear = 2020
      const thisYear = new Date().getFullYear()
      if (thisYear > begginingYear) { return `${begginingYear} - ${thisYear}` }
      return begginingYear
    }
  }
}
</script>
