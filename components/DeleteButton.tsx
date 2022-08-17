import { useState, useEffect, useContext } from 'react'
import { FavoritesCtx } from '../contexts/FavoritesProvider'

interface Props {
  category: string
}

const DeleteButton = ({ category }: Props): JSX.Element => {
  const [showConfirm, setShowConfirm] = useState(false)
  const favoritesContext = useContext(FavoritesCtx)

  return (
    <>
      {!favoritesContext.isCategoryEmpty(category) && (
        <button
          className='absolute text-sm transition-all delete top-2 right-3 text-slate-400 dark:hover:text-indigo-300 hover:text-indigo-700'
          onClick={() => setShowConfirm(true)}>
          Delete All
        </button>
      )}
      {showConfirm && (
        <>
          {/* CONFIRM DELETE */}
          <div className='absolute top-0 right-0 z-50 flex flex-col items-center justify-center gap-4 p-4 shadow-md dark:shadow-inset-outset-md shadow-gray-400/30 delete dark:bg-gray-100 bg-slate-800 text-slate-100 dark:text-slate-900 rounded-xl '>
            <h1 className='text-center delete'>
              Are you sure you want to delete all <b>{category}</b>?
            </h1>
            <div className='flex justify-center gap-4 delete'>
              <button
                className='px-3 text-white transition-colors bg-pink-500 rounded-lg hover:bg-pink-400'
                onClick={() => {
                  setShowConfirm(false)
                  favoritesContext.emptyCategory(category)
                }}>
                Delete
              </button>
              <button
                className='p-2 text-white transition-colors bg-gray-500 rounded-lg hover:bg-gray-400'
                onClick={() => setShowConfirm(false)}>
                Cancel
              </button>
            </div>
          </div>
          {/* BACKDROP */}
          <div
            className='fixed top-0 left-0 z-40 w-full h-full'
            onClick={() => setShowConfirm(false)}></div>
        </>
      )}
    </>
  )
}

export default DeleteButton
