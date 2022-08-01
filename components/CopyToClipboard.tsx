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
  }

  return (
    <button
      onClick={() => copyToClipboard(valueToCopy)}
      onMouseLeave={() => setDisplaySuccessMessage(false)}>
      <Tooltip
        message={displaySuccessMessage ? 'Copied ✓' : 'Copy'}
        color={displaySuccessMessage ? 'bg-emerald-600' : 'bg-gray-600'}>
        {children}
      </Tooltip>
    </button>
  )
}

export default CopyToClipboard
