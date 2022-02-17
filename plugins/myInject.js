class MyInject {
  constructor ({ app, error }) {
    this.app = app
    this.error = error
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

  errorHandler ({ statusCode, message }) {
    this.error({ statusCode, message })
  }
}

export default ({ app, error }, inject) => {
  inject('my', new MyInject({ app, error }))
}
