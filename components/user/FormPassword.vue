<template>
  <v-text-field
    v-model="setPassword"
    outlined
    label="パスワード"
    :rules="form.rules"
    :placeholder="form.placeholder"
    :append-icon="toggle.icon"
    :type="toggle.type"
    @click:append="toggleShowPassword"
  />
</template>

<script>
export default {
  props: {
    password: {
      type: String,
      default: ''
    },
    isSignup: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      showPassword: false
    }
  },
  computed: {
    setPassword: {
      get () {
        return this.password
      },
      set (newValue) {
        this.$emit('update:password', newValue)
      }
    },
    form () {
      const max = 72
      const format = v => (!!v && /^[\w-]{8,72}$/.test(v)) || `${max}文字以上。半角英数字・ハイフン・アンダーバーが使えます。`
      const required = v => !!v || ''

      const rules = this.isSignup ? [format] : [required]
      const placeholder = this.isSignup ? `${max}文字以上` : ''
      return { rules, placeholder }
    },
    toggle () {
      const icon = this.showPassword ? 'mdi-eye' : 'mdi-eye-off'
      const type = this.showPassword ? 'text' : 'password'
      return { icon, type }
    }
  },
  methods: {
    toggleShowPassword () {
      this.showPassword = !this.showPassword
    }
  }
}
</script>
