import CopyToClipboard from '../CopyToClipboard'
import { useState, useEffect } from 'react'
import { Tooltip, FavoriteInput, PinButton } from '..'

interface Props {
  margin: string
  padding: string
  borderRadius: string
  shadow: string
}

const LayoutExample = ({
  margin,
  padding,
  borderRadius,
  shadow,
}: Props): JSX.Element => {
  const [pinned, setPinned] = useState(false)
  const [toPrint, setToPrint] = useState('')

  useEffect(() => {
    setToPrint(
      `${margin[margin.length - 1] !== '0' ? ` ${margin}` : ''}${
        padding[padding.length - 1] !== '0' ? ` ${padding}` : ''
      }${borderRadius !== 'rounded-none' ? ` ${borderRadius}` : ''}${
        !shadow.includes('shadow-none') ? ` ${shadow}` : ''
      }`
    )
  }, [margin, padding, borderRadius, shadow])

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
      <FavoriteInput
        toPrint={toPrint}
        category='layouts'
        defaultName='Layout'
      />

      {/* EXAMPLE */}
      <div className={`mb-2 flex items-center justify-center w-full min-h-96`}>
        <div
          className={`padding overflow-x-hidden ${borderRadius} ${margin} ${padding} ${shadow} flex justify-center item-center bg-indigo-300 dark:bg-indigo-700 w-full h-auto`}>
          <div
            className={`${borderRadius} w-full h-24 bg-indigo-300 dark:bg-indigo-700`}></div>
        </div>
      </div>

      {/* VALUE TO PRINT */}
      <div className='flex items-end justify-between mx-3 mb-2'>
        {toPrint !== '' ? (
          <CopyToClipboard valueToCopy={toPrint}>
            <div className='flex flex-wrap gap-2 font-semibold'>
              {margin[margin.length - 1] !== '0' && (
                <span className='whitespace-nowrap'>{margin}</span>
              )}
              {padding[padding.length - 1] !== '0' && (
                <span className='whitespace-nowrap'>{padding}</span>
              )}
              {borderRadius !== 'rounded-none' && (
                <span className='whitespace-nowrap'>{borderRadius}</span>
              )}
              {!shadow.includes('shadow-none') && (
                <span className='whitespace-nowrap'>{shadow}</span>
              )}
              <svg
                width='24'
                height='24'
                fill='none'
                stroke='currentColor'
                strokeWidth='1.5'>
                <path d='M8 16c0 1.886 0 2.828.586 3.414C9.172 20 10.114 20 12 20h4c1.886 0 2.828 0 3.414-.586C20 18.828 20 17.886 20 16v-4c0-1.886 0-2.828-.586-3.414C18.828 8 17.886 8 16 8m-8 8h4c1.886 0 2.828 0 3.414-.586C16 14.828 16 13.886 16 12V8m-8 8c-1.886 0-2.828 0-3.414-.586C4 14.828 4 13.886 4 12V8c0-1.886 0-2.828.586-3.414C5.172 4 6.114 4 8 4h4c1.886 0 2.828 0 3.414.586C16 5.172 16 6.114 16 8'></path>
              </svg>
            </div>
          </CopyToClipboard>
        ) : (
          <p className='font-semibold'>This is the default value</p>
        )}
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
