import Head from 'next/head'
import type { NextPage } from 'next'
import { useState } from 'react'
import { FontHelper, Layout, Colors, CategoryButton } from '../components'
import LayoutHelper from '../components/LayoutHelper'

const Home: NextPage = () => {
  const [selectedCategory, SetSelectedCategory] = useState('font')

  const setCategory = (category: string): void => {
    SetSelectedCategory(category.toLowerCase())
  }

  return (
    <Layout>
      <div className='mb-12 text-lg text-center text-slate-600 dark:text-slate-400'>
        <h1 className='items-center justify-center hidden pr-1 text-4xl font-extrabold text-transparent sm:flex sm:gap-4 sm:flex-row md:text-7xl sm:text-6xl bg-clip-text bg-gradient-to-r from-pink-500 dark:from-pink-500 dark:to-indigo-400 to-indigo-600'>
          <span className='flex items-center'>
            <svg
              className='w-12 h-12 mr-2 text-pink-500 md:w-14 md:h-14'
              width='54'
              height='54'
              viewBox='0 0 54 54'
              fill='currentColor'
              xmlns='http://www.w3.org/2000/svg'>
              <path d='M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z'></path>
            </svg>
            Tailwind
          </span>
          <span>Helper</span>
        </h1>
        <p className='mt-6'>
          You want to convert a unit to the corresponding tailwind class? You
          always forget property names? Or you are simply learning tailwind and
          would like a bit of help visualizing classes? Then this tool might
          come in handy!
        </p>
      </div>
      <nav className='flex w-full gap-4 mb-4 border-b sm:mb-8 border-slate-300 dark:border-slate-700'>
        <CategoryButton
          selectedCategory={selectedCategory}
          setCategory={setCategory}
          name={'Font'}
        />
        <CategoryButton
          selectedCategory={selectedCategory}
          setCategory={setCategory}
          name={'Layout'}
        />
        <CategoryButton
          selectedCategory={selectedCategory}
          setCategory={setCategory}
          name={'Colors'}
        />
      </nav>
      <div className={`${selectedCategory !== 'font' && 'hidden'}`}>
        <FontHelper />
      </div>
      <div className={`${selectedCategory !== 'layout' && 'hidden'}`}>
        <LayoutHelper />
      </div>
      <div className={`${selectedCategory !== 'colors' && 'hidden'}`}>
        <Colors />
      </div>
    </Layout>
  )
}

export default Home
