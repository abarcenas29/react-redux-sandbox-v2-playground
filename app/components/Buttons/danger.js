import React from 'react'
import styled from 'styled-components'

import { Button } from './general'

const ButtonDanger = styled(Button)`
  background-color: #f44336;
  border-bottom: 5px solid #ef9a9a;
`

export default ({children, ...props}) => {
  const classNames = `${props.className} l-pa1`
  return (
    <ButtonDanger {...props} className={classNames}>
      {children}
    </ButtonDanger>
  )
}
