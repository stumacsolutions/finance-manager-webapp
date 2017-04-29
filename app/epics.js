import { combineEpics } from 'redux-observable'

import appEpic from './components/app/epic'

export default combineEpics(
  appEpic
)
