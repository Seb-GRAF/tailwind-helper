import React, { useState, useEffect } from 'react'
import { CopyToClipboard, StyledRange, StyledInput } from '..'
import { WidgetWrapper, WidgetConverter, WidgetResult } from '..'
import { positionings } from '../../utils/tailwindClasses'
import { getClosestItem } from '../../utils/getClosestItem'

interface Props {
  setPositioning: (value: string) => void
}

const PositioningHelper = ({ setPositioning }: Props): JSX.Element => {
  const [value, setValue] = useState(0)
  const [currentPositioning, setCurrentPositioning] = useState(positionings[0])

  const reset = () => {
    if (value === 0) return
    // const positioning = document.querySelector(
    //   '.positioning'
    // ) as HTMLSelectElement

    // positioning.selectedIndex = 0
    setValue(0)
    setCurrentPositioning({ class: 'relative' })
  }

  useEffect(() => {
    setCurrentPositioning(positionings[value])
  }, [value])

  useEffect(() => {
    setPositioning(currentPositioning!.class)
  }, [currentPositioning, setPositioning])

  return (
    <WidgetWrapper>
      <button
        className='absolute text-sm transition-all top-2 right-3 text-slate-400 dark:hover:text-indigo-300 hover:text-indigo-700'
        onClick={reset}>
        Reset
      </button>
      <WidgetConverter helperName='Positioning'>
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

          {/* POSITIONING SELECT */}
          <select
            name='positioning'
            className='relative p-4 text-indigo-700 rounded-md appearance-none cursor-pointer positioning w-44 bg-stone-100 dark:bg-slate-700 dark:text-indigo-300 ring-1 ring-stone-600/10 dark:ring-stone-100/10'
            value={value}
            onChange={(e) => {
              setValue(parseInt(e.target.value))
            }}>
            {positionings.map((positioning, index) => (
              <option key={index} value={index}>
                {positioning.class}
              </option>
            ))}
          </select>
        </div>
      </WidgetConverter>
      <WidgetResult>
        <CopyToClipboard valueToCopy={currentPositioning.class.toString()}>
          <span className='font-semibold'>{`${currentPositioning.class}`}</span>
        </CopyToClipboard>
      </WidgetResult>
    </WidgetWrapper>
  )
}

export default PositioningHelper
