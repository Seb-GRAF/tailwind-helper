import React, { useState, useEffect } from 'react'
import { CopyToClipboard, StyledRange, StyledInput, Tooltip } from '..'
import { WidgetWrapper, WidgetConverter, WidgetResult } from '..'
import { translates } from '../../utils/tailwindClasses'
import { unitConverter } from '../../utils/unitConverter'
import { getClosestItem, TailwindObjectKey } from '../../utils/getClosestItem'

interface Props {
  setTranslateY: (value: string) => void
}

const TranslateYHelper = ({ setTranslateY }: Props): JSX.Element => {
  const [value, setValue] = useState(translates[0].px)
  const [unit, setUnit] = useState<TailwindObjectKey>('px')
  const [isNegative, setIsNegative] = useState(false)
  const [currentTranslate, setCurrentTranslate] = useState('')
  const [convertedTranslate, setConvertedTranslate] = useState(translates[0])

  const reset = (resetPositive = true) => {
    if (resetPositive) setIsNegative(false)
    setValue(translates[0].px)
    setUnit('px')
    setIsNegative(false)
    setConvertedTranslate(translates[0])
  }

  // updates converted size on value and unit change
  useEffect(() => {
    if (unit === 'percent') {
      setConvertedTranslate(translates[value])
    } else {
      setConvertedTranslate(getClosestItem(translates, value, unit))
    }
  }, [value, unit])

  useEffect(() => {
    setCurrentTranslate(
      `${isNegative ? '-' : ''}translate-y-${convertedTranslate!.class}`
    )
    // sets parent font size to converted size
    setTranslateY(
      `${isNegative ? '-' : ''}translate-y-${convertedTranslate!.class}`
    )
  }, [convertedTranslate, setTranslateY, isNegative])

  return (
    <WidgetWrapper>
      <button
        className='absolute text-sm transition-all top-2 right-3 text-slate-400 dark:hover:text-indigo-300 hover:text-indigo-700'
        onClick={() => reset()}>
        Reset
      </button>

      {/* INFO TOOLTIP */}
      <div className='absolute bottom-2 right-3'>
        <Tooltip
          message='Click on the side buttons to change the orientation of the margin. (maximum two at a time)'
          color='bg-slate-900 dark:bg-slate-200 dark:text-slate-900'
          side='left'>
          <span className='cursor-help opacity-70'>ⓘ</span>
        </Tooltip>
      </div>

      {/* CONVERTER */}
      <WidgetConverter helperName='Translate Y'>
        <div className='relative flex flex-col w-full gap-4'>
          {/* INPUT FOR INTEGER VALUES */}
          {(unit === 'px' || unit === 'rem') && (
            <>
              <div className='relative flex w-full gap-2'>
                {/* SWITCH TO NEGATIVE/POSITIVE VALUES */}
                <button
                  className='flex-shrink-0 w-4 rounded hover:text-indigo-600 dark:hover:text-indigo-300 bg-slate-100 dark:bg-slate-700 ring-1 ring-gray-600/10 dark:ring-gray-100/10 h-14'
                  // {...(unit === 'percent' ? { disabled: true } : {})}
                  onClick={(e) => {
                    e.preventDefault()
                    setIsNegative((prev) => !prev)
                  }}>
                  {isNegative ? '-' : '+'}
                </button>
                <label className='w-full'>
                  <input
                    type='number'
                    step={unit === 'px' ? 1 : unit === 'rem' ? 0.125 : 0.1}
                    min={0}
                    max={unit === 'px' ? 384 : unit === 'rem' ? 24 : 0}
                    value={value}
                    onChange={(e) => setValue(parseInt(e.target.value))}
                    className='w-full p-4 pr-24 text-indigo-700 bg-gray-100 rounded-md appearance-none placement-input dark:bg-slate-700 dark:text-indigo-300 ring-1 ring-gray-600/10 dark:ring-gray-100/10 overflow-ellipsis'
                  />
                  <span className='sr-only'>Translate Y value</span>
                </label>
                <span className='absolute top-0 flex items-center w-10 h-full text-indigo-700 pointer-events-none right-12 dark:text-indigo-300'>
                  {unit}
                </span>
              </div>

              <StyledRange
                step={unit === 'px' ? 1 : unit === 'rem' ? 0.125 : 0.1}
                min={0}
                max={unit === 'px' ? 384 : unit === 'rem' ? 24 : 0}
                value={value}
                setValue={setValue}
              />
            </>
          )}

          {/* INPUT FOR PERCENTAGE VALUES */}
          {unit === 'percent' && (
            <>
              <div className='relative flex w-full gap-2'>
                {/* SWITCH TO NEGATIVE/POSITIVE VALUES */}
                <button
                  className='flex-shrink-0 w-4 rounded hover:text-indigo-600 dark:hover:text-indigo-300 bg-slate-100 dark:bg-slate-700 ring-1 ring-gray-600/10 dark:ring-gray-100/10 h-14 '
                  // {...(unit === 'percent' ? { disabled: true } : {})}
                  onClick={(e) => {
                    e.preventDefault()
                    setIsNegative((prev) => !prev)
                  }}>
                  {isNegative ? '-' : '+'}
                </button>
                <input
                  className='w-full p-4 pr-20 text-indigo-700 bg-gray-100 rounded-md cursor-not-allowed dark:bg-slate-700 dark:text-indigo-300 ring-1 ring-gray-600/10 dark:ring-gray-100/10 overflow-ellipsis'
                  type='text'
                  name='placement'
                  step='1'
                  min='0'
                  readOnly
                  max={
                    translates.filter((item) => item.type === 'fraction')
                      .length - 1
                  }
                  value={translates[value].percent}
                />
                <span className='absolute top-0 flex items-center w-10 h-full text-indigo-700 pointer-events-none right-10 dark:text-indigo-300'>
                  %
                </span>
              </div>
              <input
                className='-mt-1 w-44'
                type='range'
                step={1}
                min={0}
                max={
                  translates.filter((item) => item.type === 'fraction').length -
                  1
                }
                defaultValue={0}
                onChange={(e) => {
                  setValue(translates.length - 1 - parseInt(e.target.value))
                }}
              />
            </>
          )}

          {/* SWITCH TO PERCENT / INT */}
          <button
            className='absolute top-4 right-1 w-14 hover:text-indigo-600 dark:hover:text-indigo-300'
            onClick={(e) => {
              e.preventDefault()
              if (unit !== 'percent') {
                setUnit('percent')
                setValue(translates.length - 1)
              } else {
                reset(false)
              }
            }}>
            <Tooltip
              message={
                unit == 'percent' ? 'Switch to px' : 'Switch to percentage'
              }>
              <div className='flex items-center h-full gap-2'>
                <svg
                  className='w-6 h-5 pt-1'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4'
                  />
                </svg>

                <span>{unit == 'percent' ? 'px' : '%'}</span>
              </div>
            </Tooltip>
          </button>
        </div>

        {/* SWITCH TO REM/PX BUTTON */}
        <button
          className='w-28 hover:text-indigo-600 dark:hover:text-indigo-300'
          // {...(unit === 'percent' ? { disabled: true } : {})}
          onClick={(e) => {
            e.preventDefault()
            if (unit === 'px') {
              setUnit('rem')
              setValue(unitConverter(value, 'px'))
            } else if (unit === 'rem') {
              setUnit('px')
              setValue(unitConverter(value, 'rem'))
            } else if (unit === 'percent') {
              reset()
            }
          }}>
          {unit == 'px' ? 'Switch to rem' : 'Switch to px'}
        </button>
      </WidgetConverter>
      {/* RESULT */}

      <WidgetResult>
        <CopyToClipboard valueToCopy={currentTranslate}>
          <span className='font-semibold'>{currentTranslate}</span>
        </CopyToClipboard>
        {unit !== 'percent' ? (
          <div className='flex gap-4'>
            <CopyToClipboard
              valueToCopy={`${
                isNegative ? '-' : ''
              }${convertedTranslate.rem.toString()}`}>
              <span>{`${isNegative ? '-' : ''}${
                convertedTranslate.rem
              }rem`}</span>
            </CopyToClipboard>
            <CopyToClipboard
              valueToCopy={`${
                isNegative ? '-' : ''
              }${convertedTranslate.px.toString()}`}>
              <span>{`${isNegative ? '-' : ''}${
                convertedTranslate.px
              }px`}</span>
            </CopyToClipboard>
          </div>
        ) : (
          <div className='flex gap-4'>
            <CopyToClipboard valueToCopy={translates[value].percent.toString()}>
              <span>{`${isNegative ? '-' : ''}${
                convertedTranslate.percent
              }%`}</span>
            </CopyToClipboard>
          </div>
        )}
      </WidgetResult>
    </WidgetWrapper>
  )
}

export default TranslateYHelper
