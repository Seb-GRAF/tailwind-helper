import React, { useState, useEffect } from 'react'
import OutOfBounds from '../OutOfBounds'
import CopyToClipboard from '../CopyToClipboard'

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
    <section className='w-full'>
      {/* CONVERTER */}
      <form className='flex items-center w-full gap-4'>
        <label htmlFor='fontSize' className='flex items-center gap-4'>
          Letter Spacing
          {/* SIZE INPUT*/}
          <div className='relative'>
            <input
              type='number'
              step='0.025'
              name='fontSize'
              min='-0.05'
              max='0.1'
              className='p-4 pr-12 w-36'
              value={value || 0}
              onChange={(e) => setValue(parseFloat(e.target.value))}
            />
            <span className='absolute top-0 right-0 flex items-center w-10 h-full pointer-events-none'>
              em
            </span>
            <input
              type='range'
              step='0.025'
              min='-0.05'
              max='0.1'
              className='absolute left-0 w-full -bottom-1'
              value={value || 0}
              onChange={(e) => setValue(parseFloat(e.target.value))}
            />
          </div>
        </label>
      </form>
      {/* RESULT */}
      <div className='inline-block w-full h-full'>
        {convertedLetterSpacing && (
          <div className='flex flex-col gap-4'>
            <div>
              <p className='flex items-center gap-4'>
                <CopyToClipboard
                  valueToCopy={convertedLetterSpacing!.class.toString()}>
                  <span className='font-semibold'>{`'${
                    convertedLetterSpacing!.class
                  }'`}</span>
                </CopyToClipboard>
                <CopyToClipboard
                  valueToCopy={convertedLetterSpacing!.spacing.toString()}>
                  <span>{`${convertedLetterSpacing!.spacing}`}</span>
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

export default LetterSpacingHelper
