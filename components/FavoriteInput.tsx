import { useContext, useState, useEffect } from 'react'
import { FavoritesCtx } from '../contexts/FavoritesProvider'
import { FavoriteButton } from '.'

type Category =
  | 'fonts'
  | 'layouts'
  | 'positions'
  | 'grids'
  | 'images'
  | 'colors'

interface Props {
  toPrint: string
  defaultName: string
  category: Category
}

const FavoriteInput = ({ toPrint, category, defaultName }: Props) => {
  const [showFavoriteInput, setShowFavoriteInput] = useState(false)
  const [customName, setCustomName] = useState('')
  const favoritesContext = useContext(FavoritesCtx)

  useEffect(() => {
    if (favoritesContext.isAlreadyFavorite(toPrint) && customName !== '') {
      favoritesContext.updateFavorite({
        class: toPrint,
        name: customName,
        category,
      })
    }
  }, [customName, favoritesContext])

  return (
    <>
      {!showFavoriteInput && (
        <button
          className='absolute z-20 text-xl right-2 top-1'
          onClick={() => setShowFavoriteInput(true)}>
          <span className='sr-only'>
            {favoritesContext?.isAlreadyFavorite(toPrint)
              ? 'Remove from favorites'
              : 'Add to favorites'}
          </span>
          {favoritesContext?.isAlreadyFavorite(toPrint) ? '★' : '☆'}
        </button>
      )}
      {showFavoriteInput && (
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
            category={category}
            favoriteName={
              customName.length > 0
                ? customName
                : `${defaultName} ${
                    favoritesContext.countFavorite(category) + 1
                  }`
            }
          />
          <div
            className='fixed top-0 right-0 w-full h-full'
            onClick={() => {
              setShowFavoriteInput(false)
              setCustomName('')
            }}
          />
        </div>
      )}
    </>
  )
}

export default FavoriteInput
