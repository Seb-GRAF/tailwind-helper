import { useContext, useEffect, useState } from 'react'
import { FavoritesCtx } from '../contexts/FavoritesProvider'
import { CopyToClipboard, WidgetWrapper } from './'

interface Props {
    setShowConfirm: (value: boolean) => void
    category: string
}

const ConfirmDelete = ({ setShowConfirm, category }: Props) => {
    const favoritesContext = useContext(FavoritesCtx)

    return <div className='absolute z-50 flex flex-col items-center justify-center gap-4 p-4 shadow-xl top-1 right-1 bg-slate-100 text-slate-900 rounded-xl'>
        <h1 className='text-center'>Are you sure you want to delete all colors?</h1>
        <div className='flex justify-center gap-4'>
            <button className='px-3 text-white bg-pink-500 rounded-md' onClick={() => {
                setShowConfirm(false)
                favoritesContext.emptyCategory(category)
            }
            }>
                Delete
            </button>
            <button className='p-2 text-white bg-gray-500 rounded-md' onClick={() => setShowConfirm(false)}>
                Cancel
            </button>
        </div>
    </div>
}

const Favorites = () => {
    const [showConfirm, setShowConfirm] = useState(false)
    const favoritesContext = useContext(FavoritesCtx)


    useEffect(() => {

    }, [showConfirm])

    return (
        <div className='flex flex-col gap-8'>
            {/* COLORS CATEGORY */}
            <WidgetWrapper>
                <div className='flex flex-col self-start w-full gap-4'>
                    {
                        favoritesContext.isCategoryEmpty('colors') ? null :
                            <button className='absolute right-4 top-2' onClick={() => setShowConfirm(true)}>
                                Delete All
                            </button>
                    }
                    {
                        showConfirm && (
                            <ConfirmDelete setShowConfirm={setShowConfirm} category='colors' />
                        )
                    }
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
                                            <div className={` h-3 w-3 rounded-sm bg-${favorite.class}`} />
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
            </WidgetWrapper >
            {/* FONTS CATEGORY */}
            <WidgetWrapper >

                <div className='flex flex-col self-start w-full gap-4'>
                    {
                        favoritesContext.isCategoryEmpty('fonts') ? null :
                            <button className='absolute right-4 top-2' onClick={() => setShowConfirm(true)}>
                                Delete All
                            </button>
                    }
                    {
                        showConfirm && (
                            <ConfirmDelete setShowConfirm={setShowConfirm} category='colors' />
                        )
                    }
                    <h2 className='text-xl font-semibold'>Fonts</h2>
                    <ul className='grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4'>
                        {favoritesContext?.favorites?.map((favorite, index) => {
                            return favorite.category === 'fonts' && (
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
            </WidgetWrapper >
        </div >
    )
}

export default Favorites