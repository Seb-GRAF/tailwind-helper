import { useState, useEffect } from 'react'
import {
  FontSizeHelper,
  FontWeightHelper,
  LetterSpacingHelper,
} from './converters'
import { FontExample } from '.'

const FontHelper = () => {
  const [fontSize, setFontSize] = useState('text-base')
  const [fontWeight, setFontWeight] = useState('font-normal')
  const [letterSpacing, setLetterSpacing] = useState('tracking-normal')
  return (
    <div className='flex flex-col gap-12 px-4 py-8 bg-gray-200'>
      <h2 className='text-3xl font-medium tracking-normal'>Font Helper</h2>
      <FontSizeHelper setFontSize={setFontSize} />
      <FontWeightHelper setFontWeight={setFontWeight} />
      <LetterSpacingHelper setLetterSpacing={setLetterSpacing} />
      <FontExample
        fontSize={fontSize}
        fontWeight={fontWeight}
        letterSpacing={letterSpacing}
      />
    </div>
  )
}

export default FontHelper
