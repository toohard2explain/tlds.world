import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>TLDS.world &middot; The best comparing platform for top level domain</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className='dotted-background'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
