import { useState } from 'react'
import { PaddingHelper, MarginHelper } from './helpers'
import { LayoutExample } from '.'

const LayoutHelper = () => {
  const [margin, setMargin] = useState('')
  const [padding, setPadding] = useState('')

  return (
    <div className='flex flex-col gap-4'>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
        <MarginHelper setMargin={setMargin} />
        <PaddingHelper setPadding={setPadding} />
      </div>
      <LayoutExample margin={margin} padding={padding} />
    </div>
  )
}

export default LayoutHelper
