/* global riot */
import route from 'riot-route'
import Router, { Route, DefaultRoute, NotFoundRoute } from 'riot-router'

class AppRouter {
  init () {
    const router = Router.create({ route })
    router.routes([
      new DefaultRoute({tag: 'home-page'}),
      new Route({path: 'about', tag: 'about-page'}),
      new NotFoundRoute({tag: 'not-found-page'})
    ])
    riot.mount('*')
    router.start(true)
  }
}
export default new AppRouter()
