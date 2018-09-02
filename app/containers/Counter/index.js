import React, { PureComponent } from 'react'
import { List, Set } from 'immutable'

import Canvas from 'Components/Grid/canvas'

import Introduction from './sections/introduction'
import CounterList from './sections/list'
import Footer from './sections/footer'

import Context from './context'

export default class Counter extends PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      counters: List([]),
      createCounter: this.createCounter,
      incrementCounter: this.incrementCounter,
      decrementCounter: this.decrementCounter,
      removeCounter: this.removeCounter
    }
  }

  createCounter = () => {
    let counters = this.state.counters.toArray()
    const counter = {
      value: 0
    }

    counters.push(counter)
    this.setState({
      counters: Set(counters)
    })
  }

  incrementCounter = key => {
    let counters = this.state.counters.toArray()
    counters[key].value+=1

    this.setState({
      counters: Set(counters)
    })
  }

  decrementCounter = key => {
    let counters = this.state.counters.toArray()
    counters[key].value-=1

    this.setState({
      counters: Set(counters)
    })
  }

  removeCounter = key => {
    let counters = this.state.counters.toArray()
    counters = counters.filter((v,i) => i !== key)
    this.setState({
      counters: Set(counters)
    })
  }

  render () {
    return (
      <Context.Provider value={this.state}>
        <Canvas>
          <Introduction />
          <div className='l-d-f l-jc-cen'>
            <ul className='l-d-f l-fd-col l-jc-cen l-pa0 l-lst-n'>
              <CounterList />
            </ul>
          </div>
          <Footer />
        </Canvas>
      </Context.Provider>
    )
  }
}
