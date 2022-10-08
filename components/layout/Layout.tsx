import React, { useState, useEffect } from 'react';
import { Header, Footer, SEO, Title } from './';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props): JSX.Element => {
  const [isDark, setIsDark] = useState(false);

  const isLocalStorageEmpty = () => {
    return !localStorage.getItem('isDarkTheme');
  };

  const setValueToLocal = (value: boolean) => {
    localStorage.setItem('isDarkTheme', `${value}`);
  };

  const toggleThemeHandler = () => {
    const currentTheme = JSON.parse(localStorage.getItem('isDarkTheme'));

    setIsDark(() => !currentTheme);
    document.querySelector('html').classList.toggle('dark');
    setValueToLocal(!currentTheme);
  };

  useEffect(() => {
    // toggles theme based on system theme
    const systemThemeToggle = () => {
      // true if dark theme
      const systemTheme = window.matchMedia(
        '(prefers-color-scheme: dark)'
      ).matches;

      if (systemTheme) document.querySelector('html').classList.add('dark');
      if (!systemTheme) document.querySelector('html').classList.remove('dark');

      setIsDark(systemTheme);
      setValueToLocal(systemTheme);
    };

    if (isLocalStorageEmpty()) systemThemeToggle();
    else {
      const isDarkTheme = JSON.parse(localStorage.getItem('isDarkTheme'));
      isDarkTheme && document.querySelector('html').classList.add('dark');
      setIsDark(() => isDarkTheme);
    }

    // watches for system theme change
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', systemThemeToggle);

    return () => {
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .removeEventListener('change', systemThemeToggle);
    };
  }, []);

  return (
    <div className='relative flex flex-col max-w-4xl min-h-screen pt-4 pb-8 mx-auto overflow-clip'>
      <SEO isDark={isDark} />
      <Header isDark={isDark} toggleThemeHandler={toggleThemeHandler} />
      <main className='relative'>
        <Title />
        {children}
      </main>
      <Footer isDark={isDark} />
    </div>
  );
};

export default Layout;
