import React, { useState, useEffect } from 'react'
import { CopyToClipboard, OutOfBounds, StyledRange, StyledInput } from '..'
import { WidgetWrapper, WidgetConverter, WidgetResult } from '..'
import { fontWeights } from '../../utils/tailwindClasses'
import { getClosestItem } from '../../utils/getClosestItem'

interface Props {
  setFontWeight: (value: string) => void
}

const FontWeightHelper = ({ setFontWeight }: Props): JSX.Element => {
  const [value, setValue] = useState(400)
  const [outOfBounds, setOutOfBounds] = useState<'max' | 'min' | 'def' | null>(
    null
  )
  const [weight, setWeight] = useState(fontWeights[3])

  const reset = () => {
    if (value === fontWeights[3].weight) return // prevents reset bug

    setValue(fontWeights[3].weight)
    setWeight(fontWeights[3])
    setOutOfBounds(null)
  }

  // updates converted weight on value and unit change
  useEffect(() => {
    setWeight(getClosestItem(fontWeights, value, 'weight'))
  }, [value])

  // check if converted font weight is at upper/lower limit
  useEffect(() => {
    if (weight.class === 'font-thin') {
      setOutOfBounds('min')
    } else if (weight.class === 'font-black') {
      setOutOfBounds('max')
    } else if (weight.class === 'font-normal') {
      setOutOfBounds('def')
    } else {
      setOutOfBounds(null)
    }

    // sets parent font weight to converted size
    setFontWeight(weight!.class)
  }, [weight, setFontWeight])

  return (
    <WidgetWrapper>
      <button
        className='absolute text-sm transition-all top-2 right-3 text-slate-400 dark:hover:text-indigo-300 hover:text-indigo-700'
        onClick={reset}>
        Reset
      </button>
      <WidgetConverter helperName='Font Weight'>
        <StyledInput
          name='Font weight'
          type='number'
          step={100}
          min={100}
          max={900}
          value={value}
          setValue={setValue}
          hasUnit={false}
        />

        <StyledRange
          step={100}
          min={100}
          max={900}
          value={value}
          setValue={setValue}
        />
      </WidgetConverter>
      <WidgetResult>
        <CopyToClipboard valueToCopy={weight.class.toString()}>
          <span className='font-semibold'>{`${weight!.class}`}</span>
        </CopyToClipboard>
        <CopyToClipboard valueToCopy={weight.weight.toString()}>
          <span>{`${weight.weight}`}</span>
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
