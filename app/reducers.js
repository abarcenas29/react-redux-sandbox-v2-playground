import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import AppReducer from 'Containers/Home/reducer'

// list of individual reducers
export default combineReducers({
  App: AppReducer,
  form: formReducer
})
