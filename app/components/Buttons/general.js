import React from 'react'
import styled from 'styled-components'

export const Button = styled.button`
  border: none;
  border-bottom: 5px solid #BDBDBD;

  background-color: #212121;
  color: #FFF;

  min-width: 3rem;
  min-height: 2rem;

  &:active {
    position: relative;
    top: 0.1rem;
  }
`

export default ({children, ...props}) => {
  const classNames = `${props.classNames} l-pa1`
  return (
    <Button {...props} className={classNames}>
      {children}
    </Button>
  )
}
