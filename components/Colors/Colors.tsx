import { useState, useContext } from 'react'
import { colors } from '../../utils/tailwindClasses'
import { CopyToClipboard } from '..'
import { ColorHelper } from '.'
import { FavoritesCtx } from '../../contexts/FavoritesProvider'
import { FavoriteButton } from '..'

const Colors = (): JSX.Element => {
  const [displaySuccessMessage, setDisplaySuccessMessage] = useState(false)

  const favoritesContext = useContext(FavoritesCtx)

  const copyToClipboard = async (text: string | null): Promise<void> => {
    if (!text) return
    await navigator.clipboard.writeText(text)
    setDisplaySuccessMessage(true)
  }

  const isTooDark = (color: string): boolean => {
    const hex = color.substring(1)
    const rgb = parseInt(hex, 16)

    const red = (rgb >> 16) & 0xff
    const green = (rgb >> 8) & 0xff
    const blue = (rgb >> 0) & 0xff

    const brightness = 0.2126 * red + 0.7152 * green + 0.0722 * blue

    return brightness < 120
  }

  return (
    <section className='mx-auto -mb-8 space-y-4 sm:mb-auto'>
      <ColorHelper />
      <div className='relative grid grid-cols-5 gap-2 p-0 pt-4 pb-0 md:pt-8 md:shadow-md dark:shadow-none md:bg-white md:p-8 md:pb-0 md:gap-3 min-w-fit md:dark:shadow-inset-outset-md md:rounded-xl md:dark:bg-slate-800 shadow-gray-400/30 md:dark:ring-1 dark:ring-inset dark:ring-slate-700/50'>
        {colors.map((color, index) => {
          if (color.class === 'white' || color.class === 'black') return
          return (
            <div
              key={`${color.class}-${index}`}
              className={`relative flex items-center justify-center flex-col ${
                (index - 2) % 10 > 4 && 'mb-8 md:mb-12'
              }`}>
              {/* COLOR SQUARE */}
              <div
                className={`relative overflow-hidden group h-10 md:h-12 w-full bg-${color.class} rounded-md shadow-inset-outset-md ring-1 dark:ring-slate-700/20 ring-gray-300/20`}>
                <button
                  className='absolute top-0 left-0 w-full h-full group'
                  onClick={() => copyToClipboard(color.class)}
                  onMouseLeave={() => setDisplaySuccessMessage(false)}>
                  <div className='relative flex items-end justify-center w-full h-full pb-1 text-xs text-transparent transition-all opacity-0 sm:pb-0 sm:items-center sm:text-sm bg-white/40 dark:bg-black/30 group-hover:opacity-100 sm:text-inherit'>
                    {displaySuccessMessage ? 'Copied ✓' : 'Copy'}
                  </div>
                </button>

                {/* FAVORITE */}
                <div
                  className={`absolute -top-1.5 -right-1.5 sm:top-0 sm:right-0 group-hover:opacity-100 transition-all ${
                    favoritesContext.isAlreadyFavorite(color.class)
                      ? 'opacity-100'
                      : 'opacity-0'
                  }`}>
                  <FavoriteButton
                    favoriteClass={color.class}
                    category={'colors'}
                    color={
                      isTooDark(color.hex) ? 'text-white/40' : 'text-black/40'
                    }
                  />
                </div>
              </div>

              {/* TEXT UNDER COLOR */}
              <div className='flex flex-col justify-between w-full md:flex-row'>
                <CopyToClipboard valueToCopy={color.class}>
                  <span className='text-xs whitespace-nowrap'>
                    {color.class}
                  </span>
                </CopyToClipboard>
                <CopyToClipboard valueToCopy={color.hex}>
                  <span className='text-xs opacity-50'>{color.hex}</span>
                </CopyToClipboard>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Colors
