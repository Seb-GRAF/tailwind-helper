const Footer = (): JSX.Element => {
  return (
    <footer className='flex flex-col items-center pt-8 mt-16 border-t border-slate-300 dark:border-slate-700 text-slate-500 dark:text-slate-500'>
      <div className='flex items-center gap-2'>
        <div>&copy; {new Date().getFullYear()} -</div>
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
          className='underline underline-offset-2 hover:text-indigo-700 dark:hover:text-indigo-400'>
          Seb Graf
        </a>
      </div>
    </footer>
  )
}

export default Footer
