import CopyToClipboard from './CopyToClipboard'

interface Props {
  fontSize: string
  fontWeight: string
  letterSpacing: string
}

const FontSizeExample = ({
  fontSize,
  fontWeight,
  letterSpacing,
}: Props): JSX.Element => {
  return (
    <>
      <input
        type='text'
        placeholder='Enter your text here'
        className={`${fontSize} ${fontWeight} ${letterSpacing} whitespace-nowrap overflow-x-auto p-4 w-full placeholder:text-black`}
      />
      <CopyToClipboard
        valueToCopy={`${fontSize} ${fontWeight} ${letterSpacing}`}>{`${fontSize} ${fontWeight} ${letterSpacing}`}</CopyToClipboard>
    </>
  )
}

export default FontSizeExample
