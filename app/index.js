/* global riot */
import { dropRight } from 'lodash'
import { applyMiddleware, createStore } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import reduxMixin from 'riot-redux-mixin'
import route from 'riot-route'
import 'rxjs'

import './components'
import { initApp, routeChanged } from './components/app/actions'
import epics from './epics'
import reducers from './reducers'
import router from './router'
import indexedDB from './utils/indexed-db'
import { lodashMixin } from './utils/riot-mixins'

indexedDB.setupDB()
  .then(state => {
    const epicMiddleware = createEpicMiddleware(epics)
    const store = createStore(
      reducers, state,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
      applyMiddleware(epicMiddleware)
    )
    riot.mixin(reduxMixin(store))
    riot.mixin(lodashMixin)

    store.dispatch(initApp())
    route((...path) => store.dispatch(routeChanged(dropRight(path))))
    router.init()

    store.subscribe(() => {
      indexedDB.saveStateToDB(state)
    })
  })
