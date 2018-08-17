import './styles/global.scss';

import React from 'React';
import ReactDOM from 'react-dom'

import routes from './routes'
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Switch>
        {routes.map((route, i) => <Route key={i} {...route} />)}
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
