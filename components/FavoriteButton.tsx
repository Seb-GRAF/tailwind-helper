import { useState, useContext, useEffect } from 'react'
import { FavoritesCtx } from '../contexts/FavoritesProvider'

interface Props {
    favoriteClass: string
    favoriteName?: string
    category: string
}

const FavoriteButton = ({ favoriteClass, favoriteName = favoriteClass, category }: Props): JSX.Element => {
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

    return isFavorite ? (
        <button className='absolute z-10 text-xl pointer-events-auto dark:text-slate-100 text-slate-700 top-1 right-2' onClick={onClick}>
            ★
        </button>
    ) : (
        <button className='absolute z-10 text-xl pointer-events-auto dark:text-slate-100 text-slate-700 top-1 right-2' onMouseEnter={(e) => e.currentTarget.innerText = '★'} onMouseLeave={(e) => e.currentTarget.innerText = '☆'}
            onClick={onClick}>
            ☆
        </button>
    )

}

export default FavoriteButton