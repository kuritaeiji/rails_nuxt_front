<template>
  <v-app>
    <welcome-app-bar :menus="menus" :img-height="imgHeight" />

    <v-img
      src="https://picsum.photos/id/20/1920/1080?blur=5"
      gradient="to top right, rgba(19,84,122,.6), rgba(128,208,199,.9)"
      :height="imgHeight"
      class="white--text"
    >
      <v-row
        align="center"
        justify="center"
        :style="{ height: `${imgHeight}px` }"
      >
        <v-col
          cols="12"
          class="text-center"
        >
          <h1 class="text-h3 font-weight-bold mb-4">
            未来を作ろう。ワクワクしよう。
          </h1>
          <h4
            class="text-subtitle"
            :style="{ letterSpacing: '5px' }"
          >
            中小企業に特化した事業計画策定ツール
          </h4>
        </v-col>
      </v-row>
    </v-img>
    <v-sheet>
      <v-container fluid :style="{ maxWidth: '1280px' }">
        <v-row v-for="(menu, i) of menus" :id="menu.title" :key="`menu-${i}`" class="mb-3">
          <v-col cols="12">
            <v-card flat>
              <v-card-title class="justify-center text-h3 font-weight-bold">
                {{ $t(`menus.${menu.title}`) }}
              </v-card-title>
              <v-card-text class="text-center">
                {{ menu.subtitle }}
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-sheet>
    <before-login-footer />
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      imgHeight: 500,
      menus: [
        { title: 'about', subtitle: 'このサイトはブログ"独学プログラマ"で公開されているチュートリアルのデモアプリケーションです' },
        { title: 'products', subtitle: '他にはない優れた機能の数々' },
        { title: 'price', subtitle: '会社の成長に合わせた3つのプラン' },
        { title: 'contact', subtitle: 'お気軽にご連絡を' },
        { title: 'company', subtitle: '私たちの会社' }
      ]
    }
  }
}
</script>
