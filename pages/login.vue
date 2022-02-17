<template>
  <before-login-form-card>
    <template #form-card-content>
      <ui-snackbar />
      <v-form ref="form" v-model="isValid">
        <user-form-email :email.sync="params.auth.email" />
        <user-form-password :password.sync="params.auth.password" />

        <v-card-actions>
          <nuxt-link to="#" class="text-decoration-none">
            パスワードを忘れた？
          </nuxt-link>
        </v-card-actions>

        <v-btn
          block
          color="primary"
          :disabled="!isValid || isLoading"
          :loading="isLoading"
          @click="login"
        >
          ログインする
        </v-btn>
      </v-form>
    </template>
  </before-login-form-card>
</template>

<script>
export default {
  layout: 'beforeLogin',
  data () {
    return {
      isValid: false,
      isLoading: false,
      params: {
        auth: {
          email: '',
          password: ''
        }
      }
    }
  },
  methods: {
    async login () {
      this.isLoading = true
      if (this.isValid) {
        try {
          const response = await this.$axios.$post('/api/v1/login', this.params)
          this.authSuccessful(response)
        } catch (error) {
          this.authFailure(error)
        }
      }
      this.isLoading = false
    },
    authSuccessful (response) {
      this.$auth.login(response)
      this.$router.push(this.$store.state.rememberRoute)
    },
    authFailure ({ response }) {
      if (response.status === 404) {
        this.$store.dispatch('setSnackbar', { message: 'ユーザーが見つかりません' })
      } else {
        this.$my.errorHandler({ statusCode: response.status, message: response.message })
      }
    }
  }
}
</script>
