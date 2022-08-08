import Head from 'next/head'
import type { NextPage } from 'next'
import { useState } from 'react'
import { FontHelper, Header, Colors, CategoryButton } from '../components'
import LayoutHelper from '../components/LayoutHelper'

const Home: NextPage = () => {
  const [selectedCategory, SetSelectedCategory] = useState('font')

  const setCategory = (category: string): void => {
    SetSelectedCategory(category.toLowerCase())
  }

  return (
    <main className='max-w-4xl min-h-screen p-4 pb-12 mx-auto'>
      <Head>
        <title key='title'>Tailwind Helper</title>
        <meta
          name='description'
          content='You want to convert a unit to the corresponding tailwind class? You always forget property names? Or you are simply learning tailwind and would like a bit of help visualizing classes? Then this tool might come in handy!'
        />
        <meta key='og_type' property='og:type' content='website' />
        <meta key='og_title' property='og:title' content='Tailwind Helper' />
        <meta
          key='og_description'
          property='og:description'
          content='You want to convert a unit to the corresponding tailwind class? You always forget property names? Or you are simply learning tailwind and would like a bit of help visualizing classes? Then this tool might come in handy!'
        />
        <meta key='og_locale' property='og:locale' content='en_IE' />
        <meta
          key='og_site_name'
          property='og:site_name'
          content='Tailwind Helper'
        />
        {/* <meta key='og_url' property='og:url' content={canonical ?? DOMAIN} /> */}
        <meta
          key='og_site_name'
          property='og:site_name'
          content='Tailwind Helper'
        />

        <meta name='robots' content='index,follow' />

        <meta
          key='twitter:card'
          name='twitter:card'
          content='summary_large_image'
        />
        <meta
          key='twitter:title'
          property='twitter:title'
          content='Tailwind Helper'
        />
        <meta
          key='twitter:description'
          property='twitter:description'
          content='You want to convert a unit to the corresponding tailwind class? You always forget property names? Or you are simply learning tailwind and would like a bit of help visualizing classes? Then this tool might come in handy!'
        />

        {/* <link rel='canonical' href={canonical ?? DOMAIN} /> */}

        <link rel='icon' href='/favicon.svg' type='image/svg+xml' />
      </Head>
      <Header />
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
    </main>
  )
}

export default Home
