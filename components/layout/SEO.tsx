import Head from 'next/head'

interface Props {
  isDark: boolean
}

const SEO = ({ isDark }: Props): JSX.Element => {
  return (
    <>
      <Head>
        <meta name='theme-color' content={isDark ? '#151E32' : '#f1f5f9'} />
        <title key='title'>Tailwindhelper</title>
        <meta
          name='description'
          content='You want to convert a unit to the corresponding tailwind class? You always forget property names? Or you are simply learning tailwind and would like a bit of help visualizing classes? Then this tool might come in handy!'
        />
        <meta key='og_type' property='og:type' content='website' />
        <meta key='og_title' property='og:title' content='Tailwindhelper' />
        <meta
          key='og_description'
          property='og:description'
          content='You want to convert a unit to the corresponding tailwind class? You always forget property names? Or you are simply learning tailwind and would like a bit of help visualizing classes? Then this tool might come in handy!'
        />
        <meta key='og_locale' property='og:locale' content='en_IE' />
        <meta
          key='og_site_name'
          property='og:site_name'
          content='Tailwindhelper'
        />
        <meta
          key='og_url'
          property='og:url'
          content='https://tailwindhelper.com'
        />
        <meta
          key='og_site_name'
          property='og:site_name'
          content='Tailwindhelper'
        />

        <meta name='robots' content='index,follow' />

        <meta
          key='twitter:card'
          name='twitter:card'
          content='summary_large_image'
        />
        <meta
          key='twitter:title'
          property='twitter:title'
          content='Tailwindhelper'
        />
        <meta
          key='twitter:description'
          property='twitter:description'
          content='You want to convert a unit to the corresponding tailwind class? You always forget property names? Or you are simply learning tailwind and would like a bit of help visualizing classes? Then this tool might come in handy!'
        />

        <link rel='canonical' href='https://tailwindhelper.com' />

        <link rel='icon' href='/favicon.svg' type='image/svg+xml' />
      </Head>
    </>
  )
}

export default SEO
