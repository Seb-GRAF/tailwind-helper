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
      <nav className='nav sticky z-30 w-full top-4 after:contents-[""] after:w-full after:h-auto after:-bottom-0 after:absolute after:-top-4 after:-z-20 '>
        <div className='w-full px-4 pb-3 mb-2 overflow-x-auto sm:mb-4 sm:pb-4'>
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
