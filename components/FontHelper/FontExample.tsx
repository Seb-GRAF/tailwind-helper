import CopyToClipboard from '../CopyToClipboard'
import { useState, useEffect } from 'react'
import { Tooltip, PinButton, FavoriteInput } from '..'

interface Props {
  fontFamily: string
  fontSize: string
  fontWeight: string
  letterSpacing: string
  textDecoration: string
  decorationStyle: string
  decorationThickness: string
  textColor: string
}

const FontSizeExample = ({
  fontFamily,
  fontSize,
  fontWeight,
  letterSpacing,
  textDecoration,
  decorationStyle,
  decorationThickness,
  textColor,
}: Props): JSX.Element => {
  const [pinned, setPinned] = useState(false)
  const [toPrint, setToPrint] = useState('')

  // removes default styles from value to print
  useEffect(() => {
    setToPrint(
      `${fontFamily !== 'font-sans' ? ` ${fontFamily}` : ''}${
        fontSize !== 'font-normal' ? ` ${fontSize}` : ''
      }${fontWeight !== 'font-normal' ? ` ${fontWeight}` : ''}${
        letterSpacing !== 'tracking-normal' ? ` ${letterSpacing}` : ''
      }${textDecoration !== 'no-underline' ? ` ${textDecoration}` : ''}${
        decorationStyle !== 'decoration-solid' ? ` ${decorationStyle}` : ''
      }${
        decorationThickness !== 'decoration-auto'
          ? ` ${decorationThickness}`
          : ''
      } text-${textColor}`
    )
  }, [
    fontSize,
    fontWeight,
    letterSpacing,
    textColor,
    fontFamily,
    textDecoration,
    decorationStyle,
    decorationThickness,
  ])

  return (
    <div
      className={`${
        pinned
          ? 'sticky bottom-4 ring-4 dark:ring-slate-700 ring-gray-300'
          : 'relative dark:ring-1 dark:ring-inset dark:ring-slate-700/50'
      } z-20 bg-white shadow-md dark:bg-slate-800 rounded-xl dark:shadow-inset-outset-md shadow-gray-400/30`}>
      {/* PINNED */}
      <PinButton pinned={pinned} setPinned={setPinned} />
      {/* FAVORITE  */}
      <FavoriteInput toPrint={toPrint} category='fonts' defaultName='Font' />

      {/* TEXT INPUT */}
      <input
        id='text-example'
        type='text'
        defaultValue='Lorem Ipsum'
        autoCorrect='off'
        placeholder='Enter your text'
        className={`${fontFamily} text-${textColor} placeholder:text-${textColor} ${fontSize} ${fontWeight} ${letterSpacing} ${textDecoration} ${decorationStyle} ${decorationThickness} mt-8 px-6 bg-transparent w-full leading-normal`}
      />
      {/* TAILWIND CLASSES */}
      <div className='flex items-center justify-between mx-3 my-2'>
        <CopyToClipboard valueToCopy={toPrint}>
          <span className='flex flex-wrap gap-2 font-semibold whitespace-nowrap'>
            {fontFamily !== 'font-sans' && <span>{fontFamily}</span>}
            {fontSize !== 'text-base' && <span>{fontSize}</span>}
            {fontWeight !== 'font-normal' && <span>{fontWeight}</span>}
            {textDecoration !== 'no-underline' && <span>{textDecoration}</span>}
            {decorationStyle !== 'decoration-solid' && (
              <span>{decorationStyle}</span>
            )}
            {decorationThickness !== 'decoration-auto' && (
              <span>{decorationThickness}</span>
            )}
            {letterSpacing !== 'tracking-normal' && (
              <span>{letterSpacing}</span>
            )}
            <span className='flex gap-2'>
              text-{textColor}
              <svg
                width='24'
                height='24'
                fill='none'
                stroke='currentColor'
                strokeWidth='1.5'>
                <path d='M8 16c0 1.886 0 2.828.586 3.414C9.172 20 10.114 20 12 20h4c1.886 0 2.828 0 3.414-.586C20 18.828 20 17.886 20 16v-4c0-1.886 0-2.828-.586-3.414C18.828 8 17.886 8 16 8m-8 8h4c1.886 0 2.828 0 3.414-.586C16 14.828 16 13.886 16 12V8m-8 8c-1.886 0-2.828 0-3.414-.586C4 14.828 4 13.886 4 12V8c0-1.886 0-2.828.586-3.414C5.172 4 6.114 4 8 4h4c1.886 0 2.828 0 3.414.586C16 5.172 16 6.114 16 8'></path>
              </svg>
            </span>
          </span>
        </CopyToClipboard>
        <div className='self-end'>
          <Tooltip
            message='Example of your settings'
            color='bg-slate-900 dark:bg-slate-200 dark:text-slate-900'
            side='left'>
            <span className='cursor-help opacity-70'>ⓘ</span>
          </Tooltip>
        </div>
      </div>
    </div>
  )
}

export default FontSizeExample
