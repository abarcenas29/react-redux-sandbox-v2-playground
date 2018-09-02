import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'

// type of api callers (i.e: thunk / saga )

// list of reducers combined
import reducers from './reducers'

const ENV = process.env.NODE_ENV

const middleWare = []

if (ENV === 'development') {
  console.log('Logger is Enabled')
  middleWare.push(logger)
}

const reduxMiddleware = applyMiddleware(...middleWare)

export default createStore(reducers, reduxMiddleware)
