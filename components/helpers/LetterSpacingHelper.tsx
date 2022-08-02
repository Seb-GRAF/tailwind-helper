import React, { useState, useEffect } from 'react'
import { CopyToClipboard, OutOfBounds, StyledRange, StyledInput } from '..'
import { WidgetWrapper, WidgetConverter, WidgetResult } from '..'

interface Props {
  setLetterSpacing: (value: string) => void
}

interface LetterSpacing {
  class: string
  spacing: number
}

const letterSpacing: LetterSpacing[] = [
  { class: 'tracking-tighter', spacing: -0.05 },
  { class: 'tracking-tight', spacing: -0.025 },
  { class: 'tracking-normal', spacing: 0 },
  { class: 'tracking-wide', spacing: 0.025 },
  { class: 'tracking-wider', spacing: 0.05 },
  { class: 'tracking-widest', spacing: 0.1 },
]

const LetterSpacingHelper = ({ setLetterSpacing }: Props): JSX.Element => {
  const [value, setValue] = useState(0)
  const [outOfBounds, setOutOfBounds] = useState<'max' | 'min' | 'def' | null>(
    null
  )
  const [convertedLetterSpacing, setConvertedLetterSpacing] =
    useState<LetterSpacing | null>(letterSpacing[3])

  // returns closes size matching with letterSpacing array
  const getClosestLetterSpacing = (
    letterSpacing: LetterSpacing[],
    value: number
  ): LetterSpacing => {
    let closest = letterSpacing.reduce(
      (prev: LetterSpacing, curr: LetterSpacing): LetterSpacing => {
        return Math.abs(curr.spacing - value) < Math.abs(prev.spacing - value)
          ? curr
          : prev
      }
    )
    return closest
  }

  const reset = () => {
    if (value === 0) return
    setValue(0)
    setOutOfBounds(null)
    setConvertedLetterSpacing(letterSpacing[3])
  }

  // updates converted spacing on value change
  useEffect(() => {
    const closestLetterSpacing = getClosestLetterSpacing(letterSpacing, value)
    if (closestLetterSpacing) {
      setConvertedLetterSpacing(closestLetterSpacing)
    }
  }, [value])

  // check if converted letter spacing is at upper/lower limit
  useEffect(() => {
    if (convertedLetterSpacing?.class === 'tracking-tighter') {
      setOutOfBounds('min')
    } else if (convertedLetterSpacing?.class === 'tracking-widest') {
      setOutOfBounds('max')
    } else if (convertedLetterSpacing?.class === 'tracking-normal') {
      setOutOfBounds('def')
    } else {
      setOutOfBounds(null)
    }

    // sets parent letter spacing to converted size
    setLetterSpacing(convertedLetterSpacing!.class)
  }, [convertedLetterSpacing, setLetterSpacing])

  return (
    <WidgetWrapper>
      <button
        className='absolute text-sm transition-all top-2 right-3 text-slate-400 hover:text-pink-400 '
        onClick={reset}>
        Reset
      </button>
      <WidgetConverter helperName='Letter Spacing'>
        <div className='relative'>
          <StyledInput
            type='number'
            step={0.025}
            name='fontSize'
            min={-0.05}
            max={0.1}
            value={value || 0}
            setValue={setValue}
            hasUnit={true}
          />
          <span className='absolute top-0 right-0 flex items-center w-10 h-full text-pink-400 pointer-events-none'>
            em
          </span>
          <StyledRange
            step={0.025}
            min={-0.05}
            max={0.1}
            value={value || 0}
            setValue={setValue}
          />
        </div>
      </WidgetConverter>
      <WidgetResult>
        <CopyToClipboard valueToCopy={convertedLetterSpacing!.class.toString()}>
          <span className='font-semibold'>{`" ${
            convertedLetterSpacing!.class
          } "`}</span>
        </CopyToClipboard>
        <CopyToClipboard
          valueToCopy={convertedLetterSpacing!.spacing.toString()}>
          <span>{`${convertedLetterSpacing!.spacing}`}</span>
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
