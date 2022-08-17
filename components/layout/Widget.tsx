import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface WidgetConverterProps {
  children: ReactNode
  helperName: string
}

const WidgetWrapper = ({ children }: Props): JSX.Element => {
  return (
    <section className='relative flex flex-col items-center justify-center flex-grow gap-4 p-8 bg-white shadow-md odd:last:sm:col-span-2 dark:shadow-inset-outset-md rounded-xl shadow-gray-400/30 dark:bg-slate-800 dark:ring-1 dark:ring-inset dark:ring-slate-700/50'>
      {children}
    </section>
  )
}

const WidgetConverter = ({
  children,
  helperName,
}: WidgetConverterProps): JSX.Element => {
  return (
    <form className='flex flex-col items-center justify-center gap-4 w-44'>
      <div className='flex flex-col items-center gap-4'>
        <label htmlFor={helperName} className='text-lg font-semibold'>
          {helperName}
        </label>
      </div>
      {children}
    </form>
  )
}

const WidgetResult = ({ children }: Props): JSX.Element => {
  return (
    <div className='flex items-center justify-center w-full gap-4'>
      {children}
      <svg
        width='24'
        height='24'
        fill='none'
        stroke='currentColor'
        strokeWidth='1.5'>
        <path d='M8 16c0 1.886 0 2.828.586 3.414C9.172 20 10.114 20 12 20h4c1.886 0 2.828 0 3.414-.586C20 18.828 20 17.886 20 16v-4c0-1.886 0-2.828-.586-3.414C18.828 8 17.886 8 16 8m-8 8h4c1.886 0 2.828 0 3.414-.586C16 14.828 16 13.886 16 12V8m-8 8c-1.886 0-2.828 0-3.414-.586C4 14.828 4 13.886 4 12V8c0-1.886 0-2.828.586-3.414C5.172 4 6.114 4 8 4h4c1.886 0 2.828 0 3.414.586C16 5.172 16 6.114 16 8'></path>
      </svg>
    </div>
  )
}

export { WidgetWrapper, WidgetConverter, WidgetResult }
