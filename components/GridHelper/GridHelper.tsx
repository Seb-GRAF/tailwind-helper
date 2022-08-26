import { useState } from 'react'
import {
  GridTemplateColumnsHelper,
  GridTemplateRowsHelper,
  GapHelper,
  GridExample,
} from '.'

const GridHelper = () => {
  const [gridTemplateColumns, setGridTemplateColumns] = useState('')
  const [gridTemplateRows, setGridTemplateRows] = useState('')
  const [gap, setGap] = useState('')

  return (
    <div className='flex flex-col gap-4'>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
        <GridTemplateColumnsHelper
          setGridTemplateColumns={setGridTemplateColumns}
        />
        <GridTemplateRowsHelper setGridTemplateRows={setGridTemplateRows} />
        <GapHelper setGap={setGap} />
      </div>
      <GridExample
        gridTemplateColumns={gridTemplateColumns}
        gridTemplateRows={gridTemplateRows}
        gap={gap}
      />
    </div>
  )
}

export default GridHelper
