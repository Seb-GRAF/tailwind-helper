import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

interface WidgetConverterProps {
  children: ReactNode
  helperName: string
}

export const WidgetWrapper = ({ children }: Props): JSX.Element => {
  return (
    <section className='relative flex flex-col items-center justify-between flex-grow gap-8 p-8 bg-white shadow-md odd:last:sm:col-span-2 widget dark:shadow-inset-sm dark:shadow-white/5 rounded-xl shadow-slate-200 dark:bg-slate-800 ring-1 ring-inset dark:ring-slate-700/50 ring-slate-300/30'>
      {children}
    </section>
  )
}

export const WidgetConverter = ({
  children,
  helperName,
}: WidgetConverterProps): JSX.Element => {
  return (
    <form className='flex flex-col items-center justify-center w-full gap-4'>
      <div className='flex flex-col items-center gap-4'>
        <label htmlFor='fontWeight' className='text-lg'>
          {helperName}
        </label>
      </div>
      {children}
    </form>
  )
}

export const WidgetResult = ({ children }: Props): JSX.Element => {
  return (
    <div className='flex items-center justify-center w-full gap-4 whitespace-nowrap '>
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
