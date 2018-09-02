import React, { PureComponent } from 'react'

import Canvas from 'Components/Grid/canvas'
import Form from './forms'

export default class ReduxForm extends PureComponent {
  onSubmit = () => {
    window.alert('testing')
  }

  setInitialValues = () => {
    return {
      firstName: 'jay',
      lastName: 'Agonoy'
    }
  }

  render () {
    return (
      <Canvas>
        <h1 className='f-center'>Redux Form Example</h1>
        <Form onSubmit={this.onSubmit} initialValues={this.setInitialValues()}  />
      </Canvas>
    )
  }
}
