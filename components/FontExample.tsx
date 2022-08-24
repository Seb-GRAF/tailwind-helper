import CopyToClipboard from './CopyToClipboard'
import { useState, useEffect, useContext } from 'react'
import { Tooltip, FavoriteButton } from './'
import { FavoritesCtx } from '../contexts/FavoritesProvider'

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
  const [customName, setCustomName] = useState('')
  const [showInput, setShowInput] = useState(false)

  const favoritesContext = useContext(FavoritesCtx)

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

  useEffect(() => {
    if (favoritesContext.isAlreadyFavorite(toPrint) && customName !== '') {
      favoritesContext.updateFavorite({
        class: toPrint,
        name: customName,
        category: 'fonts',
      })
    }
  }, [customName, toPrint, favoritesContext])

  return (
    <div
      className={`${
        pinned
          ? 'sticky bottom-4 ring-4 dark:ring-slate-700 ring-gray-300'
          : 'relative dark:ring-1 dark:ring-inset dark:ring-slate-700/50'
      } z-20 bg-white shadow-md dark:bg-slate-800 rounded-xl dark:shadow-inset-outset-md shadow-gray-400/30`}>
      {/* PINNED */}
      <button
        className='absolute top-2 left-2'
        onClick={() => setPinned((prev) => !prev)}>
        <Tooltip message={pinned ? 'Unpin' : 'Pin to bottom'} side='right'>
          {pinned ? (
            <svg
              className='w-5 h-5'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
              />
            </svg>
          ) : (
            <svg
              className='w-5 h-5'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z'
              />
            </svg>
          )}
        </Tooltip>
      </button>
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
            className='absolute z-10 px-2 pr-6 bg-gray-100 rounded-md shadow-md top-1 right-1 w-15 h-7 dark:bg-slate-700 ring-1 ring-gray-200/20 shadow-slate-900/20'
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
