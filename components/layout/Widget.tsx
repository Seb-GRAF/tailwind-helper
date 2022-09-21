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
    <div className='flex flex-col items-center justify-center gap-4 w-44'>
      <div className='flex flex-col items-center gap-4'>
        <h2 className='text-lg font-semibold'>{helperName}</h2>
      </div>
      {children}
    </div>
  )
}

const WidgetResult = ({ children }: Props): JSX.Element => {
  return (
    <div className='flex flex-wrap items-center justify-center w-full gap-4 underline decoration-dotted underline-offset-4 decoration-1 decoration-slate-700/30 dark:decoration-gray-200/30'>
      {children}
    </div>
  )
}

export { WidgetWrapper, WidgetConverter, WidgetResult }
