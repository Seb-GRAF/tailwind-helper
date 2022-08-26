import React, { useState, useEffect } from 'react'
import { CopyToClipboard, OutOfBounds } from '..'
import { WidgetWrapper, WidgetConverter, WidgetResult } from '..'
import { textDecorations } from '../../utils/tailwindClasses'

interface Props {
  setTextDecoration: (value: string) => void
}

const TextDecorationHelper = ({ setTextDecoration }: Props): JSX.Element => {
  const [value, setValue] = useState(0)
  const [currentFontDecoration, setCurrentTextDecoration] = useState(
    textDecorations[0]
  )
  const [outOfBounds, setOutOfBounds] = useState<'def' | null>(null)

  const reset = () => {
    if (value === 0) return

    setValue(0)
    setCurrentTextDecoration(textDecorations[0])
  }

  useEffect(() => {
    setCurrentTextDecoration(textDecorations[value])
  }, [value])

  useEffect(() => {
    if (currentFontDecoration?.class === 'no-underline') {
      setOutOfBounds('def')
    } else {
      setOutOfBounds(null)
    }

    setTextDecoration(currentFontDecoration!.class)
  }, [currentFontDecoration, setTextDecoration])

  return (
    <WidgetWrapper>
      <button
        className='absolute text-sm transition-all top-2 right-3 text-slate-400 dark:hover:text-indigo-300 hover:text-indigo-700'
        onClick={reset}>
        Reset
      </button>
      <WidgetConverter helperName='Text Decoration'>
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

          {/* FONT FAMILY SELECT */}
          <select
            name='Text decoration'
            className='relative p-4 text-indigo-700 bg-gray-100 rounded-md appearance-none cursor-pointer w-44 dark:bg-slate-700 dark:text-indigo-300 ring-1 ring-gray-600/10 dark:ring-gray-100/10'
            value={value}
            onChange={(e) => {
              setValue(parseInt(e.target.value))
            }}>
            {textDecorations.map((positioning, index) => (
              <option key={index} value={index}>
                {positioning.displayName}
              </option>
            ))}
          </select>
        </div>
      </WidgetConverter>
      <WidgetResult>
        <CopyToClipboard valueToCopy={currentFontDecoration.class.toString()}>
          <span className='font-semibold'>{`${currentFontDecoration.class}`}</span>
        </CopyToClipboard>

        {outOfBounds && (
          <div className='absolute bottom-0 left-0 w-full text-center'>
            <OutOfBounds bounds={outOfBounds} />
          </div>
        )}
      </WidgetResult>
    </WidgetWrapper>
  )
}

export default TextDecorationHelper
