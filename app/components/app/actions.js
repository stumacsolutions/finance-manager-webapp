class AppActions {
  initApp () { return { type: 'INIT_APP' } }
  routeChanged (value) { return { type: 'ROUTE_CHANGED', value } }
}
export default new AppActions()
