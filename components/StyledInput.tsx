import React from 'react'

interface Props {
  step: number
  min: number
  max: number
  value: number
  type: string
  name: string
  hasUnit: boolean
  setValue: (value: number) => void
}

const StyledInput = ({
  step,
  min,
  max,
  value,
  setValue,
  type,
  name,
  hasUnit = true,
}: Props): JSX.Element => {
  return (
    <input
      className={`p-4 w-44 ${
        hasUnit && 'pr-12'
      } bg-stone-100 dark:bg-slate-700 rounded-md text-indigo-700 dark:text-indigo-300 ring-1 ring-stone-600/10 dark:ring-stone-100/10`}
      name={name}
      type={type}
      step={step}
      min={min}
      max={max}
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
        setValue(parseFloat(e.target.value))
      }
    />
  )
}

export default StyledInput
