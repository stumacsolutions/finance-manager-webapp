import { combineReducers } from 'redux'

import appReducer from './components/app/reducer'

export default combineReducers({
  app: appReducer
})
