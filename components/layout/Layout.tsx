import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { Header, Footer } from './'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  const [isDark, setIsDark] = useState(false)

  const isLocalStorageEmpty = () => {
    return !localStorage.getItem('isDarkTheme')
  }

  const setValueToLocal = (value: boolean) => {
    localStorage.setItem('isDarkTheme', `${value}`)
  }

  const toggleThemeHandler = () => {
    const currentTheme = JSON.parse(localStorage.getItem('isDarkTheme'))

    setIsDark(() => !currentTheme)
    document.querySelector('html').classList.toggle('dark')
    setValueToLocal(!currentTheme)
  }

  useEffect(() => {
    // toggles theme based on system theme
    const systemThemeToggle = () => {
      // true if dark theme
      const systemTheme = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches

      if (systemTheme) document.querySelector('html').classList.add('dark')
      if (!systemTheme) document.querySelector('html').classList.remove('dark')

      setIsDark(systemTheme)
      setValueToLocal(systemTheme)
    }

    if (isLocalStorageEmpty()) systemThemeToggle()
    else {
      const isDarkTheme = JSON.parse(localStorage.getItem('isDarkTheme'))
      isDarkTheme && document.querySelector('html').classList.add('dark')
      setIsDark(() => isDarkTheme)
    }

    // watches for system theme change
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', systemThemeToggle)

    return () => {
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .removeEventListener('change', systemThemeToggle)
    }
  }, [])

  return (
    <div className='max-w-4xl min-h-screen p-4 pb-8 mx-auto'>
      <Head>
        <meta name='theme-color' content={isDark ? '#151E32' : '#f1f5f9'} />
        <title key='title'>Tailwindhelper</title>
        <meta
          name='description'
          content='You want to convert a unit to the corresponding tailwind class? You always forget property names? Or you are simply learning tailwind and would like a bit of help visualizing classes? Then this tool might come in handy!'
        />
        <meta key='og_type' property='og:type' content='website' />
        <meta key='og_title' property='og:title' content='Tailwindhelper' />
        <meta
          key='og_description'
          property='og:description'
          content='You want to convert a unit to the corresponding tailwind class? You always forget property names? Or you are simply learning tailwind and would like a bit of help visualizing classes? Then this tool might come in handy!'
        />
        <meta key='og_locale' property='og:locale' content='en_IE' />
        <meta
          key='og_site_name'
          property='og:site_name'
          content='Tailwindhelper'
        />
        <meta key='og_url' property='og:url' content='https://tailwindhelper.com' />
        <meta
          key='og_site_name'
          property='og:site_name'
          content='Tailwindhelper'
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
          content='Tailwindhelper'
        />
        <meta
          key='twitter:description'
          property='twitter:description'
          content='You want to convert a unit to the corresponding tailwind class? You always forget property names? Or you are simply learning tailwind and would like a bit of help visualizing classes? Then this tool might come in handy!'
        />

        <link rel='canonical' href='https://tailwindhelper.com' />

        <link rel='icon' href='/favicon.svg' type='image/svg+xml' />
      </Head>
      <Header isDark={isDark} toggleThemeHandler={toggleThemeHandler} />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
