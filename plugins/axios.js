export default ({ $axios }) => {
  $axios.onRequest((config) => {
    console.log(config)
  })

  $axios.onResponse((config) => {
    console.log(config)
  })

  $axios.onError((error) => {
    debugger
    console.log(error.response)
  })
}
