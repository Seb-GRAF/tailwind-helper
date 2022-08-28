import React from 'react'
import { Tooltip } from '.'

interface Props {
  pinned: boolean
  setPinned: (pinned: boolean) => void
}

const PinButton = ({ pinned, setPinned }: Props) => {
  return (
    <button
      className='absolute top-2 left-2'
      onClick={() => setPinned(!pinned)}>
      <span className='sr-only'>
        {pinned ? 'unpin' : 'pin to the bottom of the screen'}
      </span>
      <Tooltip message={pinned ? 'Unpin' : 'Pin to bottom'} side='right'>
        {pinned ? (
          <svg
            className='w-5 h-5'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z'
            />
          </svg>
        ) : (
          <svg
            className='w-5 h-5'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z'
            />
          </svg>
        )}
      </Tooltip>
    </button>
  )
}

export default PinButton
