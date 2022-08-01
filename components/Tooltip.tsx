import { ReactNode, useEffect, useState } from 'react'

interface Props {
  message: string
  children: ReactNode
  color?: string
}

const Tooltip = ({ color, message, children }: Props): JSX.Element => {
  return (
    <div className='relative flex flex-col items-center group'>
      <p className='underline underline-offset-4 decoration-black/20 decoration-dotted'>
        {children}
      </p>
      <div className='absolute bottom-0 flex-col items-center hidden mb-6 group-hover:flex'>
        <span
          className={`relative z-10 p-2 text-xs leading-none text-white whitespace-nowrap rounded-md shadow-lg ${color}`}>
          {message}
        </span>
        <div className={`w-3 h-3 -mt-2 rotate-45 ${color}`}></div>
      </div>
    </div>
  )
}

export default Tooltip
