import { useState } from 'react'
import {
  PaddingHelper,
  MarginHelper,
  BorderRadiusHelper,
  ShadowHelper,
  LayoutExample,
} from '.'

const LayoutHelper = () => {
  const [margin, setMargin] = useState('')
  const [padding, setPadding] = useState('')
  const [borderRadius, setBorderRadius] = useState('')
  const [shadow, setShadow] = useState('')

  return (
    <div className='flex flex-col gap-4'>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
        <MarginHelper setMargin={setMargin} />
        <PaddingHelper setPadding={setPadding} />
        <BorderRadiusHelper setBorderRadius={setBorderRadius} />
        <ShadowHelper setShadow={setShadow} />
      </div>
      <LayoutExample
        margin={margin}
        padding={padding}
        borderRadius={borderRadius}
        shadow={shadow}
      />
    </div>
  )
}

export default LayoutHelper
