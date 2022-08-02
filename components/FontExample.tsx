import CopyToClipboard from './CopyToClipboard'
import { useEffect } from 'react'

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
  return (
    <div className='p-8 pb-4 pl-4 bg-slate-800 rounded-xl shadow-inset-sm shadow-white/5'>
      <input
        id='text-example'
        type='text'
        defaultValue='Sample text'
        placeholder='Enter your text'
        className={`text-${textColor} placeholder:text-${textColor} ${fontSize} ${fontWeight} ${letterSpacing} max-h-34 mb-6 ml-4 overflow-x-auto w-full bg-transparent `}
      />
      <CopyToClipboard
        valueToCopy={`${fontSize !== 'text-base' ? fontSize : ''} ${
          fontWeight !== 'font-normal' ? fontWeight : ''
        } ${
          letterSpacing !== 'tracking-normal' ? letterSpacing : ''
        } text-${textColor}`}>
        <span className='flex gap-2'>
          {fontSize !== 'text-base' && <span>fontSize</span>}
          {fontWeight !== 'font-normal' && <span>fontWeight</span>}
          {letterSpacing !== 'tracking-normal' && <span>letterSpacing</span>}
          <span>text-{textColor}</span>
        </span>
      </CopyToClipboard>
    </div>
  )
}

export default FontSizeExample
