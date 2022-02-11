<template>
  <v-text-field
    v-model="setEmail"
    outlined
    type="email"
    label="メールアドレス"
    :rules="rules"
    :placeholder="form.placeholder"
    :hide-details="form.hideDetails"
    :class="form.klass"
  />
</template>

<script>
export default {
  props: {
    email: {
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
      rules: [
        v => !!v || '',
        v => /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/.test(v) || ''
      ]
    }
  },
  computed: {
    setEmail: {
      get () {
        return this.email
      },
      set (newValue) {
        this.$emit('update:email', newValue)
      }
    },
    form () {
      const placeholder = this.isSignup ? 'your@email.com' : ''
      const hideDetails = !this.isSignup
      const klass = this.isSignup ? '' : 'mb-5'
      return { placeholder, hideDetails, klass }
    }
  }
}
</script>
