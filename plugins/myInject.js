class MyInject {
  constructor (app) {
    this.app = app
  }

  pageTitle (routeName) {
    const jsonPath = 'pages.' + routeName.replace(/-/g, '.')
    const title = this.app.i18n.t(jsonPath)
    return (typeof title === 'object') ? title.index : title
  }

  formatDate (date) {
    return this.app.$moment(new Date(date)).format('YYYY/MM/DD HH:mm')
  }

  projectLinkTo (id, name = 'projects-id-dashboard') {
    return { name, params: { id } }
  }
}

export default ({ app }, inject) => {
  inject('my', new MyInject(app))
}
