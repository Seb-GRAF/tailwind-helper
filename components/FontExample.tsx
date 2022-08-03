import CopyToClipboard from './CopyToClipboard'
import { useState, useEffect } from 'react'

interface Props {
  fontSize: string
  fontWeight: string
  letterSpacing: string
  textColor: string
}

const FontSizeExample = ({
  fontSize,
  fontWeight,
  letterSpacing,
  textColor,
}: Props): JSX.Element => {
  const [toPrint, setToPrint] = useState('')

  useEffect(() => {
    let valueToPrint = ''

    if (fontSize !== 'text-base') valueToPrint = valueToPrint + ' ' + fontSize
    if (fontWeight !== 'font-normal')
      valueToPrint = valueToPrint + ' ' + fontWeight
    if (letterSpacing !== 'tracking-normal')
      valueToPrint = valueToPrint + ' ' + letterSpacing
    if (textColor !== 'text-slate-200')
      valueToPrint = valueToPrint + ' ' + textColor

    setToPrint(valueToPrint)
  }, [fontSize, fontWeight, letterSpacing, textColor])

  return (
    <div className='bg-white shadow-sm dark:bg-slate-800 dark:hover:bg-slate-800/90 rounded-xl dark:shadow-inset-sm dark:shadow-white/5'>
      <input
        id='text-example'
        type='text'
        defaultValue='Sample text'
        placeholder='Enter your text'
        className={`text-${textColor} placeholder:text-${textColor} ${fontSize} ${fontWeight} ${letterSpacing} max-h-34 p-8 pb-6 overflow-x-auto w-full bg-transparent `}
      />
      <CopyToClipboard valueToCopy={toPrint}>
        <span className='flex gap-2 mb-3 ml-4 font-semibold'>
          {fontSize !== 'text-base' && <span>{fontSize}</span>}
          {fontWeight !== 'font-normal' && <span>{fontWeight}</span>}
          {letterSpacing !== 'tracking-normal' && <span>{letterSpacing}</span>}
          <span>text-{textColor}</span>
          <svg
            width='24'
            height='24'
            fill='none'
            stroke='currentColor'
            strokeWidth='1.5'>
            <path d='M8 16c0 1.886 0 2.828.586 3.414C9.172 20 10.114 20 12 20h4c1.886 0 2.828 0 3.414-.586C20 18.828 20 17.886 20 16v-4c0-1.886 0-2.828-.586-3.414C18.828 8 17.886 8 16 8m-8 8h4c1.886 0 2.828 0 3.414-.586C16 14.828 16 13.886 16 12V8m-8 8c-1.886 0-2.828 0-3.414-.586C4 14.828 4 13.886 4 12V8c0-1.886 0-2.828.586-3.414C5.172 4 6.114 4 8 4h4c1.886 0 2.828 0 3.414.586C16 5.172 16 6.114 16 8'></path>
          </svg>
        </span>
      </CopyToClipboard>
    </div>
  )
}

export default FontSizeExample
