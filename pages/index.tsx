import type { NextPage } from 'next';
import { useState } from 'react';
import {
  FontHelper,
  LayoutHelper,
  PositionHelper,
  GridHelper,
  ImageHelper,
  Colors,
  Favorites,
  Tabs,
} from '../components';
import { motion, AnimatePresence } from 'framer-motion';

const components = [
  { name: 'font', component: <FontHelper /> },
  { name: 'layout', component: <LayoutHelper /> },
  { name: 'position', component: <PositionHelper /> },
  { name: 'grid', component: <GridHelper /> },
  { name: 'image', component: <ImageHelper /> },
  { name: 'colors', component: <Colors /> },
  { name: 'favorites', component: <Favorites /> },
];

const Home: NextPage = () => {
  const [selectedCategory, SetSelectedCategory] = useState('font');

  const setCategory = (category: string): void => {
    SetSelectedCategory(category.toLowerCase());
  };

  return (
    <div className='relative mt-8 sm:mt-16'>
      {/* CATEGORIES */}
      <div className='after:backdrop-blur sticky z-30 w-full lg:w-[calc(100%+2rem)] lg:-ml-4 top-0 after:contents-[""] after:w-full after:h-auto after:bottom-1 after:absolute after:-top-4 after:-z-20 after:bg-gray-200/60 after:dark:bg-slate-900/60 after:dark:shadow-xl after:dark:shadow-slate-900/20'>
        <Tabs
          tabsData={components.map((tab) => ({
            title: tab.name,
            slug: tab.name,
            selectedCategory,
            setCategory,
          }))}
        />
      </div>

      {/* HELPERS */}
      <div className='px-4'>
        <AnimatePresence mode='wait' initial={false}>
          {components.map(({ name, component }) => {
            return (
              selectedCategory === name && (
                <motion.section
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{
                    type: 'tween',
                    ease: 'easeInOut',
                    duration: 0.3,
                  }}
                  // className={`${selectedCategory !== name ? 'hidden' : ''}`}
                  key={`component-${name}`}>
                  {component}
                </motion.section>
              )
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Home;
