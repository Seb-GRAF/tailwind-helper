import { useState } from 'react';
import {
  FontFamilyHelper,
  FontSizeHelper,
  FontWeightHelper,
  LetterSpacingHelper,
  TextDecorationHelper,
  DecorationStyleHelper,
  FontExample,
} from '.';
import { ColorHelper } from '../Colors';

const FontHelper = (): JSX.Element => {
  const [fontFamily, setFontFamily] = useState('');
  const [fontSize, setFontSize] = useState('text-base');
  const [fontWeight, setFontWeight] = useState('font-normal');
  const [textDecoration, setTextDecoration] = useState('');
  const [decorationStyle, setDecorationStyle] = useState('');
  const [decorationThickness, setDecorationThickness] = useState('');
  const [letterSpacing, setLetterSpacing] = useState('tracking-normal');
  const [textColor, setTextColor] = useState('text-slate-200');
  return (
    <div className='flex flex-col gap-4'>
      <div className='relative grid grid-cols-1 gap-4 sm:grid-cols-2'>
        <FontFamilyHelper setFontFamily={setFontFamily} />
        <FontSizeHelper setFontSize={setFontSize} />
        <FontWeightHelper setFontWeight={setFontWeight} />
        <LetterSpacingHelper setLetterSpacing={setLetterSpacing} />
        <TextDecorationHelper setTextDecoration={setTextDecoration} />
        <DecorationStyleHelper
          setDecorationStyle={setDecorationStyle}
          setDecorationThickness={setDecorationThickness}
        />
        <ColorHelper setColor={setTextColor} />
      </div>
      <FontExample
        fontFamily={fontFamily}
        fontSize={fontSize}
        fontWeight={fontWeight}
        letterSpacing={letterSpacing}
        textColor={textColor}
        textDecoration={textDecoration}
        decorationStyle={decorationStyle}
        decorationThickness={decorationThickness}
      />
    </div>
  );
};

export default FontHelper;
