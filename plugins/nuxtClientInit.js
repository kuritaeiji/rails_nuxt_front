export default async ({ $auth, $axios, store }) => {
  if ($auth.isAuthenticated()) {
    try {
      const user = await $axios.$get('/api/v1/users/current_user')
      store.dispatch('setCurrentUser', user)
    } catch (error) {
      $auth.removeStorage()
    }
  }
}
