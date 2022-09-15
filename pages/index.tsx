import type { NextPage } from 'next'
import { useState } from 'react'
import {
  FontHelper,
  LayoutHelper,
  PositionHelper,
  GridHelper,
  ImageHelper,
  Colors,
  Favorites,
  CategoryButton,
} from '../components'

const components = [
  { name: 'font', component: <FontHelper /> },
  { name: 'layout', component: <LayoutHelper /> },
  { name: 'position', component: <PositionHelper /> },
  { name: 'grid', component: <GridHelper /> },
  { name: 'image', component: <ImageHelper /> },
  { name: 'colors', component: <Colors /> },
  { name: 'favorites', component: <Favorites /> },
]

const Home: NextPage = () => {
  const [selectedCategory, SetSelectedCategory] = useState('font')

  const setCategory = (category: string): void => {
    SetSelectedCategory(category.toLowerCase())
  }

  return (
    <div className='relative mt-8 sm:mt-16'>
      {/* CATEGORIES */}
      <nav className='after:backdrop-blur sticky z-30 w-full lg:w-[calc(100%+2rem)] lg:-ml-4 top-4 after:contents-[""] after:w-full after:h-auto after:bottom-2 after:sm:bottom-4 after:absolute after:-top-4 after:-z-20 after:bg-gray-200/60 after:dark:bg-slate-900/60 after:dark:shadow-xl after:dark:shadow-slate-900/20'>
        <div className='relative pb-2 mb-3 overflow-x-auto w-[calc(100%-2rem)] sm:mb-4 sm:pb-4 left-4'>
          <div className='sm:px-4 md:px-0 relative flex justify-between flex-grow min-w-full gap-2 w-fit md:justify-start sm:gap-4 after:content-[""] after:absolute after:w-full after:h-px after:bottom-0 after:-z-10 after:left-0 after:bg-slate-300 after:dark:bg-slate-700'>
            {components.map(({ name }) => (
              <div
                className='last:md:flex last:md:justify-end last:md:w-full'
                key={`category-${name}`}>
                <CategoryButton
                  selectedCategory={selectedCategory}
                  setCategory={setCategory}
                  name={name}
                />
              </div>
            ))}
          </div>
        </div>
      </nav>

      {/* HELPERS */}
      <div className='px-4'>
        {components.map(({ name, component }) => (
          <section className={`${selectedCategory !== name ? 'hidden' : ''}`}>
            {component}
          </section>
        ))}
      </div>
    </div>
  )
}

export default Home
