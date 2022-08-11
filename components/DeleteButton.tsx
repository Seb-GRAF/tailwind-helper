import { useState, useEffect, useContext } from "react"
import { FavoritesCtx } from "../contexts/FavoritesProvider"

interface Props {
    category: string
}

const DeleteButton = ({ category }: Props): JSX.Element => {
    const [showConfirm, setShowConfirm] = useState(false)
    const favoritesContext = useContext(FavoritesCtx)

    return (
        <>
            {
                !favoritesContext.isCategoryEmpty(category) &&
                <button className='absolute delete right-4 top-2' onClick={() => setShowConfirm(true)}>
                    Delete All
                </button>
            }
            {
                showConfirm && (
                    <>
                        {/* CONFIRM DELETE */}
                        <div className='absolute z-50 flex flex-col items-center justify-center gap-4 p-4 shadow-xl delete top-1 right-1 bg-slate-100 text-slate-900 rounded-xl'>
                            <h1 className='text-center delete'>Are you sure you want to delete all {category}?</h1>
                            <div className='flex justify-center gap-4 delete'>
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
                        {/* BACKDROP */}
                        <div className="fixed top-0 left-0 z-40 w-full h-full" onClick={() => setShowConfirm(false)}></div>
                    </>
                )
            }
        </>
    )
}

export default DeleteButton