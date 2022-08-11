import React from 'react'

interface Props {
  name: string
  selectedCategory: string
  setCategory: (category: string) => void
}

const CategoryButton = ({
  name,
  selectedCategory,
  setCategory,
}: Props): JSX.Element => {
  return (
    <button
      className={`text-xl sm:text-xl md:text-2xl font-medium tracking-normal px-2 md:px-4 pb-2 border-b-2 border-transparent ${selectedCategory !== name.toLowerCase() && 'hover:border-slate-300 dark:hover:border-slate-600'} ${selectedCategory === name.toLowerCase() &&
        'dark:border-indigo-400 dark:hover:border-indigo-400 dark:text-indigo-400 border-indigo-600 hover:border-indigo-600 text-indigo-600'
        } `}
      onClick={() => setCategory(name)}>
      {name}
    </button>
  )
}

export default CategoryButton
