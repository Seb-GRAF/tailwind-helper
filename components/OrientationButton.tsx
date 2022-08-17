type Orientation = {
  left: boolean
  right: boolean
  top: boolean
  bottom: boolean
  [key: string]: any
}

interface Props {
  orientation: Orientation
  side: string
  onClick: () => void
}

const OrientationButton = ({ orientation, side, onClick }: Props) => {
  const styles: {
    [key: string]: any
    top: string
    right: string
    bottom: string
    left: string
  } = {
    top: 'top-0 -translate-x-1/2 left-1/2',
    right: ' rotate-90 -right-6 -translate-y-1/2 top-1/2',
    bottom: 'bottom-0 -translate-x-1/2 left-1/2',
    left: '-translate-y-1/2 -rotate-90 -left-5 top-1/2 ',
  }

  return (
    <button
      onClick={onClick}
      className={`absolute px-4 rounded-md pointer-events-auto  text-slate-400 ${
        styles[side]
      }
          ${
            orientation[side] === true
              ? 'bg-indigo-300 dark:bg-indigo-600 text-slate-700 dark:text-slate-300 ring-1 ring-gray-600/10 dark:ring-gray-100/10'
              : 'bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:text-slate-300 text-slate-700 ring-1 ring-gray-600/10 dark:ring-gray-100/10'
          }
          `}>
      <span className='capitalize'>{side}</span>
    </button>
  )
}

export default OrientationButton
