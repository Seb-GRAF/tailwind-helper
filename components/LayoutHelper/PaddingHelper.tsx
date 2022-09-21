import React, { useState, useEffect } from 'react'
import { CopyToClipboard, StyledRange, StyledInput, Tooltip } from '..'
import {
  WidgetWrapper,
  WidgetConverter,
  WidgetResult,
  OrientationButton,
} from '..'
import { paddings } from '../../utils/tailwindClasses'
import { unitConverter } from '../../utils/unitConverter'
import { getClosestItem, TailwindObjectKey } from '../../utils/getClosestItem'

type OrientationKey = 'top' | 'right' | 'bottom' | 'left'

interface Props {
  setPadding: (value: string) => void
}

const PaddingHelper = ({ setPadding }: Props): JSX.Element => {
  const [value, setValue] = useState(paddings[8].px)
  const [unit, setUnit] = useState<TailwindObjectKey>('px')
  const [isNegative, setIsNegative] = useState(false)
  const [orientation, setOrientation] = useState({
    left: false,
    right: false,
    top: false,
    bottom: false,
  })
  const [orientationOutput, setOrientationOutput] = useState('p')
  const [convertedPadding, setConvertedPadding] = useState(paddings[8])

  const toggleOrientation = (value: OrientationKey): void => {
    setOrientation({ ...orientation, [value]: !orientation[value] })
  }

  const reset = () => {
    setValue(paddings[8].px)
    setUnit('px')
    setIsNegative(false)
    setConvertedPadding(paddings[8])
    setOrientation({
      left: false,
      right: false,
      top: false,
      bottom: false,
    })
  }

  // defines the prefix of class when changing orientation
  useEffect(() => {
    const { left, right, top, bottom } = orientation

    switch (true) {
      case left === true && right === true && top === true && bottom === true:
        setOrientationOutput('p')
        break
      case left === true && right === true && top === false && bottom === false:
        setOrientationOutput('px')
        break
      case left === false && right === false && top === true && bottom === true:
        setOrientationOutput('py')
        break
      case left === false &&
        right === false &&
        top === true &&
        bottom === false:
        setOrientationOutput('pt')
        break
      case left === false &&
        right === false &&
        top === false &&
        bottom === true:
        setOrientationOutput('pb')
        break
      case left === false &&
        right === true &&
        top === false &&
        bottom === false:
        setOrientationOutput('pr')
        break
      case left === true &&
        right === false &&
        top === false &&
        bottom === false:
        setOrientationOutput('pl')
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
        setOrientationOutput('p')
        break
    }
  }, [orientation, orientationOutput])

  // updates converted size on value and unit change
  useEffect(() => {
    setConvertedPadding(getClosestItem(paddings, value, unit))
  }, [value, unit])

  useEffect(() => {
    // sets parent font size to converted size
    setPadding(
      `${isNegative ? '-' : ''}${orientationOutput}-${convertedPadding!.class}`
    )
  }, [convertedPadding, setPadding, orientationOutput, isNegative])

  return (
    <WidgetWrapper>
      <button
        className='absolute top-2 right-3 text-sm text-slate-400 transition-all hover:text-indigo-700 dark:hover:text-indigo-300'
        onClick={reset}>
        Reset
      </button>
      {/* ORIENTATION PICKER */}
      <div className='pointer-events-none absolute top-2 left-2 h-[calc(100%-1rem)] w-[calc(100%-1rem)] text-xs'>
        <OrientationButton
          onClick={() => toggleOrientation('top')}
          orientation={orientation}
          side={'top'}
        />
        <OrientationButton
          onClick={() => toggleOrientation('bottom')}
          orientation={orientation}
          side={'bottom'}
        />
        <OrientationButton
          onClick={() => toggleOrientation('left')}
          orientation={orientation}
          side={'left'}
        />
        <OrientationButton
          onClick={() => toggleOrientation('right')}
          orientation={orientation}
          side={'right'}
        />
      </div>
      {/* INFO TOOLTIP */}
      <div className='absolute bottom-2 right-3'>
        <Tooltip
          message='Click on the side buttons to change the orientation of the padding. (maximum two at a time)'
          color='bg-slate-900 dark:bg-slate-200 dark:text-slate-900'
          side='left'>
          <span className='cursor-help opacity-70'>ⓘ</span>
        </Tooltip>
      </div>
      {/* CONVERTER */}
      <WidgetConverter helperName='Padding'>
        <div className='relative flex w-full gap-2'>
          {/* SWITCH TO NEGATIVE/POSITIVE VALUES */}
          <button
            className='h-14 w-4 shrink-0 rounded bg-slate-100 ring-1 ring-gray-600/10 hover:text-indigo-600 dark:bg-slate-700 dark:ring-gray-100/10 dark:hover:text-indigo-300'
            onClick={(e) => {
              e.preventDefault()
              setIsNegative((prev) => !prev)
            }}>
            {isNegative ? '-' : '+'}
          </button>
          <StyledInput
            type='number'
            name='Padding'
            step={unit === 'px' ? 1 : unit === 'rem' ? 0.125 : 0.1}
            min={0}
            max={unit === 'px' ? 384 : unit === 'rem' ? 24 : 0}
            value={value}
            setValue={setValue}
            hasUnit={true}
          />
          <span className='pointer-events-none absolute top-0 right-0 flex h-full w-10 items-center text-indigo-700 dark:text-indigo-300'>
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
        <CopyToClipboard
          valueToCopy={`${
            isNegative ? '-' : ''
          }${convertedPadding.class.toString()}`}>
          <span className='font-semibold'>{`${
            isNegative ? '-' : ''
          }${orientationOutput}-${convertedPadding.class}`}</span>
        </CopyToClipboard>
        <div className='flex gap-4'>
          <CopyToClipboard
            valueToCopy={`${
              isNegative ? '-' : ''
            }${convertedPadding.rem.toString()}`}>
            <span>{`${isNegative ? '-' : ''}${convertedPadding.rem}rem`}</span>
          </CopyToClipboard>
          <CopyToClipboard
            valueToCopy={`${
              isNegative ? '-' : ''
            }${convertedPadding.px.toString()}`}>
            <span>{`${isNegative ? '-' : ''}${convertedPadding.px}px`}</span>
          </CopyToClipboard>
        </div>
      </WidgetResult>
    </WidgetWrapper>
  )
}

export default PaddingHelper
