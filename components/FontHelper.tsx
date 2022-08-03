import { useState, useEffect } from 'react'
import {
  FontSizeHelper,
  FontWeightHelper,
  LetterSpacingHelper,
  ColorHelper,
} from './helpers'
import { FontExample } from '.'

const FontHelper = () => {
  const [fontSize, setFontSize] = useState('text-base')
  const [fontWeight, setFontWeight] = useState('font-normal')
  const [letterSpacing, setLetterSpacing] = useState('tracking-normal')
  const [textColor, setTextColor] = useState('text-slate-200')
  return (
    <div className='flex flex-col gap-4'>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
        <FontSizeHelper setFontSize={setFontSize} />
        <FontWeightHelper setFontWeight={setFontWeight} />
        <LetterSpacingHelper setLetterSpacing={setLetterSpacing} />
        <ColorHelper setTextColor={setTextColor} />
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
