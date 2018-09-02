import { DEFAULT_ACTION } from './constants'

export const defualtAction = payload => {
  return {
    type: DEFAULT_ACTION,
    payload
  }
}
