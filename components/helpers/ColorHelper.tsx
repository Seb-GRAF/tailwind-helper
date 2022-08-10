import React, { useState, useEffect } from 'react'
import { CopyToClipboard } from '..'
import { WidgetWrapper, WidgetConverter, WidgetResult } from '..'
import { colors, Color } from '../../utils/tailwindClasses'

interface Props {
  setTextColor?: (value: string) => void
}

const ColorHelper = ({ setTextColor }: Props): JSX.Element => {
  const [value, setValue] = useState('#ec4899')
  const [closestColor, setClosestColor] = useState<Color>({
    class: 'pink-500',
    hex: '#ec4899',
  })

  const reset = () => {
    const input = document.getElementById('hex-value') as HTMLInputElement
    setValue('#ec4899')
    input.value = '#ec4899'
    setClosestColor({
      class: 'pink-500',
      hex: '#ec4899',
    })
  }

  // Converts hex to array of rgb
  const hexToRgb = (hex: string): number[] => {
    return hex
      .slice(1)
      .replace(/^(.)(.)(.)$/gi, '$1$1$2$2$3$3')
      .match(/.{2}/g)
      ?.map((value) => parseInt(value, 16))
  }
  // Distance between 2 colors (in RGB)
  // https://stackoverflow.com/questions/23990802/find-nearest-color-from-a-colors-list
  const distance = (a: number[], b: number[]): number => {
    return Math.sqrt(
      Math.pow(a[0] - b[0], 2) +
      Math.pow(a[1] - b[1], 2) +
      Math.pow(a[2] - b[2], 2)
    )
  }
  const nearestColor = (colorHex: string): any | Color => {
    return colors.reduce(
      (a, b) =>
      (a =
        distance(hexToRgb(colorHex), hexToRgb(b.hex)) < a[0]
          ? [distance(hexToRgb(colorHex), hexToRgb(b.hex)), b]
          : a),
      [Number.POSITIVE_INFINITY, colors[0]]
    )[1]
  }

  useEffect(() => {
    if (setTextColor)
      setTextColor(closestColor.class)
  }, [closestColor, setTextColor])

  return (
    <WidgetWrapper>
      <button
        className='absolute text-sm transition-all top-2 right-3 text-slate-400 dark:hover:text-indigo-300 hover:text-indigo-700'
        onClick={reset}>
        Reset
      </button>
      <WidgetConverter helperName='Color Helper'>
        <div className='flex flex-col gap-2'>
          <div className='relative overflow-hidden rounded-md h-14 w-44'>
            <input
              type='color'
              name='color'
              className='absolute w-[200%] h-[200%] -m-4 bg-indigo-300 cursor-pointer top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'
              value={value}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const input = document.getElementById(
                  'hex-value'
                ) as HTMLInputElement
                input.value = e.target.value
                if (e.target.value.length === 7 && e.target.value[0] === '#') {
                  setValue(e.target.value)
                  setClosestColor(nearestColor(value))
                }
              }}
            />
          </div>
          <input
            type='text'
            defaultValue={value}
            id='hex-value'
            placeholder='#000000'
            maxLength={7}
            className='p-1 text-center rounded-md w-44 bg-slate-100 dark:bg-slate-700'
            onChange={(e) => {
              if (e.target.value.length === 7 && e.target.value[0] === '#') {
                setValue(e.target.value)
                setClosestColor(nearestColor(e.target.value))
              }
            }}
          />
        </div>
      </WidgetConverter>
      <WidgetResult>
        <CopyToClipboard valueToCopy={closestColor.class}>
          <span className='font-semibold'>{`" ${closestColor.class} "`}</span>
        </CopyToClipboard>
        <CopyToClipboard valueToCopy={closestColor.hex}>
          <span>{`${closestColor.hex}`}</span>
        </CopyToClipboard>
      </WidgetResult>
    </WidgetWrapper>
  )
}

export default ColorHelper
