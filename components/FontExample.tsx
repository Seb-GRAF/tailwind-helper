import CopyToClipboard from './CopyToClipboard'
import { useState, useEffect, useContext } from 'react'
import { Tooltip, FavoriteButton } from './'
import { FavoritesCtx } from '../contexts/FavoritesProvider'

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
  const [customName, setCustomName] = useState('')
  const [showInput, setShowInput] = useState(false)

  const favoritesContext = useContext(FavoritesCtx)

  // removes default styles from value to print
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

  useEffect(() => {
    if (favoritesContext.isAlreadyFavorite(toPrint) && customName !== '') {
      favoritesContext.updateFavorite({
        class: toPrint,
        name: customName,
        category: 'fonts',
      })
    }
  }, [customName])

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
            placeholder='Name your property'
            defaultValue={
              favoritesContext?.isAlreadyFavorite(toPrint)
                ? favoritesContext?.favorites?.find((e) => e.class === toPrint)
                    ?.name
                : ''
            }
            className='absolute z-10 px-2 rounded-md shadow-md top-1 right-1 w-15 h-7 bg-slate-100 dark:bg-slate-700'
            onChange={(e) => setCustomName(e.target.value)}
          />
          <FavoriteButton
            favoriteClass={toPrint}
            category='fonts'
            favoriteName={
              customName.length > 0
                ? customName
                : `Font ${favoritesContext.countFavorite('fonts') + 1}`
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
      {/* TEXT INPUT */}
      <input
        id='text-example'
        type='text'
        defaultValue='Lorem Ipsum'
        placeholder='Enter your text'
        className={`text-${textColor} placeholder:text-${textColor} ${fontSize} ${fontWeight} ${letterSpacing} max-h-34 py-4 px-6 overflow-x-auto  
         bg-transparent w-full`}
      />
      {/* TAILWIND CLASSES */}
      <div className='flex items-center justify-between mx-3 my-2'>
        <CopyToClipboard valueToCopy={toPrint}>
          <span className='flex flex-wrap gap-2 font-semibold whitespace-nowrap'>
            {fontSize !== 'text-base' && <span>{fontSize}</span>}
            {fontWeight !== 'font-normal' && <span>{fontWeight}</span>}
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
