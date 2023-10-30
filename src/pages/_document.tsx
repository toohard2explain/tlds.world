import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>TLDS.world &middot; The best comparing platform for top level domain</title>
      </Head>
      <body className='dotted-background'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
