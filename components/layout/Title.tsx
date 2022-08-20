import { useEffect, useState } from 'react'
import Link from 'next/link'

const Home = (): JSX.Element => {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(true)

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
    <div className='text-lg text-center text-slate-600 dark:text-slate-400'>
      {/* HIDE TITLE AND DESCRIPTION */}
      <button
        onClick={toggleDescription}
        className='absolute z-10 text-xl right-2 sm:right-3 top-4 hover:text-indigo-600 hover:dark:text-indigo-400'>
        <span className='sr-only'>Hide/Show Description</span>
        <span>{isDescriptionOpen ? '⊖' : '⊕'}</span>
      </button>

      {/* TITLE */}
      <Link passHref href='/'>
        <a>
          <h1 className='absolute top-0 items-end justify-center invisible hidden text-5xl font-semibold origin-left -translate-x-1/2 index-title left-1/2 sm:flex text-slate-700 dark:text-slate-300'>
            <div className='w-16 h-16'>
              <svg
                width='100%'
                height='100%'
                viewBox='0 0 54 54'
                fill='currentColor'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M24.334 20.5311V48.5554H13.492V11.4046C14.968 11.4046 17.8675 14.7304 19.2701 16.2468C20.6727 17.7631 21.6014 18.7947 24.334 20.5311Z'
                  fill='url(#paint0_linear_201_3)'
                />
                <path
                  d='M30.7029 31.8165C29.4686 31.8165 28.0615 32.1192 26.4816 32.7244C16.7834 36.4399 19.289 38.468 20.8533 37.1126C21.6584 36.415 20.8533 48.5259 20.8533 30.8438C21.668 28.1778 25.0252 26.3692 27.0001 25.5117C28.9749 24.6543 31.2213 23.7211 33.2948 23.7211C36.8989 23.7211 39.639 24.9064 41.5152 27.277C43.3913 29.5972 44.3293 32.8757 44.3293 37.1126V48.5554H34.4517V38.842C34.4517 34.6051 34.1095 31.8165 30.7029 31.8165Z'
                  fill='url(#paint1_linear_201_3)'
                />
                <path
                  d='M1.67255 15.225C3.92388 5.74568 9.5522 1.00604 18.5575 1.00604C32.0655 1.00604 33.754 11.6702 40.508 13.4476C45.0106 14.6325 48.9505 12.8551 52.3275 8.11551C50.0761 17.5948 44.4478 22.3344 35.4425 22.3344C21.9345 22.3344 20.246 11.6702 13.492 9.89287C8.98937 8.70796 5.04954 10.4853 1.67255 15.225Z'
                  fill='url(#paint2_linear_201_3)'
                />
                <defs>
                  <linearGradient
                    id='paint0_linear_201_3'
                    x1='52.3275'
                    y1='24.7807'
                    x2='-4.39527'
                    y2='24.7807'
                    gradientUnits='userSpaceOnUse'>
                    <stop offset='0.00144968' stopColor='#4F46E5' />
                    <stop offset='0.985185' stopColor='#EC4899' />
                  </linearGradient>
                  <linearGradient
                    id='paint1_linear_201_3'
                    x1='52.3275'
                    y1='24.7807'
                    x2='-4.39527'
                    y2='24.7807'
                    gradientUnits='userSpaceOnUse'>
                    <stop offset='0.00144968' stopColor='#4F46E5' />
                    <stop offset='0.985185' stopColor='#EC4899' />
                  </linearGradient>
                  <linearGradient
                    id='paint2_linear_201_3'
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
            <span className=''>Tailwindhelper</span>
          </h1>
        </a>
      </Link>
      {/* DESCRIPTION */}
      <div className='relative'>
        <p className='invisible mt-4 mb-12 overflow-hidden title-description sm:mt-24 description max-h-44 sm:max-h-18 sm:indent-0 indent-8'>
          You always forget property names? You want to convert a unit to the
          corresponding tailwind class? Or you are simply learning tailwind and
          would like a bit of help visualizing classes? Then this tool might
          come in handyǃ
        </p>
      </div>
    </div>
  )
}

export default Home
