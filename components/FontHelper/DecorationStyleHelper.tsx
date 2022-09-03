import React, { useState, useEffect } from 'react'
import { CopyToClipboard, StyledRange } from '..'
import { WidgetWrapper, WidgetConverter, WidgetResult } from '..'
import {
  decorationStyles,
  decorationThicknesses,
} from '../../utils/tailwindClasses'

interface Props {
  setDecorationStyle: (value: string) => void
  setDecorationThickness: (value: string) => void
}

const DecorationStyleHelper = ({
  setDecorationStyle,
  setDecorationThickness,
}: Props): JSX.Element => {
  const [value, setValue] = useState(0)
  const [thicknessValue, setThicknessValue] = useState(0)
  const [currentDecorationStyle, setCurrentDecorationStyle] = useState(
    decorationStyles[0]
  )
  const [currentDecorationThickness, setCurrentDecorationThickness] = useState(
    decorationThicknesses[0]
  )

  const reset = () => {
    if (value === 0) return

    setValue(0)
    setThicknessValue(0)
    setCurrentDecorationStyle(decorationStyles[0])
    setCurrentDecorationThickness(decorationThicknesses[0])
  }

  useEffect(() => {
    setCurrentDecorationStyle(decorationStyles[value])
  }, [value])

  useEffect(() => {
    setCurrentDecorationThickness(decorationThicknesses[thicknessValue])
  }, [thicknessValue])

  useEffect(() => {
    setDecorationStyle(currentDecorationStyle.class)
    setDecorationThickness(currentDecorationThickness.class)
  }, [
    currentDecorationStyle,
    setDecorationStyle,
    currentDecorationThickness,
    setDecorationThickness,
  ])

  return (
    <WidgetWrapper>
      <button
        className='absolute text-sm transition-all top-2 right-3 text-slate-400 dark:hover:text-indigo-300 hover:text-indigo-700'
        onClick={reset}>
        Reset
      </button>
      <WidgetConverter helperName='Decoration Style'>
        <div className='relative'>
          <div className='relative'>
            {/* CHEVRON DOWN ICON OVERRIDE */}
            <div className='absolute z-20 text-xl -translate-y-1/2 pointer-events-none top-1/2 right-3'>
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

            {/* DECORATION STYLE SELECT */}
            <select
              name='Text decoration'
              className='relative p-4 text-indigo-700 bg-gray-100 rounded-md appearance-none cursor-pointer w-44 dark:bg-slate-700 dark:text-indigo-300 ring-1 ring-gray-600/10 dark:ring-gray-100/10'
              value={value}
              onChange={(e) => {
                setValue(parseInt(e.target.value))
              }}>
              {decorationStyles.map((positioning, index) => (
                <option key={index} value={index}>
                  {positioning.displayName}
                </option>
              ))}
            </select>
          </div>
          {/* STYLE SLIDER */}
          <div className='relative'>
            <StyledRange
              step={1}
              min={0}
              max={decorationThicknesses.length - 1}
              value={thicknessValue || 0}
              setValue={setThicknessValue}
            />
          </div>
        </div>
      </WidgetConverter>
      <WidgetResult>
        <CopyToClipboard valueToCopy={currentDecorationStyle.class.toString()}>
          <span className='font-semibold'>{`${currentDecorationStyle.class}`}</span>
        </CopyToClipboard>
        <CopyToClipboard
          valueToCopy={currentDecorationThickness.class.toString()}>
          <span className='font-semibold'>{`${currentDecorationThickness.class}`}</span>
        </CopyToClipboard>
      </WidgetResult>
    </WidgetWrapper>
  )
}

export default DecorationStyleHelper
