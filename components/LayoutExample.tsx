import CopyToClipboard from './CopyToClipboard'
import { useState, useEffect } from 'react'
import { Tooltip } from './'

interface Props {
  margin: string
  padding: string
  borderRadius: string
}

const LayoutExample = ({
  margin,
  padding,
  borderRadius,
}: Props): JSX.Element => {
  const [toPrint, setToPrint] = useState('')

  useEffect(() => {
    setToPrint(margin + ' ' + padding + ' ' + borderRadius)
  }, [margin, padding, borderRadius])

  return (
    <div className='bg-white shadow-md dark:bg-slate-800 dark:hover:bg-slate-800/90 rounded-xl dark:shadow-inset-sm dark:shadow-white/5 shadow-slate-200 ring-1 ring-inset dark:ring-slate-700/50 ring-slate-300/30'>
      <div className={`mb-2 flex items-center justify-center w-full min-h-96`}>
        <div
          className={`padding ${margin} ${padding} ${borderRadius} flex justify-center item-center transition-[margin, padding] duration-75 bg-indigo-200 dark:bg-indigo-700 w-full shadow-lg h-auto`}>
          <div
            className={`w-full h-24 bg-indigo-200 ${borderRadius} dark:bg-indigo-500`}></div>
        </div>
      </div>
      <div className='flex items-center justify-between mx-3 mb-2'>
        <CopyToClipboard valueToCopy={toPrint}>
          <span className='flex gap-2 font-semibold'>
            <span>{margin}</span>
            <span>{padding}</span>
            <span>{borderRadius}</span>
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
        <Tooltip
          message='Example of your settings'
          color='bg-slate-900 dark:bg-slate-200 dark:text-slate-900'
          side='left'>
          <span className='cursor-help opacity-70'>ⓘ</span>
        </Tooltip>
      </div>
    </div>
  )
}

export default LayoutExample
