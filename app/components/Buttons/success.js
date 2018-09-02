import React from 'react'
import styled from 'styled-components'

import { Button } from './general'

const ButtonSuccess = styled(Button)`
  background-color: #4CAF50;
  border-bottom: 5px solid #A5D6A7;
`

export default ({children, ...props}) => {
  const classNames = `${props.className} l-pa1`
  return (
    <ButtonSuccess {...props} className={classNames}>
      {children}
    </ButtonSuccess>
  )
}
