<template>
  <before-login-form-card>
    <template #form-card-content>
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
    login () {
      if (this.isValid) {
        this.isLoading = true
        setTimeout(() => {
          this.$store.dispatch('login')
          this.$router.replace('/')
          this.isLoading = false
        }, 1500)
      }
    }
  }
}
</script>
