import React from 'react'
import Context from './../context'

import Button from 'Components/Buttons/general'
import { create } from 'domain';

export default () => {
  return (
    <Context.Consumer>
      {
        ({createCounter}) => {
          return (
            <div className='l-d-f l-jc-cen'>
              <Button className='l-ml1 l-mr1' onClick={createCounter}>Create Counter</Button>
            </div>
          )
        }
      }
    </Context.Consumer>
  )
}
