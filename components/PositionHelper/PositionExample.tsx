import CopyToClipboard from '../CopyToClipboard'
import { useState, useEffect } from 'react'
import { Tooltip, PinButton, FavoriteInput } from '..'

interface Props {
  positioning: string
  placement: string
  translateX: string
  translateY: string
}

const PositionExample = ({
  positioning,
  placement,
  translateX,
  translateY,
}: Props): JSX.Element => {
  const [pinned, setPinned] = useState(false)

  const [toPrint, setToPrint] = useState('')

  useEffect(() => {
    setToPrint(
      `${positioning !== 'static' ? positioning : ''}${
        placement.includes('inset-0') ? '' : ` ${placement}`
      }${translateX.includes('translate-x-0') ? '' : ` ${translateX}`}${
        translateY.includes('translate-y-0') ? '' : ` ${translateY}`
      }`
    )
  }, [positioning, placement, translateX, translateY])

  return (
    <div
      className={`${
        pinned
          ? 'sticky bottom-4 ring-4 dark:ring-slate-700 ring-gray-300'
          : 'relative dark:ring-1 dark:ring-inset dark:ring-slate-700/50'
      } z-20 bg-white shadow-md dark:bg-slate-800 rounded-xl dark:shadow-inset-outset-md shadow-gray-400/30 p-2`}>
      {/* PINNED */}
      <PinButton pinned={pinned} setPinned={setPinned} />
      {/* FAVORITE  */}
      <FavoriteInput
        toPrint={toPrint}
        category='positions'
        defaultName='Position'
      />

      {/* EXAMPLE */}
      <div>
        <div className='relative w-full rounded-md rounded-t-xl'>
          <div className='border-2 rounded-md striped-div h-28' />
          <div
            className={`${positioning} ${placement} ${translateX} ${translateY} rounded-md shadow-md shadow-black/20 inline-block w-12 h-12 ring-1 dark:ring-pink-400 ring-pink-300 ring-inset bg-pink-400 dark:bg-pink-500 z-50 pointer-events-none`}
          />
        </div>
        {/* VALUE TO PRINT */}
        <div className='flex items-end justify-between w-full px-1 pt-2'>
          {toPrint === '' ? (
            <p className='font-semibold'>This is the default value</p>
          ) : (
            <CopyToClipboard valueToCopy={toPrint}>
              <span className='flex flex-wrap gap-2 font-semibold'>
                {positioning !== 'static' && (
                  <span className='whitespace-nowrap'>{positioning}</span>
                )}
                {!placement.includes('inset-0') && (
                  <span className='whitespace-nowrap'>{placement}</span>
                )}
                {!translateX.includes('translate-x-0') && (
                  <span className='whitespace-nowrap'>{translateX}</span>
                )}
                {!translateY.includes('translate-y-0') && (
                  <span className='whitespace-nowrap'>{translateY}</span>
                )}
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
          )}
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

export default PositionExample
