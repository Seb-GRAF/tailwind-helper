import React, { useState, useEffect } from 'react'
import { CopyToClipboard, OutOfBounds, StyledRange, StyledInput } from '..'
import { WidgetWrapper, WidgetConverter, WidgetResult } from '..'

type UnitKey = 'rem' | 'px'

interface Props {
  setFontSize: (value: string) => void
}

interface FontSize {
  class: string
  rem: number
  px: number
}

const fontSizes: FontSize[] = [
  { class: 'text-xs', rem: 0.75, px: 12 },
  { class: 'text-sm', rem: 0.875, px: 14 },
  { class: 'text-base', rem: 1, px: 16 },
  { class: 'text-lg', rem: 1.125, px: 18 },
  { class: 'text-xl', rem: 1.25, px: 20 },
  { class: 'text-2xl', rem: 1.5, px: 24 },
  { class: 'text-3xl', rem: 1.875, px: 30 },
  { class: 'text-4xl', rem: 2.25, px: 36 },
  { class: 'text-5xl', rem: 3, px: 48 },
  { class: 'text-6xl', rem: 3.75, px: 60 },
  { class: 'text-7xl', rem: 4.5, px: 72 },
  { class: 'text-8xl', rem: 6, px: 96 },
  { class: 'text-9xl', rem: 8, px: 128 },
]

const FontSizeHelper = ({ setFontSize }: Props): JSX.Element => {
  const [value, setValue] = useState(48)
  const [unit, setUnit] = useState<UnitKey>('px')
  const [outOfBounds, setOutOfBounds] = useState<'max' | 'min' | 'def' | null>(
    null
  )
  const [convertedFontSize, setConvertedFontSize] = useState({
    class: 'text-5xl',
    rem: 3,
    px: 48,
  })

  // returns closes size matching with fontSizes array
  const getClosestFontSize = (
    fontSizes: FontSize[],
    value: number,
    unit: UnitKey
  ): FontSize => {
    let closest = fontSizes.reduce(
      (prev: FontSize, curr: FontSize): FontSize => {
        return Math.abs(curr[unit] - value) < Math.abs(prev[unit] - value)
          ? curr
          : prev
      }
    )
    return closest
  }

  // switches between rem and px
  const unitConverter = (value: number, unit: UnitKey): number => {
    switch (unit) {
      case 'rem':
        return parseFloat((value * 16).toFixed())
      case 'px':
        return parseFloat((Math.round((value / 16) * 8) / 8).toFixed(3))
      default:
        return value
    }
  }

  const reset = () => {
    if (value === 16 && unit === 'px') return

    setValue(16)
    setUnit('px')
    setConvertedFontSize(fontSizes[3])
    setOutOfBounds(null)
  }

  // updates converted size on value and unit change
  useEffect(() => {
    const closestFontSize = getClosestFontSize(fontSizes, value, unit)
    if (closestFontSize) {
      setConvertedFontSize(closestFontSize)
    }
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
        <div className='relative'>
          <StyledInput
            type='number'
            name='fontSize'
            step={unit === 'px' ? 1 : unit === 'rem' ? 0.125 : 0.1}
            min={unit === 'px' ? 12 : unit === 'rem' ? 0.75 : 0}
            max={unit === 'px' ? 128 : unit === 'rem' ? 8 : 0}
            value={value || 0}
            setValue={setValue}
            hasUnit={true}
          />
          <span className='absolute top-0 right-0 flex items-center w-10 h-full text-indigo-700 pointer-events-none dark:text-indigo-300'>
            {unit}
          </span>
          <StyledRange
            step={unit === 'px' ? 1 : unit === 'rem' ? 0.125 : 0.1}
            min={unit === 'px' ? 12 : unit === 'rem' ? 0.75 : 0}
            max={unit === 'px' ? 128 : unit === 'rem' ? 8 : 0}
            value={value || 0}
            setValue={setValue}
          />
        </div>

        <button
          className='h-full mt-2 transition-all w-28 hover:text-indigo-600 dark:hover:text-indigo-300'
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
          <span className='font-semibold'>{`" ${convertedFontSize.class} "`}</span>
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
