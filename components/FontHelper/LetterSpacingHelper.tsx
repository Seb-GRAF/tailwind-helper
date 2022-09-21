import React, { useState, useEffect } from 'react'
import { CopyToClipboard, OutOfBounds, StyledRange, StyledInput } from '..'
import { WidgetWrapper, WidgetConverter, WidgetResult } from '..'
import { letterSpacings } from '../../utils/tailwindClasses'
import { getClosestItem } from '../../utils/getClosestItem'

interface Props {
  setLetterSpacing: (value: string) => void
}

const LetterSpacingHelper = ({ setLetterSpacing }: Props): JSX.Element => {
  const [value, setValue] = useState(0)
  const [outOfBounds, setOutOfBounds] = useState<'max' | 'min' | 'def' | null>(
    null
  )
  const [spacing, setSpacing] = useState(letterSpacings[3])

  const reset = () => {
    if (value === 0) return
    setValue(0)
    setOutOfBounds(null)
    setSpacing({ class: 'tracking-normal', spacing: 0 })
  }

  // updates converted spacing on value change
  useEffect(() => {
    setSpacing(getClosestItem(letterSpacings, value, 'spacing'))
  }, [value])

  // check if converted letter spacing is at upper/lower limit
  useEffect(() => {
    if (spacing?.class === 'tracking-tighter') {
      setOutOfBounds('min')
    } else if (spacing?.class === 'tracking-widest') {
      setOutOfBounds('max')
    } else if (spacing?.class === 'tracking-normal') {
      setOutOfBounds('def')
    } else {
      setOutOfBounds(null)
    }

    // sets parent letter spacing to converted size
    setLetterSpacing(spacing!.class)
  }, [spacing, setLetterSpacing])

  return (
    <WidgetWrapper>
      <button
        className='absolute text-sm transition-all top-2 right-3 text-slate-400 dark:hover:text-indigo-300 hover:text-indigo-700'
        onClick={reset}>
        Reset
      </button>
      <WidgetConverter helperName='Letter Spacing'>
        <div className='relative w-full'>
          <StyledInput
            step={0.025}
            name='Letter spacing'
            min={-0.05}
            max={0.1}
            value={value}
            setValue={setValue}
            hasUnit={true}
          />
          <span className='absolute top-0 right-0 flex items-center w-10 h-full text-indigo-700 pointer-events-none dark:text-indigo-300'>
            em
          </span>
        </div>
        <StyledRange
          step={0.025}
          min={-0.05}
          max={0.1}
          value={value}
          setValue={setValue}
        />
      </WidgetConverter>
      <WidgetResult>
        <CopyToClipboard valueToCopy={spacing.class.toString()}>
          <span className='font-semibold'>{`${spacing.class}`}</span>
        </CopyToClipboard>
        <CopyToClipboard valueToCopy={spacing.spacing.toString()}>
          <span>{`${spacing.spacing}`}</span>
        </CopyToClipboard>

        {outOfBounds && (
          <div className='absolute bottom-0 left-0 w-full text-center'>
            <OutOfBounds bounds={outOfBounds} />
          </div>
        )}
      </WidgetResult>
    </WidgetWrapper>
  )
}

export default LetterSpacingHelper
