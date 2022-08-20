import CopyToClipboard from './CopyToClipboard'
import { useState, useEffect, useContext } from 'react'
import { Tooltip, FavoriteButton } from '.'
import { FavoritesCtx } from '../contexts/FavoritesProvider'

interface Props {
  gridTemplateColumns: string
  gridTemplateRows: string
  gap: string
}

const GridExample = ({
  gridTemplateColumns,
  gridTemplateRows,
  gap,
}: Props): JSX.Element => {
  const [divAmount, setDivAmount] = useState([...Array(1)])

  const [toPrint, setToPrint] = useState('')
  const [customName, setCustomName] = useState('')
  const [showInput, setShowInput] = useState(false)

  const favoritesContext = useContext(FavoritesCtx)

  useEffect(() => {
    setToPrint(
      `grid${
        gridTemplateColumns !== 'grid-cols-1' ? ` ${gridTemplateColumns}` : ''
      }${gridTemplateRows !== 'grid-rows-1' ? ` ${gridTemplateRows}` : ''}${
        gap !== 'gap-0' ? ` ${gap}` : ''
      }`
    )
  }, [gridTemplateColumns, gridTemplateRows, gap])

  useEffect(() => {
    if (favoritesContext.isAlreadyFavorite(toPrint) && customName !== '') {
      favoritesContext.updateFavorite({
        class: toPrint,
        name: customName,
        category: 'grids',
      })
    }
  }, [customName, favoritesContext, toPrint])

  useEffect(() => {
    let columns = gridTemplateColumns.split('-')
    let rows = gridTemplateRows.split('-')

    let colAmount = Number(columns[2])
    let rowAmount = Number(rows[2])

    if (!isNaN(colAmount) && !isNaN(rowAmount))
      setDivAmount([...Array(colAmount * rowAmount)])
  }, [gridTemplateColumns, gridTemplateRows])

  return (
    <div className='relative z-0 bg-white shadow-md dark:bg-slate-800 rounded-xl dark:shadow-inset-outset-md shadow-gray-400/30 dark:ring-1 dark:ring-inset dark:ring-slate-700/50'>
      {/* FAVORITE  */}
      {!showInput && (
        <button
          className='absolute z-20 text-xl right-2 top-1'
          onClick={() => setShowInput(true)}>
          {favoritesContext?.isAlreadyFavorite(toPrint) ? '★' : '☆'}
        </button>
      )}
      {showInput && (
        <div className='absolute top-0 right-0 z-10 w-10'>
          <input
            type='text'
            placeholder='Custom name'
            defaultValue={
              favoritesContext?.isAlreadyFavorite(toPrint)
                ? favoritesContext?.favorites?.find((e) => e.class === toPrint)
                    ?.name
                : ''
            }
            className='absolute z-10 px-2 pr-6 bg-gray-100 rounded-md shadow-md shadow-slate-900/20 top-1 right-1 h-7 dark:bg-slate-700 ring-1 ring-gray-200/20'
            onChange={(e) => setCustomName(e.target.value)}
          />
          <FavoriteButton
            favoriteClass={toPrint}
            category='grids'
            favoriteName={
              customName.length > 0
                ? customName
                : `Grid ${
                    favoritesContext.countDefaultNames('grids', 'Grid') + 1
                  }`
            }
          />
          <div
            className='fixed top-0 right-0 w-full h-full'
            onClick={() => {
              setShowInput(false)
              setCustomName('')
            }}></div>
        </div>
      )}

      {/* EXAMPLE */}
      <div className={`flex flex-col w-full min-h-96`}>
        <div
          className={`rounded-xl p-2 overflow-x-hidden grid ${gridTemplateColumns} ${gridTemplateRows} ${gap} w-full h-auto striped`}>
          {divAmount.map((e, i) => (
            <div
              key={`grid-div-${i}`}
              className='w-full bg-indigo-300 rounded-md dark:bg-indigo-700 h-14 shadow-inset-outset-md'
            />
          ))}
        </div>

        {/* VALUE TO PRINT */}
        <div className='flex items-end justify-between mx-3 my-2'>
          <CopyToClipboard valueToCopy={toPrint}>
            <div className='flex flex-wrap gap-2 font-semibold'>
              <span className='whitespace-nowrap'>grid </span>
              {gridTemplateColumns !== 'grid-cols-1' && (
                <span className='whitespace-nowrap'>{gridTemplateColumns}</span>
              )}
              {gridTemplateRows !== 'grid-rows-1' && (
                <span className='whitespace-nowrap'>{gridTemplateRows}</span>
              )}
              {gap !== 'gap-0' && (
                <span className='whitespace-nowrap'>{gap}</span>
              )}
              <svg
                width='24'
                height='24'
                fill='none'
                stroke='currentColor'
                strokeWidth='1.5'>
                <path d='M8 16c0 1.886 0 2.828.586 3.414C9.172 20 10.114 20 12 20h4c1.886 0 2.828 0 3.414-.586C20 18.828 20 17.886 20 16v-4c0-1.886 0-2.828-.586-3.414C18.828 8 17.886 8 16 8m-8 8h4c1.886 0 2.828 0 3.414-.586C16 14.828 16 13.886 16 12V8m-8 8c-1.886 0-2.828 0-3.414-.586C4 14.828 4 13.886 4 12V8c0-1.886 0-2.828.586-3.414C5.172 4 6.114 4 8 4h4c1.886 0 2.828 0 3.414.586C16 5.172 16 6.114 16 8'></path>
              </svg>
            </div>
          </CopyToClipboard>
          <Tooltip
            message='Example of your settings'
            color='bg-slate-900 dark:bg-slate-200 dark:text-slate-900'
            side='left'>
            <span className='cursor-help opacity-70'>ⓘ</span>
          </Tooltip>
        </div>
      </div>
    </div>
  )
}

export default GridExample
