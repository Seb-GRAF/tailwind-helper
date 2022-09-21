import React, { useState, useEffect } from 'react'
import { CopyToClipboard, OutOfBounds, StyledRange, StyledInput } from '..'
import { WidgetWrapper, WidgetConverter, WidgetResult } from '..'
import { fontSizes } from '../../utils/tailwindClasses'
import { unitConverter } from '../../utils/unitConverter'
import { getClosestItem, TailwindObjectKey } from '../../utils/getClosestItem'

interface Props {
  setFontSize: (value: string) => void
}

const FontSizeHelper = ({ setFontSize }: Props): JSX.Element => {
  const [value, setValue] = useState(48)
  const [unit, setUnit] = useState<TailwindObjectKey>('px')
  const [outOfBounds, setOutOfBounds] = useState<'max' | 'min' | 'def' | null>(
    null
  )
  const [convertedFontSize, setConvertedFontSize] = useState(fontSizes[3])

  const reset = () => {
    if (value === 16 && unit === 'px') return

    setValue(16)
    setUnit('px')
    setConvertedFontSize(fontSizes[3])
    setOutOfBounds(null)
  }

  // updates converted size on value and unit change
  useEffect(() => {
    // const closestFontSize = getClosestFontSize(fontSizes, value, unit)
    setConvertedFontSize(getClosestItem(fontSizes, value, unit))
  }, [value, unit])

  useEffect(() => {
    // check if converted font size is at upper/lower limit
    if (convertedFontSize?.class === 'text-xs') {
      setOutOfBounds('min')
    } else if (convertedFontSize?.class === 'text-9xl') {
      setOutOfBounds('max')
    } else if (convertedFontSize?.class === 'text-base') {
      setOutOfBounds('def')
    } else {
      setOutOfBounds(null)
    }

    // sets parent font size to converted size
    setFontSize(convertedFontSize!.class)
  }, [convertedFontSize, setFontSize])

  return (
    <WidgetWrapper>
      <button
        className='absolute text-sm transition-all top-2 right-3 text-slate-400 dark:hover:text-indigo-300 hover:text-indigo-700'
        onClick={reset}>
        Reset
      </button>
      <WidgetConverter helperName='Font Size'>
        <div className='relative w-full'>
          <StyledInput
            type='number'
            name='Font size'
            step={unit === 'px' ? 1 : unit === 'rem' ? 0.125 : 0.1}
            min={unit === 'px' ? 12 : unit === 'rem' ? 0.75 : 0}
            max={unit === 'px' ? 128 : unit === 'rem' ? 8 : 0}
            value={value}
            setValue={setValue}
            hasUnit={true}
          />
          <span className='absolute top-0 right-0 flex items-center w-10 h-full text-indigo-700 pointer-events-none dark:text-indigo-300'>
            {unit}
          </span>
        </div>
        <StyledRange
          step={unit === 'px' ? 1 : unit === 'rem' ? 0.125 : 0.1}
          min={unit === 'px' ? 12 : unit === 'rem' ? 0.75 : 0}
          max={unit === 'px' ? 128 : unit === 'rem' ? 8 : 0}
          value={value || 0}
          setValue={setValue}
        />

        <button
          className='w-28 hover:text-indigo-600 dark:hover:text-indigo-300'
          onClick={(e) => {
            e.preventDefault()
            if (unit === 'px') {
              setUnit('rem')
              setValue(unitConverter(value, 'px'))
            } else if (unit === 'rem') {
              setUnit('px')
              setValue(unitConverter(value, 'rem'))
            }
          }}>
          {unit == 'px' ? 'Switch to rem' : 'Switch to px'}
        </button>
      </WidgetConverter>
      {/* RESULT */}

      <WidgetResult>
        <CopyToClipboard valueToCopy={convertedFontSize.class.toString()}>
          <span className='font-semibold'>{`${convertedFontSize.class}`}</span>
        </CopyToClipboard>
        <div className='flex gap-4'>
          <CopyToClipboard valueToCopy={convertedFontSize.rem.toString()}>
            <span>{`${convertedFontSize.rem}rem`}</span>
          </CopyToClipboard>
          <CopyToClipboard valueToCopy={convertedFontSize.px.toString()}>
            <span>{`${convertedFontSize.px}px`}</span>
          </CopyToClipboard>
        </div>
        {outOfBounds && (
          <div className='absolute bottom-0 left-0 w-full text-center'>
            <OutOfBounds bounds={outOfBounds} />
          </div>
        )}
      </WidgetResult>
    </WidgetWrapper>
  )
}

export default FontSizeHelper
