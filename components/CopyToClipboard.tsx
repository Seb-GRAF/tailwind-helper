import { useState, ReactNode } from 'react'
import Tooltip from './Tooltip'

interface Props {
  children: ReactNode
  valueToCopy: string
}

const CopyToClipboard = ({ children, valueToCopy }: Props): JSX.Element => {
  const [displaySuccessMessage, setDisplaySuccessMessage] = useState(false)

  const copyToClipboard = async (text: string | null): Promise<void> => {
    if (!text) return
    await navigator.clipboard.writeText(text)
    setDisplaySuccessMessage(true)

    setTimeout(() => {
      setDisplaySuccessMessage(false)
    }, 1500)
  }

  return (
    <button onClick={() => copyToClipboard(valueToCopy)} className='z-10 flex'>
      <Tooltip
        side='top'
        message={displaySuccessMessage ? 'Copied ✓' : 'Click to copy'}
        color={
          displaySuccessMessage
            ? 'bg-slate-800 dark:bg-gray-200 dark:text-pink-600 text-pink-300 font-semibold'
            : 'bg-slate-800 dark:bg-gray-200 dark:text-slate-800'
        }>
        {children}
      </Tooltip>
    </button>
  )
}

export default CopyToClipboard
