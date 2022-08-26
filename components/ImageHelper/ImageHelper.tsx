import { useState } from 'react'
import {
  ObjectFitHelper,
  ObjectPositionHelper,
  FilterHelper,
  ImageExample,
} from '.'

const ImageHelper = () => {
  const [objectFit, setObjectFit] = useState('')
  const [objectPosition, setObjectPosition] = useState('')
  const [filter, setFilter] = useState('')

  return (
    <div className='flex flex-col gap-4'>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
        <ObjectFitHelper setObjectFit={setObjectFit} />
        <ObjectPositionHelper setObjectPosition={setObjectPosition} />
        <FilterHelper setFilter={setFilter} />
      </div>
      <ImageExample
        objectFit={objectFit}
        objectPosition={objectPosition}
        filter={filter}
      />
    </div>
  )
}

export default ImageHelper
