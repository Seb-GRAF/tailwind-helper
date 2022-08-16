import React, { useState, useEffect } from 'react'
import { CopyToClipboard, StyledRange, StyledInput, Tooltip } from '..'
import {
  WidgetWrapper,
  WidgetConverter,
  WidgetResult,
  OrientationButton,
} from '..'
import { placements, letterSpacings } from '../../utils/tailwindClasses'
import { unitConverter } from '../../utils/unitConverter'
import { getClosestItem } from '../../utils/getClosestItem'

type OrientationKey = 'top' | 'right' | 'bottom' | 'left'

interface Props {
  setPlacement: (value: string) => void
}

const PlacementHelper = ({ setPlacement }: Props): JSX.Element => {
  const [value, setValue] = useState(placements[0].px)
  const [unit, setUnit] = useState('px')
  const [orientation, setOrientation] = useState({
    left: false,
    right: false,
    top: false,
    bottom: false,
  })
  const [orientationOutput, setOrientationOutput] = useState('inset')
  const [convertedPlacement, setConvertedPlacement] = useState(placements[0])
  const [currentPlacement, setCurrentPlacement] = useState('')

  const toggleOrientation = (value: OrientationKey): void => {
    setOrientation({ ...orientation, [value]: !orientation[value] })
  }

  const reset = () => {
    setValue(placements[0].px)
    setUnit('px')
    setConvertedPlacement(placements[0])
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
        setOrientationOutput('inset')
        break
      case left === true && right === true && top === false && bottom === false:
        setOrientationOutput('inset-x')
        break
      case left === false && right === false && top === true && bottom === true:
        setOrientationOutput('inset-y')
        break
      case left === false &&
        right === false &&
        top === true &&
        bottom === false:
        setOrientationOutput('top')
        break
      case left === false &&
        right === false &&
        top === false &&
        bottom === true:
        setOrientationOutput('bottom')
        break
      case left === false &&
        right === true &&
        top === false &&
        bottom === false:
        setOrientationOutput('right')
        break
      case left === true &&
        right === false &&
        top === false &&
        bottom === false:
        setOrientationOutput('left')
        break
      case left === true && right === false && top === true && bottom === false:
        setOrientationOutput('top-left')
        break
      case left === false && right === true && top === true && bottom === false:
        setOrientationOutput('top-right')
        break
      case left === true && right === false && top === false && bottom === true:
        setOrientationOutput('bottom-left')
        break
      case left === false && right === true && top === false && bottom === true:
        setOrientationOutput('bottom-right')
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
        setOrientationOutput('inset')
        break
    }
  }, [orientation, orientationOutput])

  // updates converted size on value and unit change
  useEffect(() => {
    if (unit === 'percent') {
      setConvertedPlacement(placements[value])
    } else {
      setConvertedPlacement(getClosestItem(placements, value, unit))
    }
  }, [value, unit])

  useEffect(() => {
    if (orientationOutput === 'top-left') {
      setPlacement(
        `top-${convertedPlacement.class} left-${convertedPlacement.class}`
      )
      setCurrentPlacement(
        `top-${convertedPlacement.class} left-${convertedPlacement.class}`
      )
    } else if (orientationOutput === 'top-right') {
      setPlacement(
        `top-${convertedPlacement.class} right-${convertedPlacement.class}`
      )
      setCurrentPlacement(
        `top-${convertedPlacement.class} right-${convertedPlacement.class}`
      )
    } else if (orientationOutput === 'bottom-left') {
      setPlacement(
        `bottom-${convertedPlacement.class} left-${convertedPlacement.class}`
      )
      setCurrentPlacement(
        `bottom-${convertedPlacement.class} left-${convertedPlacement.class}`
      )
    } else if (orientationOutput === 'bottom-right') {
      setPlacement(
        `bottom-${convertedPlacement.class} right-${convertedPlacement.class}`
      )
      setCurrentPlacement(
        `bottom-${convertedPlacement.class} right-${convertedPlacement.class}`
      )
    } else {
      setPlacement(`${orientationOutput}-${convertedPlacement!.class}`)
      setCurrentPlacement(`${orientationOutput}-${convertedPlacement!.class}`)
    }
  }, [convertedPlacement, setPlacement, orientationOutput])

  return (
    <WidgetWrapper>
      <button
        className='absolute text-sm transition-all top-2 right-3 text-slate-400 dark:hover:text-indigo-300 hover:text-indigo-700'
        onClick={reset}>
        Reset
      </button>
      {/* ORIENTATION PICKER */}
      <div className='absolute top-2 left-2 w-[calc(100%-1rem)] h-[calc(100%-1rem)] text-xs pointer-events-none'>
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
          message='Click on the side buttons to change the side of the placement.'
          color='bg-slate-900 dark:bg-slate-200 dark:text-slate-900'
          side='left'>
          <span className='cursor-help opacity-70'>ⓘ</span>
        </Tooltip>
      </div>
      {/* CONVERTER */}
      <WidgetConverter helperName='Placement'>
        <div className='relative'>
          {/* INPUT FOR INTEGER VALUES */}
          {(unit === 'px' || unit === 'rem') && (
            <div className='relative'>
              <input
                type='number'
                name='placement'
                step={unit === 'px' ? 1 : unit === 'rem' ? 0.125 : 0.1}
                min={0}
                max={unit === 'px' ? 384 : unit === 'rem' ? 24 : 0}
                value={value || 0}
                onChange={(e) => setValue(parseInt(e.target.value))}
                className='p-4 text-indigo-700 rounded-md appearance-none w-44 bg-stone-100 dark:bg-slate-700 dark:text-indigo-300 ring-1 ring-stone-600/10 dark:ring-stone-100/10'
              />
              <span className='absolute top-0 flex items-center w-10 h-full text-indigo-700 pointer-events-none right-12 dark:text-indigo-300'>
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
          )}
          {/* INPUT FOR FRACTION/PERCENTAGE VALUES */}
          {unit === 'percent' && (
            <div className='relative'>
              <input
                className='p-4 text-indigo-700 rounded-md cursor-not-allowed w-44 bg-stone-100 dark:bg-slate-700 dark:text-indigo-300 ring-1 ring-stone-600/10 dark:ring-stone-100/10'
                type='text'
                name='placement'
                step='1'
                min='0'
                readOnly
                max={
                  placements.filter((item) => item.type === 'fraction').length -
                  1
                }
                value={placements[value].percent || 0}
              />
              <span className='absolute top-0 flex items-center w-10 h-full text-indigo-700 pointer-events-none right-10 dark:text-indigo-300'>
                %
              </span>
              <input
                className='absolute left-0 w-full placement-range -bottom-4'
                type='range'
                step={1}
                min={0}
                max={
                  placements.filter((item) => item.type === 'fraction').length -
                  1
                }
                defaultValue={0}
                onChange={(e) => {
                  setValue(placements.length - 1 - parseInt(e.target.value))
                }}
              />
            </div>
          )}
          <button
            className='absolute h-full -translate-y-1/2 right-1 w-14 top-1/2 hover:text-indigo-600 dark:hover:text-indigo-300'
            onClick={(e) => {
              e.preventDefault()
              if (unit !== 'percent') {
                setUnit('percent')
                setValue(placements.length - 1)
              } else {
                reset()
              }
            }}>
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

              <Tooltip
                message={
                  unit == 'percent' ? 'Switch to px' : 'Switch to percentage'
                }>
                <span>{unit == 'percent' ? 'px' : '%'}</span>
              </Tooltip>
            </div>
          </button>
        </div>

        <button
          className={`${
            unit === 'percent' ? 'invisible' : ''
          } h-full mt-2 w-28 hover:text-indigo-600 dark:hover:text-indigo-300`}
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
        <CopyToClipboard valueToCopy={currentPlacement}>
          <span className='font-semibold'>{currentPlacement}</span>
        </CopyToClipboard>
        {unit !== 'percent' ? (
          <div className='flex gap-4'>
            <CopyToClipboard valueToCopy={convertedPlacement.rem.toString()}>
              <span>{`${convertedPlacement.rem}rem`}</span>
            </CopyToClipboard>
            <CopyToClipboard valueToCopy={convertedPlacement.px.toString()}>
              <span>{`${convertedPlacement.px}px`}</span>
            </CopyToClipboard>
          </div>
        ) : (
          <div className='flex gap-4'>
            <CopyToClipboard valueToCopy={placements[value].percent.toString()}>
              <span>{`${convertedPlacement.percent}%`}</span>
            </CopyToClipboard>
          </div>
        )}
      </WidgetResult>
    </WidgetWrapper>
  )
}

export default PlacementHelper
