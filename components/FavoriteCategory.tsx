import { useContext } from 'react'
import { FavoritesCtx } from '../contexts/FavoritesProvider'
import { CopyToClipboard, WidgetWrapper, DeleteButton } from './'

interface Props {
  category: string
}

const FavoriteCategory = ({ category }: Props) => {
  const favoritesContext = useContext(FavoritesCtx)
  return (
    <>
      {' '}
      {!favoritesContext.isCategoryEmpty(category) && (
        <WidgetWrapper>
          <div className='flex flex-col self-start w-full gap-4'>
            <DeleteButton category={category} />
            <h2 className='text-xl font-semibold capitalize'>{category}</h2>
            <ul className='flex flex-col gap-4 sm:gap-2'>
              {favoritesContext?.favorites
                ?.sort((a, b) => {
                  if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
                  if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
                  return 0
                })
                .map((favorite, index) => {
                  return (
                    favorite.category === category && (
                      <li
                        key={favorite.class + index}
                        className='flex items-center w-full gap-2 pb-4 border-b sm:pb-0 sm:border-none last-of-type:border-b-0 last-of-type:pb-0 border-slate-200 dark:border-slate-600 '>
                        {/* DELETE BUTTON */}
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

                        <div className='flex flex-col gap-2 sm:flex-row'>
                          <h3 className='font-semibold'>
                            <span className='text-indigo-600 dark:text-indigo-200'>
                              {favorite.name}
                            </span>
                            :
                          </h3>
                          <div className=''>
                            <CopyToClipboard valueToCopy={favorite.class}>
                              <span className=''>{favorite.class}</span>
                            </CopyToClipboard>
                          </div>
                        </div>
                      </li>
                    )
                  )
                })}
            </ul>
          </div>
        </WidgetWrapper>
      )}
    </>
  )
}

export default FavoriteCategory
