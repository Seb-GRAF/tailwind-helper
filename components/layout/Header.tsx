import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Header = (): JSX.Element => {
  const router = useRouter()
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

  useEffect(() => {
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
    <header className='relative flex justify-end w-full pb-6'>
      <button
        className='w-8 h-8 rounded-full bg-slate-800 dark:bg-slate-600'
        onClick={toggleThemeHandler}>
        {isDark ? '🌞' : '🌙'}
      </button>
    </header>
  )
}

export default Header
