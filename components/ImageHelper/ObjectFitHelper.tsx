import React, { useState, useEffect } from 'react'
import { CopyToClipboard, OutOfBounds } from '..'
import { WidgetWrapper, WidgetConverter, WidgetResult } from '..'
import { objectFits } from '../../utils/tailwindClasses'

interface Props {
  setObjectFit: (value: string) => void
}

const ObjectFitHelper = ({ setObjectFit }: Props): JSX.Element => {
  const [value, setValue] = useState(1)
  const [objectFit, setCurrentObjectFit] = useState(objectFits[1])

  const reset = () => {
    if (value === 1) return

    setValue(1)
    setCurrentObjectFit(objectFits[1])
  }

  useEffect(() => {
    setCurrentObjectFit(objectFits[value])
  }, [value])

  useEffect(() => {
    setObjectFit(objectFit!.class)
  }, [objectFit, setObjectFit])

  return (
    <WidgetWrapper>
      <button
        className='absolute text-sm transition-all top-2 right-3 text-slate-400 dark:hover:text-indigo-300 hover:text-indigo-700'
        onClick={reset}>
        Reset
      </button>
      <WidgetConverter helperName='Object fit'>
        <div className='relative'>
          {/* CHEVRON DOWN ICON OVERRIDE */}
          <div className='absolute z-20 text-xl -translate-y-1/2 pointer-events-none right-3 top-1/2'>
            <svg
              className='w-4 h-4'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M19 9l-7 7-7-7'></path>
            </svg>
          </div>

          {/* OBJECT FIT SELECT */}
          <select
            name='object fit'
            className='relative p-4 text-indigo-700 bg-gray-100 rounded-md appearance-none cursor-pointer w-44 dark:bg-slate-700 dark:text-indigo-300 ring-1 ring-gray-600/10 dark:ring-gray-100/10'
            value={value}
            onChange={(e) => {
              setValue(parseInt(e.target.value))
            }}>
            {objectFits.map((positioning, index) => (
              <option key={index} value={index}>
                {positioning.displayName}
              </option>
            ))}
          </select>
        </div>
      </WidgetConverter>
      <WidgetResult>
        <CopyToClipboard valueToCopy={objectFit.class.toString()}>
          <span className='font-semibold'>{`${objectFit.class}`}</span>
        </CopyToClipboard>
      </WidgetResult>
    </WidgetWrapper>
  )
}

export default ObjectFitHelper
