import Head from 'next/head'

interface Props {
  isDark: boolean
}

const SEO = ({ isDark }: Props): JSX.Element => {
  const description =
    'A tailwind multi-tool to convert and visualize your classes properties.'
  const title = 'Tailwindhelper'
  return (
    <Head>
      <link rel='icon' href='/favicon.png' type='image/svg+xml' />
      <link rel='canonical' href='https://tailwindhelper.com' />
      <meta name='theme-color' content={isDark ? '#0f172a' : '#e5e7eb'} />

      <title>{title}</title>
      <meta name='description' content={description} />

      <meta property='og:type' content='website' />
      <meta property='og:url' content='https://www.tailwindhelper.com' />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content='/og-image.png' />

      <meta property='twitter:card' content='summary' />
      <meta property='twitter:url' content='https://www.tailwindhelper.com/' />
      <meta property='twitter:title' content={title} />
      <meta property='twitter:creator' content='Seb Graf' />
      <meta property='twitter:description' content={description} />
      <meta property='twitter:image' content='/og-image.png' />

      <meta name='application-name' content={title} />
      <meta name='apple-mobile-web-app-capable' content='yes' />
      <meta name='apple-mobile-web-app-status-bar-style' content='default' />
      <meta name='apple-mobile-web-app-title' content={title} />
      <meta name='mobile-web-app-capable' content='yes' />
      <meta name='format-detection' content='telephone=no' />
    </Head>
  )
}

export default SEO
