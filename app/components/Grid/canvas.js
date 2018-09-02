import React from 'react'

export default props => {
  return (
    <div className='l-w-100 l-d-f l-jc-cen'>
      <div className='l-w-3col--3col l-w-2col--2col'>
        {props.children}
      </div>
    </div>
  )
}
