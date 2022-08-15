import CopyToClipboard from './CopyToClipboard'
import { useState, useEffect, useContext } from 'react'
import { Tooltip, FavoriteButton } from './'
import { FavoritesCtx } from '../contexts/FavoritesProvider'

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
  const [toPrint, setToPrint] = useState('')
  const [customName, setCustomName] = useState('')
  const [showInput, setShowInput] = useState(false)

  const favoritesContext = useContext(FavoritesCtx)

  useEffect(() => {
    setToPrint(
      `${margin} ${padding} ${borderRadius} ${
        shadow !== 'shadow-none' ? shadow : ''
      }`
    )
  }, [margin, padding, borderRadius, shadow])

  useEffect(() => {
    if (favoritesContext.isAlreadyFavorite(toPrint) && customName !== '') {
      favoritesContext.updateFavorite({
        class: toPrint,
        name: customName,
        category: 'layouts',
      })
    }
  }, [customName, favoritesContext, toPrint])

  return (
    <div className='relative bg-white shadow-sm dark:bg-slate-800 rounded-xl dark:shadow-inset-sm dark:shadow-white/5 shadow-stone-200 ring-1 ring-inset dark:ring-slate-700/50 ring-slate-300/30'>
      {/* FAVORITE  */}
      {!showInput && (
        <button
          className='absolute z-20 text-xl right-2 top-1'
          onClick={() => setShowInput(true)}>
          {favoritesContext?.isAlreadyFavorite(toPrint) ? '★' : '☆'}
        </button>
      )}
      {showInput && (
        <div className='absolute top-0 right-0 z-10 w-10'>
          <input
            type='text'
            placeholder='Custom name'
            defaultValue={
              favoritesContext?.isAlreadyFavorite(toPrint)
                ? favoritesContext?.favorites?.find((e) => e.class === toPrint)
                    ?.name
                : ''
            }
            className='absolute z-10 px-2 pr-6 rounded-md shadow-md shadow-slate-900/20 top-1 right-1 h-7 bg-stone-100 dark:bg-slate-700 ring-1 ring-stone-200/20'
            onChange={(e) => setCustomName(e.target.value)}
          />
          <FavoriteButton
            favoriteClass={toPrint}
            category='layouts'
            favoriteName={
              customName.length > 0
                ? customName
                : `Layout ${
                    favoritesContext.countDefaultNames('layouts', 'Layout') + 1
                  }`
            }
          />
          <div
            className='fixed top-0 right-0 w-full h-full'
            onClick={() => {
              setShowInput(false)
              setCustomName('')
            }}></div>
        </div>
      )}
      {/* EXAMPLE */}
      <div
        className={`mb-2 flex items-center justify-center w-full min-h-96 overflow-xs-hidden`}>
        <div
          className={`padding overflow-x-hidden ${borderRadius} ${margin} ${padding} ${shadow} flex justify-center item-center transition-[margin,padding,border-radius,box-shadow] duration-75 bg-indigo-300 dark:bg-indigo-700 w-full h-auto`}>
          <div
            className={`${borderRadius} w-full h-24 transition-[margin,padding,border-radius] duration-75 bg-indigo-300 dark:bg-indigo-500`}></div>
        </div>
      </div>
      {/* VALUE TO PRINT */}
      <div className='flex items-end justify-between mx-3 mb-2'>
        <CopyToClipboard valueToCopy={toPrint}>
          <span className='flex flex-wrap gap-2 font-semibold'>
            <span className='whitespace-nowrap'>{margin}</span>
            <span className='whitespace-nowrap'>{padding}</span>
            <span className='whitespace-nowrap'>{borderRadius}</span>
            {shadow !== 'shadow-none ' && (
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
