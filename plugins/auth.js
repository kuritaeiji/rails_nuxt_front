import CryptoJS from 'crypto-js'
const storage = window.localStorage
const keys = { exp: 'exp' }

class Authentication {
  constructor ({ store, $axios, $config, error }) {
    this.store = store
    this.$axios = $axios
    this.$config = $config
    this.error = error
  }

  get loggedIn () {
    return this.isAuthenticated() && this.user
  }

  get user () {
    return this.store.getters.currentUser
  }

  login ({ meta: { exp }, user }) {
    this.setStorage(exp)
    this.store.dispatch('setCurrentUser', user)
  }

  async logout () {
    await this.$axios.$delete('/api/v1/logout')
    this.removeStorage()
    this.store.dispatch('setCurrentUser', null)
  }

  unauthError () {
    throw this.error({ message: 'unauthorized', statusCode: 401 })
  }

  // jwtが有効期限内か返す
  isAuthenticated () {
    return new Date().getTime() < this.getExpire()
  }

  // unix_timeのmsを返す
  getExpire () {
    const expire = storage.getItem(keys.exp)
    return expire ? this.decrypt(expire) : null
  }

  setStorage (exp) {
    storage.setItem(keys.exp, this.encrypt(exp))
  }

  removeStorage () {
    Object.keys(keys).forEach(key => storage.removeItem(key))
  }

  encrypt (exp) {
    const expire = String(exp * 1000)
    return CryptoJS.AES.encrypt(expire, this.$config.cryptoKey).toString()
  }

  decrypt (exp) {
    return CryptoJS.AES.decrypt(exp, this.$config.cryptoKey).toString(CryptoJS.enc.Utf8)
  }
}

export default ({ store, $axios, $config, error }, inject) => {
  inject('auth', new Authentication({ store, $axios, $config, error }))
}
