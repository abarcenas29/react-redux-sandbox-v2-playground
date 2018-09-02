import './styles/global.scss'

import React from 'React'
import ReactDOM from 'react-dom'

import { Provider } from 'react-redux'
import store from './store'

import routes from './routes'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          {routes.map((route, i) => <Route key={i} {...route} />)}
        </Switch>
      </Router>
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
