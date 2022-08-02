import React from 'react'

interface Props {
  step: number
  min: number
  max: number
  value: number
  setValue: (value: number) => void
}

const StyledRange = ({
  step,
  min,
  max,
  value,
  setValue,
}: Props): JSX.Element => {
  return (
    <input
      type='range'
      step={step}
      min={min}
      max={max}
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setValue(parseFloat(e.target.value))
      }
      className='absolute left-0 w-full -bottom-4'
    />
  )
}

export default StyledRange
