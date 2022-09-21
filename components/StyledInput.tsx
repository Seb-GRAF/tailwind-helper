import React, { useState, useEffect } from 'react'

interface Props {
  step: number
  min: number
  max: number
  value: number
  type?: string
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
  type = 'number',
  name,
  hasUnit = true,
}: Props): JSX.Element => {
  return (
    <label className='w-full'>
      <input
        className={`p-4 w-full ${
          hasUnit && 'pr-12'
        } bg-slate-100 dark:bg-slate-700 rounded-md text-indigo-700 dark:text-indigo-300 ring-1 ring-gray-600/10 dark:ring-gray-100/10`}
        name={name}
        type={type}
        step={step}
        min={min}
        max={max}
        value={value}
        onBlur={() => {
          if (!value) setValue(0)
        }}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          if (e.target.value) setValue(parseFloat(e.target.value))
          else setValue(null)
        }}
        inputMode='decimal'
      />
      <span className='sr-only'>{name}</span>
    </label>
  )
}

export default StyledInput
