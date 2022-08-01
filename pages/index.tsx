import type { NextPage } from 'next'
import { FontSizeConverter } from '../components'

const Home: NextPage = () => {
  return (
    <main className='p-4'>
      <h1 className='mb-12 text-4xl font-bold'>Tailwind Helper</h1>
      <FontSizeConverter />
    </main>
  )
}

export default Home
