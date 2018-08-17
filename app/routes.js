import React from 'react'
import Loadable from 'react-loadable'

const Loader = () => {
  return (<p>Page is loading</p>)
}

const LoadHome = Loadable({
  loader: () => import('./Containers/Home'),
  loading: Loader
})

const LoadAbout = Loadable({
  loader: () => import('./Containers/About'),
  loading: Loader
})

const routes = [
  {
    path: '/',
    component: LoadHome,
    exact: true
  },
  {
    path: '/about',
    component: LoadAbout
  }
]

export default routes;