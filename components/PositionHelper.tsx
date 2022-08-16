import { useState } from 'react'
import { PositioningHelper, PlacementHelper } from './helpers'
import { PositionExample } from '.'

const PositionHelper = () => {
  const [positioning, setPositioning] = useState('')
  const [placement, setPlacement] = useState('')
  // const [borderRadius, setBorderRadius] = useState('')
  // const [shadow, setShadow] = useState('')

  return (
    <div className='flex flex-col gap-4'>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
        <PositioningHelper setPositioning={setPositioning} />
        <PlacementHelper setPlacement={setPlacement} />
      </div>
      <PositionExample positioning={positioning} placement={placement} />
    </div>
  )
}

export default PositionHelper
