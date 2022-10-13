export default defineNuxtRouteMiddleware((to, from) => {
  if (to.params.id === '1') {
    console.log('to', to)
    console.log('from', from)
    return navigateTo('/')
  }
  if (to.params.id === '2') {
    return abortNavigation()
  }
})