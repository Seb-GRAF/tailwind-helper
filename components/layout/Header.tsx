import React from 'react'
import Link from 'next/link'

interface Props {
  toggleThemeHandler: () => void
  isDark: boolean
}

const Header = ({ toggleThemeHandler, isDark }: Props): JSX.Element => {
  return (
    <header className='relative flex items-center justify-between w-full sm:justify-end border-slate-600'>
      {/* TITLE */}
      <Link passHref href='/'>
        <a>
          <h1 className='flex items-end justify-center sm:hidden'>
            <div className='w-8 h-8'>
              <svg
                width='54'
                height='54'
                viewBox='0 0 54 54'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='w-full h-full'>
                <path
                  d='M24.334 20.5311V48.5554H13.492V11.4046C14.968 11.4046 17.8675 14.7304 19.2701 16.2468C20.6727 17.7631 21.6014 18.7947 24.334 20.5311Z'
                  fill='url(#paint0_linear_201_2)'
                />
                <path
                  d='M30.7029 31.8165C29.4686 31.8165 28.0615 32.1192 26.4816 32.7244C16.7834 36.4399 19.289 38.468 20.8533 37.1126C21.6584 36.415 20.8533 48.5259 20.8533 30.8438C21.668 28.1778 25.0252 26.3692 27.0001 25.5117C28.9749 24.6543 31.2213 23.7211 33.2948 23.7211C36.8989 23.7211 39.639 24.9064 41.5152 27.277C43.3913 29.5972 44.3293 32.8757 44.3293 37.1126V48.5554H34.4517V38.842C34.4517 34.6051 34.1095 31.8165 30.7029 31.8165Z'
                  fill='url(#paint1_linear_201_2)'
                />
                <path
                  d='M1.67255 15.225C3.92388 5.74568 9.5522 1.00604 18.5575 1.00604C32.0655 1.00604 33.754 11.6702 40.508 13.4476C45.0106 14.6325 48.9505 12.8551 52.3275 8.11551C50.0761 17.5948 44.4478 22.3344 35.4425 22.3344C21.9345 22.3344 20.246 11.6702 13.492 9.89287C8.98937 8.70796 5.04954 10.4853 1.67255 15.225Z'
                  fill='url(#paint2_linear_201_2)'
                />
                <defs>
                  <linearGradient
                    id='paint0_linear_201_2'
                    x1='52.3275'
                    y1='24.7807'
                    x2='-4.39527'
                    y2='24.7807'
                    gradientUnits='userSpaceOnUse'>
                    <stop offset='0.00144968' stopColor='#4F46E5' />
                    <stop offset='0.985185' stopColor='#EC4899' />
                  </linearGradient>
                  <linearGradient
                    id='paint1_linear_201_2'
                    x1='52.3275'
                    y1='24.7807'
                    x2='-4.39527'
                    y2='24.7807'
                    gradientUnits='userSpaceOnUse'>
                    <stop offset='0.00144968' stopColor='#4F46E5' />
                    <stop offset='0.985185' stopColor='#EC4899' />
                  </linearGradient>
                  <linearGradient
                    id='paint2_linear_201_2'
                    x1='52.3275'
                    y1='24.7807'
                    x2='-4.39527'
                    y2='24.7807'
                    gradientUnits='userSpaceOnUse'>
                    <stop offset='0.00144968' stopColor='#4F46E5' />
                    <stop offset='0.985185' stopColor='#EC4899' />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span className='block text-xl font-semibold dark:text-slate-300 text-gray-700 leading-[1.1]'>
              Tailwindhelper
            </span>
          </h1>
        </a>
      </Link>

      {/* THEME TOGGLE */}
      <button
        className='w-10 h-10 text-gray-700 transition-colors sm:w-11 sm:h-11 dark:text-slate-400 hover:text-indigo-600 hover:dark:text-indigo-400'
        onClick={toggleThemeHandler}>
        <span className='sr-only'>Toggle dark/light theme</span>
        {isDark ? (
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
            <path
              opacity='1'
              fill='currentColor'
              d='M12 8.73a3.271 3.271 0 1 0 .002 6.542A3.271 3.271 0 0 0 12 8.73zm0 5.6c-1.29 0-2.33-1.04-2.33-2.33S10.71 9.67 12 9.67s2.33 1.04 2.33 2.33-1.04 2.33-2.33 2.33zm0 1.87c.26 0 .47.21.47.47v1.87a.47.47 0 1 1-.94 0v-1.87c0-.26.21-.47.47-.47zm0-8.4a.47.47 0 0 1-.47-.47V5.47a.47.47 0 1 1 .94 0v1.87c0 .25-.21.46-.47.46zM7.8 12c0 .26-.21.47-.47.47H5.47a.47.47 0 1 1 0-.94h1.87c.25 0 .46.21.46.47zm10.73-.47a.47.47 0 1 1 0 .94h-1.87a.47.47 0 1 1 0-.94h1.87zM8.37 9.03L7.05 7.71a.547.547 0 0 1-.09-.28c0-.26.21-.47.47-.47.11 0 .2.04.28.09l1.32 1.32c.08.08.14.2.14.33s-.05.25-.14.33c-.08.08-.2.14-.33.14s-.25-.06-.33-.14zm7.26 5.94l1.32 1.32c.06.08.09.18.09.28 0 .26-.21.47-.47.47-.11 0-.2-.04-.28-.09l-1.32-1.32a.444.444 0 0 1-.14-.34c0-.26.21-.47.47-.47.13.01.24.06.33.15zm-.33-5.8a.47.47 0 0 1-.47-.47c0-.13.05-.25.14-.33l1.32-1.32c.08-.11.22-.19.37-.19.26 0 .47.21.47.47 0 .15-.07.29-.19.37l-1.32 1.32a.38.38 0 0 1-.32.15zm-6.93 5.8c.08-.09.2-.15.33-.15.26 0 .47.21.47.47 0 .13-.06.25-.14.34l-1.32 1.32c-.08.05-.18.09-.28.09a.47.47 0 0 1-.47-.47c0-.11.04-.2.09-.28l1.32-1.32z'
            />
          </svg>
        ) : (
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 26 26'
            className='pl-1'>
            <path
              d='M18.9 14.4c-.2-.2-.4-.2-.6-.1-.9.4-1.8.7-2.8.7-3.5 0-6.4-2.9-6.4-6.4 0-1 .2-1.9.7-2.8.1-.2.1-.4-.1-.6-.2-.2-.5-.2-.6-.1A7.19 7.19 0 0 0 5 11.6c0 4.1 3.3 7.4 7.4 7.4 2.8 0 5.3-1.6 6.6-4.1 0-.1 0-.4-.1-.5zM12.4 18C8.9 18 6 15.1 6 11.6c0-1.9.9-3.6 2.3-4.8C8.1 7.4 8 8 8 8.6c0 4.1 3.3 7.4 7.4 7.4.6 0 1.2-.1 1.8-.2-1.2 1.3-2.9 2.2-4.8 2.2z'
              opacity='1'
              fill='currentColor'
            />
          </svg>
        )}
      </button>
    </header>
  )
}

export default Header
