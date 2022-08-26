import React, { useState, useEffect } from 'react'
import { CopyToClipboard, StyledRange, StyledInput, Tooltip } from '..'
import {
  WidgetWrapper,
  WidgetConverter,
  WidgetResult,
  OrientationButton,
} from '..'

type OrientationKey = 'top' | 'right' | 'bottom' | 'left'

interface Props {
  setObjectPosition: (value: string) => void
}

const ObjectPosition = ({ setObjectPosition }: Props): JSX.Element => {
  const [currentObjectPosition, setCurrentObjectPosition] =
    useState('object-center')
  const [orientation, setOrientation] = useState({
    left: false,
    right: false,
    top: false,
    bottom: false,
  })
  const [orientationOutput, setOrientationOutput] = useState('m')

  const toggleOrientation = (value: OrientationKey): void => {
    setOrientation({ ...orientation, [value]: !orientation[value] })
  }

  const reset = () => {
    setCurrentObjectPosition('object-center')
    setOrientation({
      left: false,
      right: false,
      top: false,
      bottom: false,
    })
  }

  // orientation picker
  useEffect(() => {
    const { left, right, top, bottom } = orientation

    switch (true) {
      case left === true && right === true && top === true && bottom === true:
        setOrientationOutput('center')
        break
      // top
      case left === false &&
        right === false &&
        top === true &&
        bottom === false:
        setOrientationOutput('top')
        break
      // bottom
      case left === false &&
        right === false &&
        top === false &&
        bottom === true:
        setOrientationOutput('bottom')
        break
      // left
      case left === true &&
        right === false &&
        top === false &&
        bottom === false:
        setOrientationOutput('left')
        break
      // left bottom
      case left === true && right === false && top === false && bottom === true:
        setOrientationOutput('left-bottom')
        break
      // left top
      case left === true && right === false && top === true && bottom === false:
        setOrientationOutput('left-top')
        break
      // right
      case left === false &&
        right === true &&
        top === false &&
        bottom === false:
        setOrientationOutput('right')
        break
      // right bottom
      case left === false && right === true && top === false && bottom === true:
        setOrientationOutput('right-bottom')
        break
      // right top
      case left === false && right === true && top === true && bottom === false:
        setOrientationOutput('right-top')
        break

      // resets if left and right or top and bottom selected together
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
        setOrientationOutput('center')
        break
    }
  }, [orientation, orientationOutput])

  useEffect(() => {
    // sets parent font size to converted size
    setCurrentObjectPosition(`object-${orientationOutput}`)
    setObjectPosition(`object-${orientationOutput}`)
  }, [orientationOutput, setObjectPosition])

  return (
    <WidgetWrapper>
      <button
        className='absolute text-sm transition-all top-2 right-3 text-slate-400 dark:hover:text-indigo-300 hover:text-indigo-700'
        onClick={reset}>
        Reset
      </button>
      {/* ORIENTATION PICKER */}
      <div className='pointer-events-none absolute top-2 left-2 w-[calc(100%-1rem)] h-[calc(100%-1rem)] text-xs'>
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
          message='Click on the side buttons to change the position of the object.'
          color='bg-slate-900 dark:bg-slate-200 dark:text-slate-900'
          side='left'>
          <span className='cursor-help opacity-70'>ⓘ</span>
        </Tooltip>
      </div>

      {/* CONVERTER */}
      <WidgetConverter helperName='Object position'>
        <div className='relative flex w-full gap-2'></div>
      </WidgetConverter>

      {/* RESULT */}
      <WidgetResult>
        <CopyToClipboard valueToCopy={currentObjectPosition}>
          <span className='font-semibold'>{currentObjectPosition}</span>
        </CopyToClipboard>
      </WidgetResult>
    </WidgetWrapper>
  )
}

export default ObjectPosition
