import { useState, useEffect } from 'react'
import { createContext } from "react";

export interface Favorite {
    category: string;
    name: string;
    class: string;

}

export type Favorites = {
    favorites: Favorite[];
    addFavorite: (favorite: Favorite) => void;
    removeFavorite: (favorite: string) => void;
    isAlreadyFavorite: (favorite: string) => boolean;
    emptyCategory: (category: string) => void;
    isCategoryEmpty: (category: string) => boolean;
};

const FavoritesCtx = createContext<Favorites | null>(null)

const FavoritesProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
    const [favorites, setFavorites] = useState<Favorite[]>(null);

    const addFavorite = (favorite: Favorite) => {
        // return if class already exists
        if (favorites.some(f => f.class === favorite.class)) return

        setFavorites((prev) => [...prev, favorite]);
        localStorage.setItem('favorites', JSON.stringify([...favorites, favorite]));
    }

    const removeFavorite = (favorite: string) => {
        setFavorites((prev) => prev.filter(f => f.class !== favorite));
        localStorage.setItem('favorites', JSON.stringify(favorites.filter(f => f.class !== favorite)));
    }

    const isAlreadyFavorite = (favorite: string): boolean => {
        return favorites?.some(f => f.class === favorite);
    }

    const emptyCategory = (category: string): void => {
        setFavorites((prev) => prev.filter(f => f.category !== category));
        localStorage.setItem('favorites', JSON.stringify(favorites.filter(f => f.category !== category)));
    }
    // restores local storage
    useEffect(() => {
        setFavorites(JSON.parse(localStorage.getItem('favorites') || '[]'));
    }, [])

    const isCategoryEmpty = (category: string): boolean => {
        return !(favorites?.some(f => f.category === category));
    }

    return (
        <FavoritesCtx.Provider value={{ favorites, addFavorite, removeFavorite, isAlreadyFavorite, emptyCategory, isCategoryEmpty }}>
            {children}
        </FavoritesCtx.Provider>
    )
}



export { FavoritesCtx, FavoritesProvider }