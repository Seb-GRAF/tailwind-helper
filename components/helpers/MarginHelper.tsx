import React, { useState, useEffect } from 'react'
import { CopyToClipboard, StyledRange, StyledInput, Tooltip } from '..'
import { WidgetWrapper, WidgetConverter, WidgetResult } from '..'
import { margins } from '../../utils/tailwindClasses';
import { unitConverter } from '../../utils/unitConverter';
import { getClosestItem } from '../../utils/getClosestItem';

type OrientationKey = 'top' | 'right' | 'bottom' | 'left'

interface Props {
  setMargin: (value: string) => void
}

const MarginHelper = ({ setMargin }: Props): JSX.Element => {
  const [value, setValue] = useState(margins[8].px)
  const [unit, setUnit] = useState('px')
  const [orientation, setOrientation] = useState({
    left: false,
    right: false,
    top: false,
    bottom: false,
  })
  const [orientationOutput, setOrientationOutput] = useState('m')
  const [convertedMargin, setConvertedMargin] = useState(margins[8])

  const toggleOrientation = (value: OrientationKey): void => {
    setOrientation({ ...orientation, [value]: !orientation[value] })
  }

  const reset = () => {
    setValue(margins[8].px)
    setUnit('px')
    setConvertedMargin(margins[8])
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
    setConvertedMargin(getClosestItem(margins, value, unit))
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
          ${orientation.top === true
              ? 'bg-indigo-300 dark:bg-indigo-600 text-slate-700 dark:text-slate-300'
              : 'bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:text-slate-300 text-slate-700'
            }
          `}>
          Top
        </button>
        <button
          onClick={() => toggleOrientation('left')}
          className={`-rotate-90 absolute transition-all -left-5 px-4 -translate-y-1/2 rounded-md pointer-events-auto top-1/2 text-slate-400 ${orientation.left === true
            ? 'bg-indigo-300 dark:bg-indigo-600 text-slate-700 dark:text-slate-300'
            : 'bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:text-slate-300 text-slate-700'
            }
          `}>
          <span className='w-full text-center'>Left</span>
        </button>
        <button
          onClick={() => toggleOrientation('bottom')}
          className={`absolute transition-all bottom-0 px-4 -translate-x-1/2 rounded-md pointer-events-auto left-1/2 text-slate-400
          ${orientation.bottom === true
              ? 'bg-indigo-300 dark:bg-indigo-600 text-slate-700 dark:text-slate-300'
              : 'bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:text-slate-300 text-slate-700'
            }
          `}>
          Bottom
        </button>
        <button
          onClick={() => toggleOrientation('right')}
          className={`absolute transition-all -right-6 px-4 -translate-y-1/2 rotate-90 rounded-md pointer-events-auto top-1/2 text-slate-400
          ${orientation.right === true
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
          message='Click on the side buttons to change the orientation of the margin. (maximum two at a time)'
          color='bg-slate-900 dark:bg-slate-200 dark:text-slate-900'
          side='left'>
          <span className='cursor-help opacity-70'>ⓘ</span>
        </Tooltip>
      </div>
      {/* CONVERTER */}
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