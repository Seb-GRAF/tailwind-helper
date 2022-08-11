import { useContext, useEffect, useState } from 'react'
import { FavoritesCtx } from '../contexts/FavoritesProvider'
import { CopyToClipboard, WidgetWrapper, DeleteButton } from './'

const Favorites = () => {
    const [showConfirm, setShowConfirm] = useState(false)
    const favoritesContext = useContext(FavoritesCtx)

    return (
        <div className='flex flex-col gap-4'>
            {/* MESSAGE WHEN NO FAVORITES */}
            {favoritesContext?.favorites?.length < 1 && (
                <div className='text-center'>
                    <h2 className='text-2xl font-semibold'>No favorites yet</h2>
                    <p className='text-lg opacity-70'>
                        Use the ☆ icon found within the helpers to save properties to your favorites.<br />

                        Properties are saved to local storage, a future version will include a login feature.

                    </p>
                </div>
            )}

            {/* COLORS CATEGORY */}
            {!favoritesContext.isCategoryEmpty('colors') &&
                <WidgetWrapper>
                    <div className='flex flex-col self-start w-full gap-4'>
                        <DeleteButton category='colors' />
                        <h2 className='text-xl font-semibold'>Colors</h2>
                        <ul className='grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4'>
                            {favoritesContext?.favorites?.sort((a, b) => {
                                if (a.class.toLowerCase() < b.class.toLowerCase()) return -1
                                if (a.class.toLowerCase() > b.class.toLowerCase()) return 1
                                return 0
                            })
                                .map((favorite, index) => {
                                    return favorite.category === 'colors' && (
                                        <li key={favorite.class + index} className='flex items-center gap-2 w-fit group'>
                                            <div className='flex items-center gap-1'>
                                                {/* COLOR SQUARE */}
                                                <div className={` h-3 w-3 rounded-sm ring-1 dark:ring-slate-700 ring-slate-100 bg-${favorite.class}`} />
                                                {/* CLASS */}
                                                <CopyToClipboard valueToCopy={favorite.class}>
                                                    {favorite.name}
                                                </CopyToClipboard>
                                            </div>
                                            <button className='items-center justify-center hidden w-6 h-4 group-hover:flex' onClick={
                                                () => favoritesContext.removeFavorite(favorite.class)
                                            }>
                                                ⓧ
                                            </button>
                                        </li>
                                    )
                                })}
                        </ul>
                    </div>
                </WidgetWrapper >}

            {/* FONTS CATEGORY */}
            {!favoritesContext.isCategoryEmpty('fonts') &&
                <WidgetWrapper >
                    <div className='flex flex-col self-start w-full gap-4'>
                        <DeleteButton category='fonts' />
                        <h2 className='text-xl font-semibold'>Fonts</h2>
                        <ul className='flex flex-col gap-2'>
                            {favoritesContext?.favorites?.map((favorite, index) => {
                                return favorite.category === 'fonts' && (

                                    <li key={favorite.class + index} className='flex items-center w-full gap-2 border-b sm:border-none border-slate-200 dark:border-slate-600 '>

                                        <button className='flex items-center justify-center w-6 h-4' onClick={
                                            () => favoritesContext.removeFavorite(favorite.class)
                                        }>
                                            ⓧ
                                        </button>
                                        <div className='flex flex-col pb-2 sm:flex-row'>
                                            <h3 className='font-semibold'>{favorite.name}: </h3>

                                            <CopyToClipboard valueToCopy={favorite.class}>
                                                <span className=''>
                                                    {favorite.class}
                                                </span>
                                            </CopyToClipboard>
                                        </div>

                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </WidgetWrapper >}

            {/* LAYOUTS CATEGORY */}
            {!favoritesContext.isCategoryEmpty('layouts') &&
                <WidgetWrapper >
                    <div className='flex flex-col self-start w-full gap-4'>
                        <DeleteButton category='layouts' />
                        <h2 className='text-xl font-semibold'>Layouts</h2>
                        <ul className='flex flex-col gap-2'>
                            {favoritesContext?.favorites?.map((favorite, index) => {
                                return favorite.category === 'layouts' && (
                                    <li key={favorite.class + index} className='flex items-center gap-2 w-fit group'>

                                        <CopyToClipboard valueToCopy={favorite.class}>
                                            {favorite.name}
                                        </CopyToClipboard>

                                        <button className='items-center justify-center hidden w-6 h-4 group-hover:flex' onClick={
                                            () => favoritesContext.removeFavorite(favorite.class)
                                        }>
                                            ⓧ
                                        </button>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </WidgetWrapper >}
        </div >
    )
}

export default Favorites