import React, { useState, useEffect } from 'react'
import { CopyToClipboard, StyledRange, StyledInput, Tooltip } from '..'
import { WidgetWrapper, WidgetConverter, WidgetResult } from '..'
import { gaps } from '../../utils/tailwindClasses'
import { unitConverter } from '../../utils/unitConverter'
import { getClosestItem, TailwindObjectKey } from '../../utils/getClosestItem'

interface Props {
  setGap: (value: string) => void
}

const GapHelper = ({ setGap }: Props): JSX.Element => {
  const [value, setValue] = useState(gaps[4].px)
  const [unit, setUnit] = useState<TailwindObjectKey>('px')
  const [convertedGap, setConvertedGap] = useState(gaps[4])

  const reset = () => {
    setValue(gaps[4].px)
    setUnit('px')
    setConvertedGap(gaps[4])
  }

  // updates converted size on value and unit change
  useEffect(() => {
    setConvertedGap(getClosestItem(gaps, value, unit))
  }, [value, unit])

  useEffect(() => {
    // sets parent gap to converted size
    setGap(`gap-${convertedGap!.class}`)
  }, [convertedGap, setGap])

  return (
    <WidgetWrapper>
      <button
        className='absolute text-sm transition-all top-2 right-3 text-slate-400 dark:hover:text-indigo-300 hover:text-indigo-700'
        onClick={reset}>
        Reset
      </button>
      <WidgetConverter helperName='Gap'>
        <div className='relative w-full'>
          <StyledInput
            type='number'
            name='Gap'
            step={unit === 'px' ? 1 : unit === 'rem' ? 0.125 : 0.1}
            min={0}
            max={unit === 'px' ? 384 : unit === 'rem' ? 24 : 0}
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
        <CopyToClipboard valueToCopy={`gap-${convertedGap.class}`}>
          <span className='font-semibold'>{`gap-${convertedGap.class}`}</span>
        </CopyToClipboard>
        <div className='flex gap-4'>
          <CopyToClipboard valueToCopy={convertedGap.rem.toString()}>
            <span>{`${convertedGap.rem}rem`}</span>
          </CopyToClipboard>
          <CopyToClipboard valueToCopy={convertedGap.px.toString()}>
            <span>{`${convertedGap.px}px`}</span>
          </CopyToClipboard>
        </div>
      </WidgetResult>
    </WidgetWrapper>
  )
}

export default GapHelper
