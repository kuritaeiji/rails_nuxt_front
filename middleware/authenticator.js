export default ({ $auth, route, redirect, store }) => {
  if (route.name === 'index' && !$auth.loggedIn) {
    return false
  }

  if (!$auth.loggedIn) {
    let message
    if (!$auth.isAuthenticated() && $auth.user) {
      message = 'もう一度ログインして下さい'
      $auth.logout()
    }

    if (!$auth.isAuthenticated() && !$auth.user) {
      message = 'ログインして下さい'
    }

    if ($auth.isAuthenticated() && !$auth.user) {
      return $auth.unauthError()
    }

    store.dispatch('setRememberRoute', route)
    store.dispatch('setSnackbar', { message })
    redirect('/login')
  }
}
