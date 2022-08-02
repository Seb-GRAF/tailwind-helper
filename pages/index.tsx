import type { NextPage } from 'next'
import { FontHelper } from '../components'

const Home: NextPage = () => {
  return (
    <main className='max-w-5xl p-4 mx-auto'>
      <h1 className='mb-12 text-4xl font-bold'>Tailwind cheat codes</h1>
      <FontHelper />
    </main>
  )
}

export default Home
