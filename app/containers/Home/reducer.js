import { fromJS } from 'immutable'

import { DEFAULT_ACTION } from './constants'

const initialState = fromJS({})

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case DEFAULT_ACTION:
      return state.set(payload)
    default:
      return state
  }
}
