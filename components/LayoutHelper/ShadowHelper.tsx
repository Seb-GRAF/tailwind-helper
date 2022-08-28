import React, { useState, useEffect } from 'react'
import { CopyToClipboard, StyledRange, FavoriteButton } from '..'
import { WidgetWrapper, WidgetConverter, WidgetResult } from '..'
import { shadows, colors, Color, opacities } from '../../utils/tailwindClasses'

interface Props {
  setShadow: (value: string) => void
}

const ShadowHelper = ({ setShadow }: Props): JSX.Element => {
  const [shadowIndex, setShadowIndex] = useState(5)
  const [currentShadow, setCurrentShadow] = useState(shadows[5])

  const [opacityIndex, setOpacityIndex] = useState(2)
  const [currentOpacity, setCurrentOpacity] = useState(opacities[1])

  const [value, setValue] = useState('#000000')
  const [closestColor, setClosestColor] = useState<Color>({
    class: 'black',
    hex: '#000000',
  })

  const reset = () => {
    const input = document.getElementById(
      'shadow-hex-value'
    ) as HTMLInputElement
    input.value = '#000000'
    setValue('#000000')
    setClosestColor({
      class: 'black',
      hex: '#000000',
    })
    setCurrentShadow(shadows[5])
    setShadowIndex(5)

    setCurrentOpacity(opacities[2])
    setOpacityIndex(2)
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

  const isTooDark = (color: string): boolean => {
    const hex = color.substring(1)
    const rgb = parseInt(hex, 16)

    const red = (rgb >> 16) & 0xff
    const green = (rgb >> 8) & 0xff
    const blue = (rgb >> 0) & 0xff

    const brightness = 0.2126 * red + 0.7152 * green + 0.0722 * blue

    return brightness < 120
  }

  useEffect(() => {
    setClosestColor(nearestColor(value))
  }, [value])

  useEffect(() => {
    setCurrentShadow(shadows[shadowIndex])
  }, [shadowIndex])

  useEffect(() => {
    setCurrentOpacity(opacities[opacityIndex])
  }, [opacityIndex])

  useEffect(() => {
    // sets parent font size to converted size
    setShadow(
      `${currentShadow.class} ${
        closestColor.class !== 'black' || currentOpacity.class !== '10'
          ? `shadow-${closestColor.class}${
              currentOpacity.class !== '100' ? `/${currentOpacity.class}` : ''
            }`
          : ''
      }`
    )
  }, [setShadow, currentShadow, closestColor.class, currentOpacity.class])

  return (
    <WidgetWrapper>
      <button
        className='absolute text-sm transition-all top-2 right-3 text-slate-400 dark:hover:text-indigo-300 hover:text-indigo-700'
        onClick={reset}>
        Reset
      </button>

      {/* CONVERTER */}
      <WidgetConverter helperName='Box Shadow'>
        <div className='relative'>
          {/* SHADOW SLIDER */}
          <div className='relative -mt-2 -top-2'>
            <StyledRange
              step={1}
              min={0}
              max={shadows.length - 1}
              value={shadowIndex || 0}
              setValue={setShadowIndex}
            />
          </div>

          {/* COLOR  */}
          <div className='flex flex-col gap-2'>
            <div className='relative overflow-hidden rounded-md h-14 w-44'>
              <label className='w-full'>
                <input
                  type='color'
                  name='color'
                  className='absolute w-[200%] h-[200%] -m-4 bg-indigo-300 cursor-pointer top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 ring-1 ring-gray-600/10 dark:ring-gray-100/10'
                  value={value}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    if (
                      e.target.value.length === 7 &&
                      e.target.value[0] === '#'
                    ) {
                      setValue(e.target.value)
                    }
                  }}
                />
                <span className='sr-only'>Color picker</span>
              </label>

              {/* ADD/REMOVE FAVORITE */}
              <FavoriteButton
                favoriteClass={closestColor.class}
                category='colors'
                color={
                  isTooDark(closestColor.hex)
                    ? 'text-white/80'
                    : 'text-black/80'
                }
              />
            </div>

            {/* HEX INPUT AND OPACITY SLIDER */}
            <div className='relative'>
              <label className='w-full'>
                <input
                  type='text'
                  defaultValue={value}
                  id='shadow-hex-value'
                  placeholder='#000000'
                  maxLength={7}
                  className='p-1 text-center rounded-md pr-14 w-44 bg-slate-100 dark:bg-slate-700 ring-1 ring-gray-600/10 dark:ring-gray-100/10'
                  onChange={(e) => {
                    if (
                      e.target.value.length === 7 &&
                      e.target.value[0] === '#'
                    ) {
                      setValue(e.target.value)
                      setClosestColor(nearestColor(e.target.value))
                    }
                  }}
                />
                <span className='sr-only'>Hex value</span>
              </label>
              <span className='absolute text-indigo-700 -translate-y-1/2 dark:text-indigo-300 top-1/2 right-7'>
                {opacities[opacityIndex].class}%
              </span>
            </div>
            <div className='relative flex justify-center mt-1'>
              <StyledRange
                step={1}
                min={0}
                max={opacities.length - 1}
                value={opacityIndex || 0}
                setValue={setOpacityIndex}
              />
            </div>
          </div>
        </div>
      </WidgetConverter>
      {/* RESULT */}
      <WidgetResult>
        <CopyToClipboard
          valueToCopy={`${currentShadow.class} ${
            closestColor.class !== 'black' || currentOpacity.class !== '10'
              ? `shadow-${closestColor.class}${
                  currentOpacity.class !== '100'
                    ? `/${currentOpacity.class}`
                    : ''
                }`
              : ''
          }`}>
          <span className='font-semibold'>{`${currentShadow.class} ${
            closestColor.class !== 'black' || currentOpacity.class !== '10'
              ? `shadow-${closestColor.class}${
                  currentOpacity.class !== '100'
                    ? `/${currentOpacity.class}`
                    : ''
                }`
              : ''
          }`}</span>
        </CopyToClipboard>
      </WidgetResult>
    </WidgetWrapper>
  )
}

export default ShadowHelper
