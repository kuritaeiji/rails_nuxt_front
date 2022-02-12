<template>
  <v-app-bar app flat clipped-left :color="appBarColor">
    <ui-app-logo />
    <ui-app-title />

    <v-spacer />

    <v-toolbar-items class="d-none d-md-block">
      <v-btn
        v-for="(menu, i) of menus"
        :key="`menu-btn-${i}`"
        text
        class="font-weight-bold"
        :to="`#${menu.title}`"
      >
        {{ $t(`menus.${menu.title}`) }}
      </v-btn>
    </v-toolbar-items>

    <before-login-signup-link />
    <before-login-link />

    <v-menu offset-y>
      <template #activator="{ attrs, on }">
        <v-btn icon>
          <v-icon color="grey darken-2" size="28" v-bind="attrs" v-on="on">
            mdi-menu
          </v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(menu, i) of menus"
          :key="`menu-list-${i}`"
          :to="`#${menu.title}`"
        >
          <v-list-item-title>
            {{ $t(`menus.${menu.title}`) }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  props: {
    menus: {
      type: Array,
      default: () => []
    },
    imgHeight: {
      type: Number,
      default: 0
    }
  },
  data ({ $store }) {
    return {
      scrollY: 0,
      appBarHeight: $store.state.styles.beforeLogin.appBarHeight
    }
  },
  computed: {
    appBarColor () {
      return this.scrollY > (this.imgHight - this.appBarHeight) ? '' : 'transparent'
    }
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll () {
      this.scrollY = window.scrollY
    }
  }
}
</script>
