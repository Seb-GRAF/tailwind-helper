import React, { useState, useEffect } from 'react'
import { CopyToClipboard, StyledRange, StyledInput } from '..'
import { WidgetWrapper, WidgetConverter, WidgetResult } from '..'
import { gridTemplateRows } from '../../utils/tailwindClasses'

interface Props {
  setGridTemplateRows: (value: string) => void
}

const GridTemplateRows = ({ setGridTemplateRows }: Props): JSX.Element => {
  const [value, setValue] = useState(1)
  const [templateRows, setTemplateRows] = useState(gridTemplateRows[1])

  const reset = () => {
    if (value === 0) return
    setValue(0)
    setTemplateRows(gridTemplateRows[0])
  }

  // updates converted spacing on value change
  useEffect(() => {
    setTemplateRows(gridTemplateRows[value])
  }, [value])

  useEffect(() => {
    setGridTemplateRows(templateRows.class)
  }, [setGridTemplateRows, templateRows])

  return (
    <WidgetWrapper>
      <button
        className='absolute text-sm transition-all top-2 right-3 text-slate-400 dark:hover:text-indigo-300 hover:text-indigo-700'
        onClick={reset}>
        Reset
      </button>
      <WidgetConverter helperName='Grid Rows'>
        <div className='relative w-full'>
          <label className='w-full'>
            <input
              readOnly={true}
              className='w-full p-4 text-indigo-700 rounded-md cursor-not-allowed bg-slate-100 dark:bg-slate-700 dark:text-indigo-300 ring-1 ring-gray-600/10 dark:ring-gray-100/10 overflow-ellipsis '
              type='text'
              step={1}
              name='grid-template-rows'
              min={0}
              max={gridTemplateRows.length - 1}
              value={`repeat(${value + 1}, minmax(0, 1fr)`}
              onChange={(e) => setValue(Number(e.target.value))}
            />
            <span className='sr-only'>Grid rows</span>
          </label>
        </div>
        <StyledRange
          step={1}
          min={0}
          max={gridTemplateRows.length - 1}
          value={value || 0}
          setValue={setValue}
        />
      </WidgetConverter>
      <WidgetResult>
        <CopyToClipboard valueToCopy={templateRows.class.toString()}>
          <span className='font-semibold'>{`${templateRows.class}`}</span>
        </CopyToClipboard>
      </WidgetResult>
    </WidgetWrapper>
  )
}

export default GridTemplateRows
