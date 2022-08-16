import Image from 'next/image'

interface Props {
  isDark: boolean
}

const Footer = ({ isDark }: Props): JSX.Element => {
  return (
    <footer className='flex flex-col items-center justify-end flex-grow mt-16 justify-self-end text-slate-500 dark:text-slate-500'>
      <div className='flex flex-col flex-wrap items-center justify-center w-full gap-8 pt-8 border-t sm:flex-row sm:gap-10 whitespace-nowrap border-slate-300 dark:border-slate-700'>
        {/* COPYRIGHT AND NAME */}
        <div className='flex items-center gap-2'>
          <div>&copy; {new Date().getFullYear()} |</div>
          Made with{' '}
          <svg
            viewBox='0 0 1792 1792'
            preserveAspectRatio='xMidYMid meet'
            xmlns='http://www.w3.org/2000/svg'
            className='h-4 text-pink-500'>
            <path
              d='M896 1664q-26 0-44-18l-624-602q-10-8-27.5-26T145 952.5 77 855 23.5 734 0 596q0-220 127-344t351-124q62 0 126.5 21.5t120 58T820 276t76 68q36-36 76-68t95.5-68.5 120-58T1314 128q224 0 351 124t127 344q0 221-229 450l-623 600q-18 18-44 18z'
              fill='currentColor'></path>
          </svg>{' '}
          by{' '}
          <a
            href='https://seb-graf.com'
            className='underline underline-offset-2 decoration-slate-400 dark:decoration-slate-700 hover:text-indigo-700 dark:hover:text-indigo-400'>
            Seb Graf
          </a>
          <a
            className='ml-2 hover:text-indigo-700 dark:hover:text-indigo-400'
            href='https://github.com/seb-graf/tailwind-helper'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'>
              <path
                fill='currentColor'
                d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'
              />
            </svg>
          </a>
        </div>

        {/* PRODUCT HUNT */}
        <a
          href='https://www.producthunt.com/posts/tailwind-helper?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-tailwind-helper'
          target='_blank'
          rel='noreferrer'>
          <img
            src={`https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=355963&theme=${
              isDark ? 'dark' : 'neutral'
            }`}
            alt='Tailwind Helper - Convert and visualize your tailwind classes  | Product Hunt'
            className='transition-opacity dark:opacity-60 opacity-70 saturate-200 dark:hover:opacity-90 hover:opacity-90 w-52 dark:hue-rotate-[290deg] dark:brightness-150'
            // width='210'
            // height='54'
          />
        </a>
      </div>
    </footer>
  )
}

export default Footer
