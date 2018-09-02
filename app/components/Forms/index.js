import React, { Component, Fragment } from 'react'
import styles from 'styled-components'

const Input = styles.input`
  background-color: #FFF;
`

export default class Form extends Component {
  static Input = ({className, input, meta,  ...props}) => {
    const classNames = `${className} l-pa1`
    console.log(meta, 'meta')
    return (
      <div className='l-d-b'>
        <Input className={classNames} {...input} />
        {
          meta.error && 
          meta.touched &&
          <div>
            {meta.error}
          </div>
        }
      </div>
    )
  }

  render () {
    return (
      <Fragment />
    )
  }
}