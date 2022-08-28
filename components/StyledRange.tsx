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
    <label className='w-full'>
      <input
        type='range'
        step={step}
        min={min}
        max={max}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(parseFloat(e.target.value))
        }
        className={`w-full -mt-1`}
      />
      <span className='sr-only'>Select helper value</span>
    </label>
  )
}

export default StyledRange
