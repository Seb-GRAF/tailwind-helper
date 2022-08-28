import CopyToClipboard from '../CopyToClipboard'
import { useState, useEffect } from 'react'
import { Tooltip, FavoriteInput, PinButton } from '..'

interface Props {
  objectFit: string
  objectPosition: string
  filter: string
}

const ImageExample = ({
  objectFit,
  objectPosition,
  filter,
}: Props): JSX.Element => {
  const [pinned, setPinned] = useState(false)
  const [toPrint, setToPrint] = useState('')

  useEffect(() => {
    setToPrint(
      `${objectFit !== 'object-none' ? `${objectFit}` : ''}${
        objectPosition !== 'object-center' ? ` ${objectPosition}` : ''
      }${filter !== 'blur-none' ? ` ${filter}` : ''}`
    )
  }, [objectFit, objectPosition, filter])

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
      <FavoriteInput toPrint={toPrint} category='images' defaultName='Image' />

      {/* EXAMPLE */}
      <div className={`flex flex-col w-full min-h-96`}>
        <div
          className={`w-full h-full px-1 pt-1 sm:px-2 sm:pt-2 flex justify-center`}>
          <div className='w-full h-72 max-h-96 resize min-h-[5rem] min-w-[5rem] striped-div rounded-lg overflow-hidden max-w-full border-2'>
            <img
              className={`${objectFit} ${objectPosition} ${filter} w-full h-full`}
              src='/city.jpg'
              alt='japanese city with view of mount Fuji'
            />
          </div>
        </div>

        {/* VALUE TO PRINT */}
        <div className='flex items-end justify-between mx-3 my-2'>
          <CopyToClipboard valueToCopy={toPrint}>
            {toPrint === '' ? (
              <p className='font-semibold'>This is the default value</p>
            ) : (
              <div className='flex flex-wrap gap-2 font-semibold'>
                {objectFit !== 'object-none' && (
                  <span className='whitespace-nowrap'>{objectFit}</span>
                )}
                {objectPosition !== 'object-center' && (
                  <span className='whitespace-nowrap'>{objectPosition}</span>
                )}
                {filter !== 'blur-none' && (
                  <span className='whitespace-nowrap'>{filter}</span>
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
            )}
          </CopyToClipboard>
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

export default ImageExample
