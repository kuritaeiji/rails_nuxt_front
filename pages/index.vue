<template>
  <div fluid>
    <v-img
      :src="backgroundImg"
      alt="背景画像"
      :aspect-ratio="16/9"
      gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
    >
      <v-container fill-height>
        <v-row justify="center" align="center">
          <v-col cols="12" sm="10" md="8" class="white--text">
            <v-card-title class="font-weight-bold text-h4 justify-center">
              最近のプロジェクト
            </v-card-title>

            <v-row>
              <v-col :cols="projectCard.cols" :sm="projectCard.sm" :md="projectCard.md">
                <v-btn block depressed :color="projectCard.color" :height="projectCard.height">
                  <v-icon size="24" color="primary" class="my-2">
                    mdi-plus
                  </v-icon>
                  <div class="text-subtitle font-weight-bold primary--text">
                    プロジェクトを追加
                  </div>
                </v-btn>
              </v-col>

              <v-col
                v-for="project of recentProjects"
                :key="`project-${project.id}`"
                :cols="projectCard.cols"
                :sm="projectCard.sm"
                :md="projectCard.md"
              >
                <v-card flat color="projectCard.color" :height="projectCard.height" :to="$my.projectLinkTo(project.id)">
                  <v-card-title>
                    {{ project.name }}
                  </v-card-title>

                  <v-card-text class="text-right text-caption grey--text">
                    <v-icon color="grey" small>
                      mdi-update
                    </v-icon>
                    {{ $my.formatDate(project.updatedAt) }}
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-img>

    <v-container>
      <v-row justify="center">
        <v-col cols="12" sm="10" md="8">
          <v-card-title class="font-weight-bold justify-center">
            全てのプロジェクト
          </v-card-title>
          <v-divider />
          <v-data-table
            :headers="table.headers"
            :items="table.items"
            hide-default-footer
          >
            <template #[`item.name`]="{ item }">
              <nuxt-link :to="$my.projectLinkTo(item.id)" class="text-decoration-none">
                {{ item.name }}
              </nuxt-link>
            </template>

            <template #[`item.updatedAt`]="{ item }">
              {{ $my.formatDate(item.updatedAt) }}
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import backgroundImg from '@/assets/images/background.png'

export default {
  layout ({ $auth }) {
    return $auth.loggedIn ? 'loggedIn' : 'welcome'
  },
  data () {
    return {
      backgroundImg,
      projectCard: {
        cols: 12,
        sm: 6,
        md: 4,
        height: 120,
        color: 'white'
      }
    }
  },
  computed: {
    ...mapGetters(['recentProjects']),
    table () {
      return {
        headers: [
          { text: '名前', value: 'name' },
          { text: '更新日', value: 'updatedAt', width: 150 }
        ],
        items: this.recentProjects.map(p => ({ name: p.name, updatedAt: p.updatedAt, id: p.id }))
      }
    }
  }
}
</script>
