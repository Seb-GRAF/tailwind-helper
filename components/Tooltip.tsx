import { ReactNode, useEffect, useState } from 'react'

interface Props {
  message: string
  children: ReactNode
  color?: string
  side?: string
}

const Tooltip = ({
  color = 'bg-slate-800 dark:bg-gray-200 dark:text-slate-800',
  message,
  side = 'top',
  children,
}: Props): JSX.Element => {
  if (side === 'top')
    return (
      <div className='relative z-20 flex flex-col items-center group'>
        <div className='w-full text-left cursor-pointer underline-none underline-offset-4 decoration-1 dark:decoration-slate-500 decoration-slate-800 decoration-dotted'>
          {children}
        </div>
        <div className='absolute flex-col items-center hidden mb-6 pointer-events-none bottom-1 group-hover:flex'>
          {/* ARROW */}
          <div
            className={`absolute -bottom-1 w-3 h-3 -mt-2 rotate-45 z-50 ${color}`}
          />
          {/* MESSAGE */}
          <span
            className={`relative z-40 p-2 text-xs  text-white whitespace-nowrap rounded-md shadow-md shadow-slate-900/20 ${color}`}>
            {message}
          </span>
        </div>
      </div>
    )

  if (side === 'left')
    return (
      <div className='relative z-20 flex flex-col items-center group'>
        <p className='w-full underline-none underline-offset-4 decoration-1 dark:decoration-slate-500 decoration-slate-800 decoration-dotted'>
          {children}
        </p>
        <div className='absolute right-[calc(100%+1rem)] flex-col items-center hidden -translate-y-1/2 pointer-events-none top-1/2 group-hover:flex '>
          <span
            className={`w-32 flex-grow relative z-10 p-2 text-xs text-white rounded-md shadow-lg ${color}`}>
            {message}
          </span>
          <div
            className={`absolute top-1/2 -right-1 w-3 h-3 -translate-y-1/2 rotate-45 ${color}`}></div>
        </div>
      </div>
    )

  if (side === 'right')
    return (
      <div className='relative z-20 flex flex-col items-center group'>
        <p className='w-full underline-none underline-offset-4 decoration-1 dark:decoration-slate-500 decoration-slate-800 decoration-dotted'>
          {children}
        </p>
        <div className='absolute left-[calc(100%+1rem)] flex-col items-center hidden -translate-y-1/2 pointer-events-none top-1/2 group-hover:flex '>
          <span
            className={`w-32 flex-grow relative z-10 p-2 text-xs text-white rounded-md shadow-lg ${color}`}>
            {message}
          </span>
          <div
            className={`absolute top-1/2 -left-1 w-3 h-3 -translate-y-1/2 rotate-45 ${color}`}></div>
        </div>
      </div>
    )
}

export default Tooltip
