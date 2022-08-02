import React from 'react'

interface Props {
  bounds: string
}

const OutOfBounds = ({ bounds }: Props): JSX.Element => {
  if (bounds === 'min')
    return <span className='text-xs opacity-30'>This is the lowest value</span>

  if (bounds === 'max')
    return <span className='text-xs opacity-30'>This is the highest value</span>

  if (bounds === 'def')
    return <span className='text-xs opacity-30'>This is the default value</span>

  return <></>
}

export default OutOfBounds
