<template>
  <v-text-field
    v-model="setName"
    outlined
    label="ユーザー名"
    placeholder="田中太郎"
    :counter="max"
  />
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  data () {
    const max = 30
    return {
      max,
      rules: [
        v => !!v || '',
        v => (!!v && v.length >= max) || `${max}文字以内で入力して下さい`
      ]
    }
  },
  computed: {
    setName: {
      get () {
        return this.name
      },
      set (newValue) {
        this.$emit('update:name', newValue)
      }
    }
  }
}
</script>
