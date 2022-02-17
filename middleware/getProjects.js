export default async ({ $axios, store, $auth }) => {
  if ($auth.loggedIn && !store.getters.recentProjects.length) {
    const response = await $axios.$get('/api/v1/projects')
    store.dispatch('setProjects', response.projects)
  }
}
