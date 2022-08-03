import React, { useState, useEffect } from 'react'
import { CopyToClipboard, StyledRange, StyledInput } from '..'
import { WidgetWrapper, WidgetConverter, WidgetResult } from '..'

type UnitKey = 'rem' | 'px'
type OrientationKey = 'top' | 'right' | 'bottom' | 'left'

interface Props {
  setMargin: (value: string) => void
}

interface Margin {
  class: string
  rem: number
  px: number
}

const margins: Margin[] = [
  { class: '0', rem: 0, px: 0 },
  { class: '0.5', rem: 0.125, px: 2 },
  { class: '1', rem: 0.25, px: 4 },
  { class: '1.5', rem: 0.375, px: 6 },
  { class: '2', rem: 0.5, px: 8 },
  { class: '2.5', rem: 0.625, px: 10 },
  { class: '3', rem: 0.75, px: 12 },
  { class: '3.5', rem: 0.875, px: 14 },
  { class: '4', rem: 1, px: 16 },
  { class: '5', rem: 1.25, px: 20 },
  { class: '6', rem: 1.5, px: 24 },
  { class: '8', rem: 2, px: 32 },
  { class: '10', rem: 2.5, px: 40 },
  { class: '11', rem: 2.75, px: 44 },
  { class: '12', rem: 3, px: 48 },
  { class: '14', rem: 3.5, px: 56 },
  { class: '16', rem: 4, px: 64 },
  { class: '20', rem: 5, px: 80 },
  { class: '24', rem: 6, px: 96 },
  { class: '28', rem: 7, px: 112 },
  { class: '32', rem: 8, px: 128 },
  { class: '36', rem: 9, px: 144 },
  { class: '40', rem: 10, px: 160 },
  { class: '44', rem: 11, px: 176 },
  { class: '48', rem: 12, px: 192 },
  { class: '52', rem: 13, px: 208 },
  { class: '56', rem: 14, px: 224 },
  { class: '64', rem: 16, px: 256 },
  { class: '72', rem: 18, px: 288 },
  { class: '80', rem: 20, px: 320 },
  { class: '96', rem: 24, px: 384 },
  { class: 'px', rem: 0.0625, px: 1 },
]

const MarginHelper = ({ setMargin }: Props): JSX.Element => {
  const [value, setValue] = useState(16)
  const [unit, setUnit] = useState<UnitKey>('px')
  const [orientation, setOrientation] = useState({
    left: false,
    right: false,
    top: false,
    bottom: false,
  })
  const [orientationOutput, setOrientationOutput] = useState('m')

  const [convertedMargin, setConvertedMargin] = useState({
    class: '4',
    rem: 1,
    px: 16,
  })

  // returns closes size matching with fontSizes array
  const getClosestMargin = (
    margins: Margin[],
    value: number,
    unit: UnitKey
  ): Margin => {
    let closest = margins.reduce((prev: Margin, curr: Margin): Margin => {
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
    setValue(16)
    setUnit('px')
    setConvertedMargin({
      class: '4',
      rem: 1,
      px: 16,
    })
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
        setOrientationOutput('m')
        break
      case left === true && right === true && top === false && bottom === false:
        setOrientationOutput('mx')
        break
      case left === false && right === false && top === true && bottom === true:
        setOrientationOutput('my')
        break
      case left === false &&
        right === false &&
        top === true &&
        bottom === false:
        setOrientationOutput('mt')
        break
      case left === false &&
        right === false &&
        top === false &&
        bottom === true:
        setOrientationOutput('mb')
        break
      case left === false &&
        right === true &&
        top === false &&
        bottom === false:
        setOrientationOutput('mr')
        break
      case left === true &&
        right === false &&
        top === false &&
        bottom === false:
        setOrientationOutput('ml')
        break
      case (left === true || right === true) &&
        (bottom === true || top === true):
        setOrientation({
          left: false,
          right: false,
          top: false,
          bottom: false,
        })
        break
      default:
        setOrientationOutput('m')
        break
    }
  }, [orientation, orientationOutput])

  // updates converted size on value and unit change
  useEffect(() => {
    const closestMargin = getClosestMargin(margins, value, unit)
    if (closestMargin) {
      setConvertedMargin(closestMargin)
    }
  }, [value, unit])

  useEffect(() => {
    // sets parent font size to converted size
    setMargin(`${orientationOutput}-${convertedMargin!.class}`)
  }, [convertedMargin, setMargin, orientationOutput])

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
          className={`absolute transition-all left-0 py-4 -translate-y-1/2 rounded-md pointer-events-auto top-1/2 text-slate-400 ${
            orientation.left === true
              ? 'bg-indigo-300 dark:bg-indigo-600 text-slate-700 dark:text-slate-300'
              : 'bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:text-slate-300 text-slate-700'
          }
          `}>
          <span className='w-full text-center [writing-mode:vertical-rl] -rotate-180'>
            Left
          </span>
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
          className={`absolute transition-all right-0 py-4 -translate-y-1/2 rounded-md pointer-events-auto top-1/2 text-slate-400
          ${
            orientation.right === true
              ? 'bg-indigo-300 dark:bg-indigo-600 text-slate-700 dark:text-slate-300'
              : 'bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:text-slate-300 text-slate-700'
          }
          `}>
          <span className='w-full text-center [writing-mode:vertical-rl]'>
            Right
          </span>
        </button>
      </div>
      <WidgetConverter helperName='Margin'>
        <div className='relative'>
          <StyledInput
            type='number'
            name='margin'
            step={unit === 'px' ? 1 : unit === 'rem' ? 0.125 : 0.1}
            min={0}
            max={unit === 'px' ? 384 : unit === 'rem' ? 24 : 0}
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
            max={unit === 'px' ? 384 : unit === 'rem' ? 24 : 0}
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
        <CopyToClipboard valueToCopy={convertedMargin.class.toString()}>
          <span className='font-semibold'>{`" ${orientationOutput}-${convertedMargin.class} "`}</span>
        </CopyToClipboard>
        <div className='flex gap-4'>
          <CopyToClipboard valueToCopy={convertedMargin.rem.toString()}>
            <span>{`${convertedMargin.rem}rem`}</span>
          </CopyToClipboard>
          <CopyToClipboard valueToCopy={convertedMargin.px.toString()}>
            <span>{`${convertedMargin.px}px`}</span>
          </CopyToClipboard>
        </div>
      </WidgetResult>
    </WidgetWrapper>
  )
}

export default MarginHelper
