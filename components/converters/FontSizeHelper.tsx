import React, { useState, useEffect } from 'react'
import CopyToClipboard from '../CopyToClipboard'
import OutOfBounds from '../OutOfBounds'

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
  const [value, setValue] = useState(16)
  const [unit, setUnit] = useState<UnitKey>('px')
  const [outOfBounds, setOutOfBounds] = useState<'max' | 'min' | 'def' | null>(
    null
  )
  const [convertedFontSize, setConvertedFontSize] = useState<FontSize | null>(
    fontSizes[3]
  )

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
    <section className='w-full'>
      {/* CONVERTER */}
      <form className='flex flex-col justify-center w-full gap-4'>
        <label htmlFor='fontSize' className='flex items-center gap-4'>
          Font Size
          {/* SIZE INPUT*/}
          <div className='relative'>
            <input
              type='number'
              step={unit === 'px' ? 1 : unit === 'rem' ? 0.125 : 0.1}
              name='fontSize'
              min={unit === 'px' ? 12 : unit === 'rem' ? 0.75 : 0}
              max={unit === 'px' ? 128 : unit === 'rem' ? 8 : 0}
              className='p-4 pr-12 w-36'
              value={value || 0}
              onChange={(e) => setValue(parseFloat(e.target.value))}
            />
            <span className='absolute top-0 right-0 flex items-center w-10 h-full pointer-events-none'>
              {unit}
            </span>
            <input
              type='range'
              step={unit === 'px' ? 1 : unit === 'rem' ? 0.125 : 0.1}
              min={unit === 'px' ? 12 : unit === 'rem' ? 0.75 : 0}
              max={unit === 'px' ? 128 : unit === 'rem' ? 8 : 0}
              className='absolute left-0 w-full -bottom-1'
              value={value || 0}
              onChange={(e) => setValue(parseFloat(e.target.value))}
            />
          </div>
        </label>
        {/* UNIT SWITCH INPUT */}
        <button
          className='h-full bg-white w-28'
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
      </form>
      {/* RESULT */}
      <div className='inline-block w-full h-full'>
        {convertedFontSize && (
          <div className='flex flex-col gap-4'>
            <div>
              <p className='flex items-center gap-4'>
                <CopyToClipboard
                  valueToCopy={convertedFontSize.class.toString()}>
                  <span className='font-semibold'>{`'${convertedFontSize.class}'`}</span>
                </CopyToClipboard>
                <CopyToClipboard valueToCopy={convertedFontSize.rem.toString()}>
                  <span>{`${convertedFontSize.rem}rem`}</span>
                </CopyToClipboard>
                <CopyToClipboard valueToCopy={convertedFontSize.px.toString()}>
                  <span>{`${convertedFontSize.px}px`}</span>
                </CopyToClipboard>
                {outOfBounds && <OutOfBounds bounds={outOfBounds} />}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default FontSizeHelper
