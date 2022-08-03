import type { NextPage } from 'next'
import { useState } from 'react'
import { FontHelper, Header, Colors, CategoryButton } from '../components'

const Home: NextPage = () => {
  const [selectedCategory, SetSelectedCategory] = useState('font helper')

  const setCategory = (category: string): void => {
    SetSelectedCategory(category.toLowerCase())
  }

  return (
    <main className='max-w-4xl p-4 pb-12 mx-auto'>
      <Header />
      <div className='mb-12 text-lg text-center text-slate-600 dark:text-slate-400'>
        <h1 className='mb-6 text-5xl font-extrabold text-transparent md:text-7xl sm:text-6xl bg-clip-text bg-gradient-to-r from-pink-500 dark:from-pink-500 dark:to-indigo-500 to-indigo-600'>
          Tailwind Helper
        </h1>
        <p>
          You are learning Tailwind CSS, you always forget Tailwind class names,
          or you simply want to convert a unit to the closest tailwind class?
          Then this tool might come in handy!
        </p>
      </div>
      <nav className='flex w-full gap-4 mb-4 border-b sm:mb-8 border-slate-300 dark:border-slate-800'>
        <CategoryButton
          selectedCategory={selectedCategory}
          setCategory={setCategory}
          name={'Font Helper'}
        />
        <CategoryButton
          selectedCategory={selectedCategory}
          setCategory={setCategory}
          name={'Colors'}
        />
      </nav>
      <div className={`${selectedCategory !== 'font helper' && 'hidden'}`}>
        <FontHelper />
      </div>
      <div className={`${selectedCategory !== 'colors' && 'hidden'}`}>
        <Colors />
      </div>
    </main>
  )
}

export default Home
