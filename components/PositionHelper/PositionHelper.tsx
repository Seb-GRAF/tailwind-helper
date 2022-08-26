import { useState } from 'react'
import {
  PositioningHelper,
  PlacementHelper,
  TranslateXHelper,
  TranslateYHelper,
  PositionExample,
} from '.'

const PositionHelper = () => {
  const [positioning, setPositioning] = useState('')
  const [placement, setPlacement] = useState('')
  const [translateX, setTranslateX] = useState('')
  const [translateY, setTranslateY] = useState('')

  return (
    <div className='flex flex-col gap-4'>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
        <PositioningHelper setPositioning={setPositioning} />
        <PlacementHelper setPlacement={setPlacement} />
        <TranslateXHelper setTranslateX={setTranslateX} />
        <TranslateYHelper setTranslateY={setTranslateY} />
      </div>
      <PositionExample
        positioning={positioning}
        placement={placement}
        translateX={translateX}
        translateY={translateY}
      />
    </div>
  )
}

export default PositionHelper
