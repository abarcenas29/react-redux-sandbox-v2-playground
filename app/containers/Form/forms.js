import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'

import Form from 'Components/Forms'
import ButtonSuccess from 'Components/Buttons/success'

import { validate } from './validations'

const Container = ({children}) => {
  return (
    <div className='l-d-f l-jc-cen'>
      {children}
    </div>
  )
}

class FormDemo extends Component {
  render () {
    const { handleSubmit } = this.props
    return (
      <form className='l-d-f l-fd-col l-jc-cen' onSubmit={handleSubmit}>
        <Container>
          <Field name='firstName' component={Form.Input} type='text' />
        </Container>
        <Container>
          <Field name='lastName' component={Form.Input} type='text' />
        </Container>
        <Container>
          <ButtonSuccess type='submit'>
            Submit
          </ButtonSuccess>
        </Container>
      </form>
    )
  }
}

const RegisterForm = reduxForm({
  form: 'register',
  validate
})(FormDemo)

export default RegisterForm
