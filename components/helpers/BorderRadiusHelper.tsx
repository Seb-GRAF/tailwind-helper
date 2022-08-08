import React, { useState, useEffect } from 'react'
import { CopyToClipboard, StyledRange, StyledInput, Tooltip } from '..'
import { WidgetWrapper, WidgetConverter, WidgetResult } from '..'

type UnitKey = 'rem' | 'px'
type OrientationKey = 'top' | 'right' | 'bottom' | 'left'

interface Props {
  setBorderRadius: (value: string) => void
}

interface Border {
  class: string
  rem: number
  px: number
}

const borders: Border[] = [
  { class: '-none', rem: 0, px: 0 },
  { class: '-sm', rem: 0.125, px: 2 },
  { class: '', rem: 0.25, px: 4 },
  { class: '-md', rem: 0.375, px: 6 },
  { class: '-lg', rem: 0.5, px: 8 },
  { class: '-xl', rem: 0.75, px: 12 },
  { class: '-2xl', rem: 1, px: 16 },
  { class: '-3xl', rem: 1.5, px: 24 },
  { class: '-full', rem: 625, px: 9999 },
]

const BorderRadiusHelper = ({ setBorderRadius }: Props): JSX.Element => {
  const [value, setValue] = useState(12)
  const [unit, setUnit] = useState<UnitKey>('px')
  const [orientation, setOrientation] = useState({
    left: false,
    right: false,
    top: false,
    bottom: false,
  })
  const [orientationOutput, setOrientationOutput] = useState('rounded')

  const [convertedBorderRadius, setConvertedBorderRadius] = useState({
    class: '-xl',
    rem: 0.75,
    px: 12,
  })

  // returns closes size matching with fontSizes array
  const getClosestBorderRadius = (
    borders: Border[],
    value: number,
    unit: UnitKey
  ): Border => {
    if ((value >= 32 && unit === 'px') || (value >= 2 && unit === 'rem'))
      return { class: '-full', rem: 625, px: 9999 }
    let closest = borders.reduce((prev: Border, curr: Border): Border => {
      return Math.abs(curr[unit] - value) < Math.abs(prev[unit] - value)
        ? curr
        : prev
    })
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

  const toggleOrientation = (value: OrientationKey): void => {
    setOrientation({ ...orientation, [value]: !orientation[value] })
  }

  const reset = () => {
    setValue(12)
    setUnit('px')
    setConvertedBorderRadius({ class: '-xl', rem: 0.75, px: 12 })
    setOrientation({
      left: false,
      right: false,
      top: false,
      bottom: false,
    })
  }

  useEffect(() => {
    const { left, right, top, bottom } = orientation

    switch (true) {
      case left === true && right === true && top === true && bottom === true:
        setOrientationOutput('rounded')
        break
      case left === true && right === false && top === true && bottom === false:
        setOrientationOutput('rounded-tl')
        break
      case left === true && right === false && top === false && bottom === true:
        setOrientationOutput('rounded-bl')
        break
      case left === false && right === true && top === true && bottom === false:
        setOrientationOutput('rounded-tr')
        break
      case left === false && right === true && top === false && bottom === true:
        setOrientationOutput('rounded-br')
        break
      case left === false &&
        right === false &&
        top === true &&
        bottom === false:
        setOrientationOutput('rounded-t')
        break
      case left === false &&
        right === false &&
        top === false &&
        bottom === true:
        setOrientationOutput('rounded-b')
        break
      case left === false &&
        right === true &&
        top === false &&
        bottom === false:
        setOrientationOutput('rounded-r')
        break
      case left === true &&
        right === false &&
        top === false &&
        bottom === false:
        setOrientationOutput('rounded-l')
        break
      case (left === true && right === true) ||
        (bottom === true && top === true):
        setOrientation({
          left: false,
          right: false,
          top: false,
          bottom: false,
        })
        break
      default:
        setOrientationOutput('rounded')
        break
    }
  }, [orientation, orientationOutput])

  // updates converted size on value and unit change
  useEffect(() => {
    const closestBorderRadius = getClosestBorderRadius(borders, value, unit)
    if (closestBorderRadius) {
      setConvertedBorderRadius(closestBorderRadius)
    }
  }, [value, unit])

  useEffect(() => {
    // sets parent font size to converted size
    setBorderRadius(`${orientationOutput}${convertedBorderRadius!.class}`)
  }, [convertedBorderRadius, setBorderRadius, orientationOutput])

  return (
    <WidgetWrapper>
      <button
        className='absolute text-sm transition-all top-2 right-3 text-slate-400 dark:hover:text-indigo-300 hover:text-indigo-700'
        onClick={reset}>
        Reset
      </button>
      {/* ORIENTATION PICKER */}
      <div className='pointer-events-none absolute top-2 left-2 w-[calc(100%-1rem)] h-[calc(100%-1rem)] text-xs'>
        <button
          onClick={() => toggleOrientation('top')}
          className={`absolute transition-all top-0 px-4 -translate-x-1/2 rounded-md pointer-events-auto left-1/2 text-slate-400
          ${
            orientation.top === true
              ? 'bg-indigo-300 dark:bg-indigo-600 text-slate-700 dark:text-slate-300'
              : 'bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:text-slate-300 text-slate-700'
          }
          `}>
          Top
        </button>
        <button
          onClick={() => toggleOrientation('left')}
          className={`-rotate-90 absolute transition-all -left-5 px-4 -translate-y-1/2 rounded-md pointer-events-auto top-1/2 text-slate-400 ${
            orientation.left === true
              ? 'bg-indigo-300 dark:bg-indigo-600 text-slate-700 dark:text-slate-300'
              : 'bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:text-slate-300 text-slate-700'
          }
          `}>
          <span className='w-full text-center'>Left</span>
        </button>
        <button
          onClick={() => toggleOrientation('bottom')}
          className={`absolute transition-all bottom-0 px-4 -translate-x-1/2 rounded-md pointer-events-auto left-1/2 text-slate-400
          ${
            orientation.bottom === true
              ? 'bg-indigo-300 dark:bg-indigo-600 text-slate-700 dark:text-slate-300'
              : 'bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:text-slate-300 text-slate-700'
          }
          `}>
          Bottom
        </button>
        <button
          onClick={() => toggleOrientation('right')}
          className={`absolute transition-all -right-6 px-4 -translate-y-1/2 rotate-90 rounded-md pointer-events-auto top-1/2 text-slate-400
          ${
            orientation.right === true
              ? 'bg-indigo-300 dark:bg-indigo-600 text-slate-700 dark:text-slate-300'
              : 'bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:text-slate-300 text-slate-700'
          }
          `}>
          <span className='w-full text-center'>Right</span>
        </button>
      </div>
      {/* INFO TOOLTIP */}
      <div className='absolute bottom-2 right-3'>
        <Tooltip
          message='Click on the side buttons to change the direction of the border radius (maximum two at a time).'
          color='bg-slate-900 dark:bg-slate-200 dark:text-slate-900'
          side='left'>
          <span className='cursor-help opacity-70'>ⓘ</span>
        </Tooltip>
      </div>
      {/* CONVERTER */}
      <WidgetConverter helperName='Border Radius'>
        <div className='relative'>
          <StyledInput
            type='number'
            name='margin'
            step={unit === 'px' ? 1 : unit === 'rem' ? 0.125 : 0.1}
            min={0}
            max={unit === 'px' ? 32 : unit === 'rem' ? 2 : 0}
            value={value || 0}
            setValue={setValue}
            hasUnit={true}
          />
          <span className='absolute top-0 right-0 flex items-center w-10 h-full text-indigo-700 pointer-events-none dark:text-indigo-300'>
            {unit}
          </span>
          <StyledRange
            step={unit === 'px' ? 1 : unit === 'rem' ? 0.125 : 0.1}
            min={0}
            max={unit === 'px' ? 32 : unit === 'rem' ? 2 : 0}
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
        <CopyToClipboard valueToCopy={convertedBorderRadius.class.toString()}>
          <span className='font-semibold'>{`"${orientationOutput}${convertedBorderRadius.class} "`}</span>
        </CopyToClipboard>
        <div className='flex gap-4'>
          <CopyToClipboard valueToCopy={convertedBorderRadius.rem.toString()}>
            <span>{`${convertedBorderRadius.rem}rem`}</span>
          </CopyToClipboard>
          <CopyToClipboard valueToCopy={convertedBorderRadius.px.toString()}>
            <span>{`${convertedBorderRadius.px}px`}</span>
          </CopyToClipboard>
        </div>
      </WidgetResult>
    </WidgetWrapper>
  )
}

export default BorderRadiusHelper
