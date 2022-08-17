import type { NextPage } from 'next'
import Link from 'next/link'

const NotFound: NextPage = () => {
  return (
    <div className='flex flex-col items-center justify-center flex-grow w-full h-[60vh]'>
      <h2 className='text-3xl'>Page not found</h2>
      <p className='mb-4'>It appears this page doesn&apos;t exist yet.</p>
      <Link href='/' passHref>
        <a className='text-xl underline underline-offset-2 decoration-slate-400 dark:decoration-slate-700 hover:text-indigo-700 dark:hover:text-indigo-400'>
          Home
        </a>
      </Link>
    </div>
  )
}

export default NotFound
