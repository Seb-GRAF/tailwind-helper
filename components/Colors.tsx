import { Header } from '.'
import { colors } from '../utils/colors'
import { CopyToClipboard } from '.'

const Colors = (): JSX.Element => {
  return (
    <section className='pb-12 mx-auto'>
      <div className='relative grid grid-cols-5 gap-2 p-0 shadow-md md:pb-0 md:bg-white md:p-8 md:gap-3 min-w-fit md:dark:shadow-inset-sm md:dark:shadow-white/5 md:rounded-xl md:dark:bg-slate-800 '>
        {colors.map((color, index) => {
          if (color.class === 'white' || color.class === 'black') return
          return (
            <div
              key={color.class}
              className={`flex items-center justify-center flex-col ${
                (index - 2) % 10 > 4 && 'mb-8 md:mb-12'
              }`}>
              <div
                className={`h-10 md:h-12 w-full bg-${color.class} rounded-md shadow-sm`}
              />
              <div className='flex flex-col justify-between w-full md:flex-row'>
                <CopyToClipboard valueToCopy={color.class}>
                  <span className='text-xs whitespace-nowrap'>
                    {color.class}
                  </span>
                </CopyToClipboard>
                <CopyToClipboard valueToCopy={color.hex}>
                  <span className='text-xs opacity-50'>{color.hex}</span>
                </CopyToClipboard>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Colors
