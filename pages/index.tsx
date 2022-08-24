import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import {
  FontHelper,
  LayoutHelper,
  PositionHelper,
  GridHelper,
  Colors,
  Favorites,
  CategoryButton,
} from '../components'

const Home: NextPage = () => {
  const [selectedCategory, SetSelectedCategory] = useState('font')

  const setCategory = (category: string): void => {
    SetSelectedCategory(category.toLowerCase())
  }

  return (
    <div className='relative'>
      {/* CATEGORIES */}
      <nav className='after:backdrop-blur-xl sticky z-30 w-full lg:w-[calc(100%+2rem)] lg:-ml-4 top-4 after:contents-[""] after:w-full after:h-auto after:bottom-2 after:sm:bottom-4 after:absolute after:-top-6 after:-z-20 after:bg-gray-200/70 after:dark:bg-slate-900/70'>
        <div className='lg:px-4 relative pb-2 mb-3 overflow-x-auto w-[calc(100%-2rem)] sm:mb-4 sm:pb-4 left-4'>
          <div className='relative flex justify-between flex-grow min-w-full gap-2 w-fit sm:justify-start sm:gap-4 after:content-[""] after:absolute after:w-full after:h-px after:bottom-0 after:-z-10 after:left-0 after:bg-slate-300 after:dark:bg-slate-700'>
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
              name={'Position'}
            />
            <CategoryButton
              selectedCategory={selectedCategory}
              setCategory={setCategory}
              name={'Grid'}
            />
            <CategoryButton
              selectedCategory={selectedCategory}
              setCategory={setCategory}
              name={'Colors'}
            />
            <div className='sm:flex sm:justify-end sm:w-full'>
              <CategoryButton
                selectedCategory={selectedCategory}
                setCategory={setCategory}
                name={'Favorites'}
              />
            </div>
          </div>
        </div>
      </nav>

      {/* HELPERS */}
      <div className='px-4'>
        <section className={`${selectedCategory !== 'font' ? 'hidden' : ''}`}>
          <FontHelper />
        </section>
        <section className={`${selectedCategory !== 'layout' ? 'hidden' : ''}`}>
          <LayoutHelper />
        </section>
        <section
          className={`${selectedCategory !== 'position' ? 'hidden' : ''}`}>
          <PositionHelper />
        </section>
        <section className={`${selectedCategory !== 'grid' ? 'hidden' : ''}`}>
          <GridHelper />
        </section>
        <section className={`${selectedCategory !== 'colors' ? 'hidden' : ''}`}>
          <Colors />
        </section>
        <section
          className={`${selectedCategory !== 'favorites' ? 'hidden' : ''}`}>
          <Favorites />
        </section>
      </div>
    </div>
  )
}

export default Home
