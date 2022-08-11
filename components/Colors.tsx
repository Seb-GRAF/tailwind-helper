import { useState, useContext } from 'react'
import { colors } from '../utils/tailwindClasses'
import { CopyToClipboard } from '.'
import { ColorHelper } from './helpers'
import { FavoritesCtx } from '../contexts/FavoritesProvider'
import { FavoriteButton } from '.'

const Colors = (): JSX.Element => {
  const [displaySuccessMessage, setDisplaySuccessMessage] = useState(false)
  const [color, setColor] = useState(null)

  const copyToClipboard = async (text: string | null): Promise<void> => {
    if (!text) return
    await navigator.clipboard.writeText(text)
    setDisplaySuccessMessage(true)
  }

  const favoritesContext = useContext(FavoritesCtx)


  return (
    <section className='mx-auto space-y-4'>
      <ColorHelper setColor={setColor} />
      <div className='relative grid grid-cols-5 gap-2 p-0 pb-0 md:shadow-md dark:shadow-none md:bg-white md:p-8 md:pb-0 md:gap-3 min-w-fit md:dark:shadow-inset-sm md:dark:shadow-white/5 md:rounded-xl md:dark:bg-slate-800 shadow-slate-200 md:ring-1 ring-inset dark:ring-slate-700/50 ring-slate-300/30'>
        {colors.map((color, index) => {
          if (color.class === 'white' || color.class === 'black') return
          return (
            <div
              key={color.class}
              className={`relative flex items-center justify-center flex-col ${(index - 2) % 10 > 4 && 'mb-8 md:mb-12'
                }`}>
              {/* COLOR SQUARE */}
              <div className={`relative overflow-hidden group h-10 md:h-12 w-full bg-${color.class} rounded-md shadow-sm`}>
                <button
                  className='absolute top-0 left-0 w-full h-full group'
                  onClick={() => copyToClipboard(color.class)}
                  onMouseLeave={() => setDisplaySuccessMessage(false)}>
                  <div className='relative flex items-center justify-center w-full h-full text-sm transition-all opacity-0 bg-white/40 dark:bg-black/30 group-hover:opacity-100'>
                    {displaySuccessMessage ? 'Copied ✓' : 'Copy'}
                  </div>
                </button>
                <div className={`group-hover:opacity-100 transition-all ${favoritesContext.isAlreadyFavorite(color.class) ? 'opacity-100' : 'opacity-0'}`}>
                  <FavoriteButton favoriteClass={color.class} category={'colors'} />
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
