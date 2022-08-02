import type { NextPage } from 'next'
import { FontHelper, Header } from '../components'

const Home: NextPage = () => {
  return (
    <main className='max-w-4xl px-4 py-12 mx-auto'>
      <Header />
      <div className='mb-12 text-lg text-center text-slate-600 dark:text-slate-400'>
        <h1 className='mb-4 text-5xl font-extrabold text-transparent md:text-7xl sm:text-6xl bg-clip-text bg-gradient-to-r from-pink-600 dark:from-pink-400 dark:to-indigo-400 to-indigo-600'>
          Tailwind Helper
        </h1>
        <p>
          You are learning Tailwind CSS, you always forget Tailwind class names,
          or you simply want to convert a unit to the closest tailwind class?
          Then this tool might come in handy!
        </p>
      </div>
      <FontHelper />
    </main>
  )
}

export default Home
