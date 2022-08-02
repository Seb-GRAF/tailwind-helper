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
    <section className='relative flex flex-col items-center justify-between flex-grow gap-8 p-8 text-white min-w-fit shadow-inset-sm shadow-white/5 rounded-xl bg-slate-800'>
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
    <div className='flex items-center justify-center w-full gap-6 '>
      {children}
    </div>
  )
}
