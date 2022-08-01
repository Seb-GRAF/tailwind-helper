import type { NextPage } from 'next'
import { FontHelper } from '../components'

const Home: NextPage = () => {
  return (
    <main className='p-4'>
      <h1 className='mb-12 text-4xl font-bold'>Tailwind Helper</h1>
      <FontHelper />
    </main>
  )
}

export default Home
