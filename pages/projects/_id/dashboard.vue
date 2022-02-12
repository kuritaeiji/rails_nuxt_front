<template>
  <logged-in-container>
    <template #my-content>
      {{ currentProject }}
    </template>
  </logged-in-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters(['currentProject'])
}
</script>
