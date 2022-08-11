import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '../components'
import { FavoritesProvider } from '../contexts/FavoritesProvider'



function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FavoritesProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </FavoritesProvider>
  )
}

export default MyApp
