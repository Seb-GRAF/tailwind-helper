import React, { useState, useEffect } from 'react'
import { CopyToClipboard, StyledRange } from '..'
import { WidgetWrapper, WidgetConverter, WidgetResult } from '..'
import { filters } from '../../utils/tailwindClasses'

interface Props {
  setFilter: (value: string) => void
}

const FilterHelper = ({ setFilter }: Props): JSX.Element => {
  const [isNegative, setIsNegative] = useState(false)
  const [classValue, setClassValue] = useState(0)
  const [value, setValue] = useState(0)
  const [currentFilter, setCurrentFilter] = useState(
    filters[0].classes[0].class
  )

  const reset = () => {
    if (value === 0 && classValue === 0) return

    setIsNegative(false)
    setValue(0)
    setClassValue(0)
    setCurrentFilter(filters[0].classes[0].class)
  }

  useEffect(() => {
    setCurrentFilter(
      `${filters[value].type === 'hue rotate' && isNegative ? '-' : ''}${
        filters[value].classes[classValue].class
      }`
    )
    setFilter(
      `${filters[value].type === 'hue rotate' && isNegative ? '-' : ''}${
        filters[value].classes[classValue].class
      }`
    )
  }, [currentFilter, setFilter, value, classValue, isNegative])

  return (
    <WidgetWrapper>
      <button
        className='absolute top-2 right-3 text-sm text-slate-400 transition-all hover:text-indigo-700 dark:hover:text-indigo-300'
        onClick={reset}>
        Reset
      </button>
      <WidgetConverter helperName='Filter'>
        <div className='relative'>
          {/* FILTER SELECT */}
          {filters[value].type === 'hue rotate' ? (
            <div className='relative flex w-44 gap-2'>
              {/* CHEVRON DOWN ICON OVERRIDE */}
              <div className='pointer-events-none absolute right-3 top-1/2 z-20 -translate-y-1/2 text-xl'>
                <svg
                  className='h-4 w-4'
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

              {/* SWITCH TO NEGATIVE/POSITIVE VALUES */}
              <button
                className='h-14 w-4 shrink-0 rounded bg-slate-100 ring-1 ring-gray-600/10 hover:text-indigo-600 dark:bg-slate-700 dark:ring-gray-100/10 dark:hover:text-indigo-300'
                // {...(unit === 'percent' ? { disabled: true } : {})}
                onClick={(e) => {
                  e.preventDefault()
                  setIsNegative((prev) => !prev)
                }}>
                {isNegative ? '-' : '+'}
              </button>
              <select
                name='Filters'
                className='relative w-full appearance-none rounded-md bg-gray-100 p-4 pr-8 text-indigo-700 ring-1 ring-gray-600/10 dark:bg-slate-700 dark:text-indigo-300 dark:ring-gray-100/10'
                value={value}
                onChange={(e) => {
                  setValue(parseInt(e.target.value))
                  setClassValue(0)
                }}>
                {filters.map((filter, index) => (
                  <option key={`filter-${index}`} value={index}>
                    {filter.type}
                  </option>
                ))}
              </select>
            </div>
          ) : (
            <div className='relative'>
              {/* CHEVRON DOWN ICON OVERRIDE */}
              <div className='pointer-events-none absolute right-3 top-1/2 z-20 -translate-y-1/2 text-xl'>
                <svg
                  className='h-4 w-4'
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
              <select
                name='Filters'
                className='relative w-44 cursor-pointer appearance-none rounded-md bg-gray-100 p-4 text-indigo-700 ring-1 ring-gray-600/10 dark:bg-slate-700 dark:text-indigo-300 dark:ring-gray-100/10'
                value={value}
                onChange={(e) => {
                  setValue(parseInt(e.target.value))
                  setClassValue(0)
                }}>
                {filters.map((filter, index) => (
                  <option key={`filter-${index}`} value={index}>
                    {filter.type}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* FILTER SLIDER */}
          <div className='relative'>
            <StyledRange
              step={1}
              min={0}
              max={filters[value].classes.length - 1}
              value={classValue || 0}
              setValue={setClassValue}
            />
          </div>
        </div>
      </WidgetConverter>
      <WidgetResult>
        <CopyToClipboard valueToCopy={currentFilter}>
          <span className='font-semibold'>{currentFilter}</span>
        </CopyToClipboard>
        {filters[value].unit !== null && (
          <CopyToClipboard
            valueToCopy={`${
              filters[value].type === 'hue rotate' && isNegative ? '-' : ''
            }${filters[value].classes[classValue].value}`}>
            <span className='font-semibold'>
              {`${
                filters[value].type === 'hue rotate' && isNegative ? '-' : ''
              }${filters[value].classes[classValue].value}`}
              {filters[value].unit}
            </span>
          </CopyToClipboard>
        )}
      </WidgetResult>
    </WidgetWrapper>
  )
}

export default FilterHelper
