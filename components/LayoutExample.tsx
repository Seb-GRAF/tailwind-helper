import CopyToClipboard from './CopyToClipboard'
import { useState, useEffect } from 'react'

interface Props {
  margin: string
  padding: string
}

const LayoutExample = ({ margin, padding }: Props): JSX.Element => {
  const [toPrint, setToPrint] = useState('')

  useEffect(() => {
    setToPrint(margin + ' ' + padding)
  }, [margin])

  return (
    <div className='overflow-hidden bg-white shadow-sm dark:bg-slate-800 dark:hover:bg-slate-800/90 rounded-xl dark:shadow-inset-sm dark:shadow-white/5'>
      <div
        id='text-example'
        className={`mb-2 flex items-center justify-center w-full min-h-96`}>
        <div
          className={`${margin} ${padding} flex justify-center item-center transition-[margin, padding] duration-75 bg-indigo-200 dark:bg-indigo-700 w-full rounded-xl shadow-lg h-auto`}>
          <div className='w-full h-24 bg-slate-700 rounded-xl dark:bg-slate-300'></div>
        </div>
      </div>
      <CopyToClipboard valueToCopy={toPrint}>
        <span className='flex gap-2 mb-3 ml-4 font-semibold'>
          <span>{margin}</span>
          <span>{padding}</span>
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

export default LayoutExample
