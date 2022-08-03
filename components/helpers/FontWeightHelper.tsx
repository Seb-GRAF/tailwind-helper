import React, { useState, useEffect } from 'react'
import { CopyToClipboard, OutOfBounds, StyledRange, StyledInput } from '..'
import { WidgetWrapper, WidgetConverter, WidgetResult } from '..'

interface Props {
  setFontWeight: (value: string) => void
}

interface FontWeight {
  class: string
  weight: number
}

const fontWeight: FontWeight[] = [
  { class: 'font-thin', weight: 100 },
  { class: 'font-extralight', weight: 200 },
  { class: 'font-light', weight: 300 },
  { class: 'font-normal', weight: 400 },
  { class: 'font-medium', weight: 500 },
  { class: 'font-semibold', weight: 600 },
  { class: 'font-bold', weight: 700 },
  { class: 'font-extrabold', weight: 800 },
  { class: 'font-black', weight: 900 },
]

const FontWeightHelper = ({ setFontWeight }: Props): JSX.Element => {
  const [value, setValue] = useState(400)
  const [outOfBounds, setOutOfBounds] = useState<'max' | 'min' | 'def' | null>(
    null
  )
  const [convertedFontWeight, setConvertedFontWeight] =
    useState<FontWeight | null>(fontWeight[4])

  // returns closes size matching with fontWeight array
  const getClosestFontWeight = (
    fontWeight: FontWeight[],
    value: number
  ): FontWeight => {
    let closest = fontWeight.reduce(
      (prev: FontWeight, curr: FontWeight): FontWeight => {
        return Math.abs(curr.weight - value) < Math.abs(prev.weight - value)
          ? curr
          : prev
      }
    )
    return closest
  }

  const reset = () => {
    if (value === 400) return
    setValue(400)
    setOutOfBounds(null)
    setConvertedFontWeight(fontWeight[4])
  }

  // updates converted size on value and unit change
  useEffect(() => {
    const closestFontWeight = getClosestFontWeight(fontWeight, value)
    if (closestFontWeight) {
      setConvertedFontWeight(closestFontWeight)
    }
  }, [value])

  // check if converted font weight is at upper/lower limit
  useEffect(() => {
    if (convertedFontWeight?.class === 'font-thin') {
      setOutOfBounds('min')
    } else if (convertedFontWeight?.class === 'font-black') {
      setOutOfBounds('max')
    } else if (convertedFontWeight?.class === 'font-normal') {
      setOutOfBounds('def')
    } else {
      setOutOfBounds(null)
    }

    // sets parent font weight to converted size
    setFontWeight(convertedFontWeight!.class)
  }, [convertedFontWeight, setFontWeight])

  return (
    <WidgetWrapper>
      <button
        className='absolute text-sm transition-all top-2 right-3 text-slate-400 dark:hover:text-indigo-300 hover:text-indigo-700'
        onClick={reset}>
        Reset
      </button>
      <WidgetConverter helperName='Font Weight'>
        <div className='relative w-fit'>
          <StyledInput
            name='fontWeight'
            type='number'
            step={100}
            min={100}
            max={900}
            value={value || 400}
            setValue={setValue}
            hasUnit={false}
          />
          <StyledRange
            step={100}
            min={100}
            max={900}
            value={value || 400}
            setValue={setValue}
          />
        </div>
      </WidgetConverter>
      <WidgetResult>
        <CopyToClipboard valueToCopy={convertedFontWeight!.class.toString()}>
          <span className='font-semibold'>{`" ${
            convertedFontWeight!.class
          } "`}</span>
        </CopyToClipboard>
        <CopyToClipboard valueToCopy={convertedFontWeight!.weight.toString()}>
          <span>{`${convertedFontWeight!.weight}`}</span>
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

export default FontWeightHelper
