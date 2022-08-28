import { useState, useContext, useEffect } from 'react'
import { FavoritesCtx } from '../contexts/FavoritesProvider'

interface Props {
  favoriteClass: string
  favoriteName?: string
  category: string
  color?: string
}

const FavoriteButton = ({
  favoriteClass,
  favoriteName = favoriteClass,
  category,
  color = 'dark:text-slate-100 text-slate-700',
}: Props): JSX.Element => {
  const [isFavorite, setIsFavorite] = useState(false)
  const favoritesContext = useContext(FavoritesCtx)

  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (isFavorite) {
      favoritesContext.removeFavorite(favoriteClass)
      setIsFavorite(false)
    } else {
      favoritesContext.addFavorite({
        class: favoriteClass,
        name: favoriteName,
        category: category,
      })
    }
  }

  useEffect(() => {
    const isAlreadyFavorite = favoritesContext?.isAlreadyFavorite(favoriteClass)
    setIsFavorite(isAlreadyFavorite ? true : false)
  }, [favoritesContext, favoriteClass])

  return (
    <button
      className={`absolute z-10 text-xl pointer-events-auto top-1 right-2 ${color}`}
      onClick={onClick}>
      <span className='sr-only'>
        {isFavorite ? 'remove from favorites' : 'add to favorites'}
      </span>
      {isFavorite ? '★' : '☆'}
    </button>
  )
}

export default FavoriteButton
