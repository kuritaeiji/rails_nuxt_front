export default ({ $auth, route, redirect, store }) => {
  if (route.name === 'index' && !$auth.loggedIn) {
    return false
  }

  if (!$auth.loggedIn) {
    let msg
    if (!$auth.isAuthenticated() && $auth.user) {
      msg = 'もう一度ログインして下さい'
      $auth.logout()
    }

    if (!$auth.isAuthenticated() && !$auth.user) {
      msg = 'ログインして下さい'
    }

    if ($auth.isAuthenticated() && !$auth.user) {
      return $auth.unauthError()
    }

    store.dispatch('setRememberRoute', route)
    console.log(msg)
    redirect('/login')
  }
}
