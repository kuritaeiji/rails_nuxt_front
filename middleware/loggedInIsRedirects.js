export default ({ redirect, $auth, route }) => {
  const loggedInUserNotAccess = ['signup', 'login']
  if ($auth.loggedIn && loggedInUserNotAccess.includes(route.name)) {
    redirect('/')
  }
}
