import React from 'react'

import styled from 'styled-components'

import ButtonSuccess from 'Components/Buttons/success'
import Button from 'Components/Buttons/general'
import ButtonDanger from 'Components/Buttons/danger'

import Context from './../context'

const TextBox = styled.div`
  background-color: #FFF;
  border: 1px solid #212121;
  width: 1rem;
  height: 1rem;
`

export default props => {
  return (
    <Context.Consumer>
      {
        values => {
          const { incrementCounter, decrementCounter, removeCounter } = values
          const counters = values.counters.toArray()
          const counterList = counters.map((item, index) => {
            return (
              <li className='l-d-f l-ai-cen' key={index}>
                <TextBox className='l-pa1 l-d-f l-jc-cen l-ai-cen'>
                  {item.value}
                </TextBox>
                <div className='l-d-f l-ml1'>
                  <ButtonSuccess onClick={() => incrementCounter(index)}>+</ButtonSuccess>
                  <Button onClick={() => decrementCounter(index)}>-</Button>
                </div>
                <div className='l-d-f l-ml1'>
                  <ButtonDanger onClick={() => removeCounter(index)}>T</ButtonDanger>
                </div>
              </li>
            )
          })
          return counterList
        }
      }

    </Context.Consumer>
  )
}
