<template>
  <before-login-form-card>
    <template #form-card-content>
      <v-form ref="form" v-model="isValid">
        <user-form-name :name.sync="params.user.name" />
        <user-form-email :email.sync="params.user.email" :is-signup="true" />
        <user-form-password :password.sync="params.user.password" />

        <v-btn
          block
          color="primary"
          class="white--text"
          :disabled="!isValid || loading"
          :loading="isLoading"
          @click="signup"
        >
          登録する
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
        user: {
          name: '',
          email: '',
          password: ''
        }
      }
    }
  },
  methods: {
    signup () {
      if (this.isValid) {
        this.isLoading = true
        setTimeout(() => {
          this.isLoading = false
          this.formReset()
        }, 1500)
      }
    },
    formReset () {
      this.$refs.form.resetValidation()
      this.params = { user: { name: '', email: '', password: '' } }
    }
  }
}
</script>
