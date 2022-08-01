import React from 'react'

interface Props {
  fontSize: string
}

const FontSizeExample = ({ fontSize }: Props): JSX.Element => {
  return (
    <div className={`${fontSize} whitespace-nowrap overflow-x-auto p-4`}>
      This is the font size
    </div>
  )
}

export default FontSizeExample
