import { useState, DragEvent, useDeferredValue } from 'react'
import {
  FontSizeHelper,
  FontWeightHelper,
  LetterSpacingHelper,
  ColorHelper,
} from './helpers'
import { FontExample } from '.'
import useEffect from 'react'

const FontHelper = () => {
  const [fontSize, setFontSize] = useState('text-base')
  const [fontWeight, setFontWeight] = useState('font-normal')
  const [letterSpacing, setLetterSpacing] = useState('tracking-normal')
  const [textColor, setTextColor] = useState('text-slate-200')
  const [isDropped, setIsDropped] = useState(false)

  const [boxes, setBoxes] = useState([
    {
      id: 'fontHelper-1',
      order: 1,
      element: (
        <FontSizeHelper
          setFontSize={setFontSize}
          helperId={'fontHelper-1'}
          handleDrag={handleDrag}
          handleDrop={handleDrop}
        />
      ),
    },
    {
      id: 'fontHelper-3',
      order: 2,
      element: (
        <FontWeightHelper
          setFontWeight={setFontWeight}
          helperId={'fontHelper-2'}
          handleDrag={handleDrag}
          handleDrop={handleDrop}
        />
      ),
    },
    {
      id: 'fontHelper-3',
      order: 3,
      element: (
        <LetterSpacingHelper
          setLetterSpacing={setLetterSpacing}
          helperId={'fontHelper-3'}
          handleDrag={handleDrag}
          handleDrop={handleDrop}
        />
      ),
    },
    {
      id: 'fontHelper-4',
      order: 4,
      element: (
        <ColorHelper
          setColor={setTextColor}
          helperId={'fontHelper-4'}
          handleDrag={handleDrag}
          handleDrop={handleDrop}
        />
      ),
    },
  ])
  const [dragId, setDragId] = (useState < null) | (string > null)

  function handleDrag(node: DragEvent<HTMLElement>): void {
    // console.log(node.currentTarget.id)

    setDragId(node.currentTarget.id)
  }

  function handleDrop(node: DragEvent<HTMLElement>): void {
    const dragBox = boxes.find((box) => box.id === dragId)
    const dropBox = boxes.find((box) => box.id === node.currentTarget.id)

    const dragBoxOrder = dragBox.order
    const dropBoxOrder = dropBox.order

    const newBoxState = boxes.map((box) => {
      if (box.id === dragId) {
        box.order = dropBoxOrder
      }
      if (box.id === node.currentTarget.id) {
        box.order = dragBoxOrder
      }
      return box
    })
    setBoxes(newBoxState)
  }

  // useEffect(() => {

  // }, [isDropped])

  return (
    <div className='flex flex-col gap-4'>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
        {boxes.map((box, index) => {
          return <div key={`$box-${index}`}>{box.element}</div>
        })}

        {/* <FontSizeHelper
          setFontSize={setFontSize}
          dragId={boxes[0].id}
          handleDrag={handleDrag}
          handleDrop={handleDrop}
        /> */}
        {/* <FontWeightHelper
          setFontWeight={setFontWeight}
          dragId={boxes[1].id}
          handleDrag={handleDrag}
          handleDrop={handleDrop}
        /> */}
        {/* <LetterSpacingHelper
          setLetterSpacing={setLetterSpacing}
          dragId={boxes[2].id}
          handleDrag={handleDrag}
          handleDrop={handleDrop}
        /> */}
        {/* <ColorHelper
          setColor={setTextColor}
          dragId={boxes[3].id}
          handleDrag={handleDrag}
          handleDrop={handleDrop}
        /> */}
      </div>
      <FontExample
        fontSize={fontSize}
        fontWeight={fontWeight}
        letterSpacing={letterSpacing}
        textColor={textColor}
      />
    </div>
  )
}

export default FontHelper
