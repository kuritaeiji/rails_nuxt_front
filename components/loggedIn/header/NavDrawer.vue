<template>
  <v-navigation-drawer v-model="setDrawer" app clipped>
    <v-list>
      <v-divider />

      <v-list-item
        v-for="(menu, i) of navMenus"
        :key="`nav-menu-${i}`"
        :to="$my.projectLinkTo($route.params.id, menu.name)"
      >
        <v-list-item-icon>
          <v-icon>{{ menu.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>
            {{ $t($my.pageTitle(menu.name)) }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    drawer: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      navMenus: [
        { name: 'projects-id-dashboard', icon: 'mdi-view-dashboard' },
        { name: 'projects-id-layouts', icon: 'mdi-view-compact' },
        { name: 'projects-id-pages', icon: 'mdi-image' },
        { name: 'projects-id-components', icon: 'mdi-view-comfy' },
        { name: 'projects-id-settings', icon: 'mdi-cog' },
        { name: 'projects-id-help', icon: 'mdi-help-circle' }
      ]
    }
  },
  computed: {
    setDrawer: {
      get () { return this.drawer },
      set (newValue) {
        this.$emit('update:drawer', newValue)
      }
    }
  }
}
</script>
