export default ({ $axios, isDev }) => {
  $axios.onRequest((config) => {
    if (isDev) {
      console.log(config)
    }
  })

  $axios.onResponse((config) => {
    if (isDev) {
      console.log(config)
    }
  })

  $axios.onError((error) => {
    console.log(error.response)
  })
}
