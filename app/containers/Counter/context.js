import React from 'react'
import {Map} from 'immutable'

const defaultValues = {
  counters: Map([]),
  createCounter: () => {},
  increateCounter: () => {},
  decrementCounter: () => {},
  removeCounter: () => {}
}

const Context = React.createContext(defaultValues)

export default Context
