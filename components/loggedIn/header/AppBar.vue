<template>
  <v-app-bar app absolute flat color="white">
    <slot name="nav-icon" />

    <nuxt-link to="/" class="text-decoration-none">
      <ui-app-logo />
    </nuxt-link>

    <ui-app-title />

    <v-spacer />

    <v-menu offset-y min-width="200">
      <template #activator="{ attrs, on }">
        <v-btn icon large v-bind="attrs" v-on="on">
          <v-icon>
            mdi-account-circle
          </v-icon>
        </v-btn>
      </template>

      <v-list dense>
        <v-subheader>
          ログイン中のユーザー
        </v-subheader>

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>
              {{ $auth.user.name }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-divider />

        <v-subheader>
          アカウント
        </v-subheader>

        <template v-for="(menu, i) of menus">
          <v-divider v-if="menu.divider" :key="`menu-divider-${i}`" />

          <v-list-item :key="`menu-list-${i}`" :to="{ name: menu.name }">
            <v-list-item-icon class="mr-2">
              <v-icon>
                {{ menu.icon }}
              </v-icon>
            </v-list-item-icon>

            <v-list-item-title>
              {{ $my.pageTitle(menu.name) }}
            </v-list-item-title>
          </v-list-item>
        </template>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  data () {
    return {
      menus: [
        { name: 'account-settings', icon: 'mdi-account-cog' },
        { name: 'account-password', icon: 'mdi-lock-outline' },
        { name: 'logout', icon: 'mdi-logout-variant', divider: true }
      ]
    }
  }
}
</script>
