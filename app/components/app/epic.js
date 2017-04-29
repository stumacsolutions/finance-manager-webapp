import { combineEpics } from 'redux-observable'
import { Observable } from 'rxjs/Observable'

const initApp = (actions$) =>
  actions$.ofType('INIT_APP')
    .switchMap(() => Observable.empty())

export default combineEpics(
  initApp
)
