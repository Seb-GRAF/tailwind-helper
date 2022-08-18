import { useState, useEffect } from 'react'
import { createContext } from 'react'

export interface Favorite {
  category: string
  name: string
  class: string
}

export type Favorites = {
  favorites: Favorite[]
  addFavorite: (favorite: Favorite) => void
  removeFavorite: (favorite: string) => void
  updateFavorite: (favorite: Favorite) => void
  isAlreadyFavorite: (favorite: string) => boolean
  emptyCategory: (category: string) => void
  isCategoryEmpty: (category: string) => boolean
  countFavorite: (category: string) => number
  countDefaultNames: (category: string, defaultName: string) => number
  renameFavorite: (oldClass: string, newClass: string) => void
}

const FavoritesCtx = createContext<Favorites | null>(null)

const FavoritesProvider = ({
  children,
}: {
  children: React.ReactNode
}): JSX.Element => {
  const [favorites, setFavorites] = useState<Favorite[]>(null)

  const addFavorite = (favorite: Favorite): void => {
    // return if class already exists
    if (favorites.some((f) => f.class === favorite.class)) return

    setFavorites((prev) => [...prev, favorite])
    localStorage.setItem('favorites', JSON.stringify([...favorites, favorite]))
  }

  const removeFavorite = (favorite: string): void => {
    setFavorites((prev) => prev.filter((f) => f.class !== favorite))
    localStorage.setItem(
      'favorites',
      JSON.stringify(favorites.filter((f) => f.class !== favorite))
    )
  }

  const updateFavorite = (favorite: Favorite): void => {
    setFavorites((prev) =>
      prev.map((f) => (f.class === favorite.class ? favorite : f))
    )
    localStorage.setItem(
      'favorites',
      JSON.stringify(
        favorites.map((f) => (f.class === favorite.class ? favorite : f))
      )
    )
  }

  const renameFavorite = (oldClass: string, newClass: string): void => {
    setFavorites((prev) =>
      prev.map((f) => (f.class === oldClass ? { ...f, class: newClass } : f))
    )
    localStorage.setItem(
      'favorites',
      JSON.stringify(
        favorites.map((f) =>
          f.class === oldClass ? { ...f, class: newClass } : f
        )
      )
    )
  }

  const isAlreadyFavorite = (favorite: string): boolean => {
    return favorites?.some((f) => f.class === favorite)
  }

  const emptyCategory = (category: string): void => {
    setFavorites((prev) => prev.filter((f) => f.category !== category))
    localStorage.setItem(
      'favorites',
      JSON.stringify(favorites.filter((f) => f.category !== category))
    )
  }

  const countFavorite = (category: string): number => {
    return favorites?.filter((f) => f.category === category).length ?? 0
  }

  const countDefaultNames = (category: string, defaultName: string): number => {
    return (
      favorites?.filter(
        (f) => f.category === category && f.name.startsWith(defaultName)
      ).length ?? 0
    )
  }

  // restores local storage
  useEffect(() => {
    setFavorites(JSON.parse(localStorage.getItem('favorites') || '[]'))
  }, [])

  const isCategoryEmpty = (category: string): boolean => {
    return !favorites?.some((f) => f.category === category)
  }

  return (
    <FavoritesCtx.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        isAlreadyFavorite,
        emptyCategory,
        isCategoryEmpty,
        updateFavorite,
        countFavorite,
        countDefaultNames,
        renameFavorite,
      }}>
      {children}
    </FavoritesCtx.Provider>
  )
}

export { FavoritesCtx, FavoritesProvider }
