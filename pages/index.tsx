import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import {
  FontHelper,
  LayoutHelper,
  PositionHelper,
  Colors,
  Favorites,
  CategoryButton,
} from '../components'

const Home: NextPage = () => {
  const [selectedCategory, SetSelectedCategory] = useState('font')
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(true)

  const setCategory = (category: string): void => {
    SetSelectedCategory(category.toLowerCase())
  }

  const toggleDescription = (): void => {
    const description = document.querySelector('.description')
    const indexTitle = document.querySelector('.index-title')

    description.classList.toggle('max-h-0')
    description.classList.toggle('max-h-44')
    description.classList.toggle('sm:max-h-18')
    description.classList.toggle('sm:mt-24')

    indexTitle.classList.toggle('top-0')
    indexTitle.classList.toggle('-top-14')
    indexTitle.classList.toggle('-translate-x-1/2')
    indexTitle.classList.toggle('left-1/2')
    indexTitle.classList.toggle('left-0')
    indexTitle.classList.toggle('scale-50')

    setIsDescriptionOpen((prev) => !prev)
    localStorage.setItem(
      'isDescriptionOpen',
      JSON.stringify(!isDescriptionOpen)
    )
  }

  // restores description state
  useEffect(() => {
    const description = document.querySelector('.description')
    const indexTitle = document.querySelector('.index-title')

    if (JSON.parse(localStorage.getItem('isDescriptionOpen')) === false) {
      description.classList.add('max-h-0')
      description.classList.remove('max-h-44')
      description.classList.remove('sm:max-h-18')
      description.classList.remove('sm:mt-24')

      indexTitle.classList.remove('top-0')
      indexTitle.classList.add('-top-14')
      indexTitle.classList.remove('-translate-x-1/2')
      indexTitle.classList.remove('left-1/2')
      indexTitle.classList.add('left-0')
      indexTitle.classList.add('scale-50')

      setIsDescriptionOpen(false)
    }

    setTimeout(() => {
      description.classList.add('transition-[margin,max-height]')
      indexTitle.classList.add('transition-[left,top,transform]')
      description.classList.add('duration-300')
      indexTitle.classList.add('duration-300')
    }, 100)

    description.classList.remove('invisible')
    indexTitle.classList.remove('invisible')
  }, [])

  return (
    <div className='relative'>
      {/* CATEGORIES */}
      <nav className='w-full pb-3 mb-2 overflow-x-auto sm:pb-4 sm:mb-4'>
        <div className='relative flex justify-between gap-2 min-w-full w-fit flex-grow sm:justify-start sm:gap-4 after:content-[""] after:absolute after:w-full after:h-px after:bottom-0 after:-z-10 after:left-0 after:bg-slate-300 after:dark:bg-slate-700'>
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
      </nav>

      {/* HELPERS */}
      <section className={`${selectedCategory !== 'font' ? 'hidden' : ''}`}>
        <FontHelper />
      </section>
      <section className={`${selectedCategory !== 'layout' ? 'hidden' : ''}`}>
        <LayoutHelper />
      </section>
      <section className={`${selectedCategory !== 'position' ? 'hidden' : ''}`}>
        <PositionHelper />
      </section>
      <section className={`${selectedCategory !== 'colors' ? 'hidden' : ''}`}>
        <Colors />
      </section>
      <section
        className={`${selectedCategory !== 'favorites' ? 'hidden' : ''}`}>
        <Favorites />
      </section>
    </div>
  )
}

export default Home
