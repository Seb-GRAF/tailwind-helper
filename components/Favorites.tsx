import { useContext } from 'react'
import { FavoritesCtx } from '../contexts/FavoritesProvider'
import {
  CopyToClipboard,
  WidgetWrapper,
  DeleteButton,
  FavoriteCategory,
} from '.'

const Favorites = () => {
  const favoritesContext = useContext(FavoritesCtx)

  return (
    <div className='flex flex-col gap-4'>
      {/* MESSAGE WHEN NO FAVORITES */}
      {favoritesContext?.favorites?.length < 1 && (
        <div className='mt-8 text-center'>
          <h2 className='text-2xl font-semibold'>No favorites yet</h2>
          <p className='text-lg opacity-70'>
            Use the ☆ icon found within the helpers to save properties to your
            favorites.
            <br />
            Properties are saved to local storage, a future version will include
            a login feature.
          </p>
        </div>
      )}

      {/* COLORS CATEGORY */}
      {!favoritesContext.isCategoryEmpty('colors') && (
        <WidgetWrapper>
          <div className='flex flex-col self-start w-full gap-4'>
            <DeleteButton category='colors' />
            <h2 className='text-xl font-semibold'>Colors</h2>
            <ul className='columns-2 sm:columns-3 md:columns-4'>
              {favoritesContext?.favorites
                ?.sort((a, b) => {
                  if (a.class.toLowerCase() < b.class.toLowerCase()) return -1
                  if (a.class.toLowerCase() > b.class.toLowerCase()) return 1
                  return 0
                })
                .map((favorite, index) => {
                  return (
                    favorite.category === 'colors' && (
                      <li
                        key={favorite.class + index}
                        className='flex items-center gap-2 mb-1 w-fit whitespace-nowrap'>
                        <button
                          aria-label='delete item'
                          className='flex items-center justify-center hover:text-pink-500 hover:dark:text-pink-400'
                          onClick={() =>
                            favoritesContext.removeFavorite(favorite.class)
                          }>
                          <svg
                            className='w-4 h-4'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={2}
                              d='M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
                            />
                          </svg>
                        </button>
                        <div className='flex items-center gap-1'>
                          {/* COLOR SQUARE */}
                          <div
                            className={` h-3 w-3 rounded-sm ring-1 dark:ring-slate-700 ring-slate-100 bg-${favorite.class}`}
                          />
                          {/* CLASS */}
                          <CopyToClipboard valueToCopy={favorite.class}>
                            {favorite.name}
                          </CopyToClipboard>
                        </div>
                      </li>
                    )
                  )
                })}
            </ul>
          </div>
        </WidgetWrapper>
      )}

      <FavoriteCategory category='fonts' />
      <FavoriteCategory category='layouts' />
      <FavoriteCategory category='positions' />
      <FavoriteCategory category='grids' />
      <FavoriteCategory category='images' />
    </div>
  )
}

export default Favorites
