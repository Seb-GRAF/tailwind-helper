import Head from 'next/head'

interface Props {
  isDark: boolean
}

const description =
  'A tailwind multi-tool to convert and visualize your classes properties.'
const title = 'Tailwindhelper'

const SEO = ({ isDark }: Props): JSX.Element => {
  return (
    <>
      <Head>
        <meta property='og:title' content={title} />
        <meta property='twitter:title' content={title} />
        <meta property='og:type' content='website' />
        <meta property='twitter:card' content='summary' />
        <meta property='twitter:creator' content='Seb Graf' />
        <meta property='description' content={description} />
        <meta property='og:description' content={description} />
        <meta property='twitter:description' content={description} />
        <meta property='og:image' content='/og-image.png' />
        <meta property='og:url' content='https://tailwindhelper.com' />
        <link rel='canonical' href='https://tailwindhelper.com' />

        <link rel='icon' href='/favicon.svg' type='image/svg+xml' />

        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta name='theme-color' content='#ffffff' />

        <meta name='application-name' content='Yago.io' />
        <meta name='apple-mobile-web-app-capable' content='yes' />
        <meta name='apple-mobile-web-app-status-bar-style' content='default' />
        <meta name='apple-mobile-web-app-title' content='Yago.io' />
        <meta name='description' content={description} />
        <meta name='format-detection' content='telephone=no' />
        <meta name='mobile-web-app-capable' content='yes' />
        <meta
          name='msapplication-TileColor'
          content={isDark ? '#151E32' : '#E4E7EB'}
        />
        <meta name='msapplication-tap-highlight' content='no' />
        <meta name='theme-color' content={isDark ? '#151E32' : '#E4E7EB'} />

        <meta key='og_type' property='og:type' content='website' />
      </Head>
    </>
  )
}

export default SEO
