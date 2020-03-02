import React from 'react'

import Document, {
  Head,
  Html,
  Main,
  NextScript,
  DocumentContext
} from 'next/document'

class NextDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="th">
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta name="Description" content="" />
          <meta property="og:url" content="" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="ประกาศที่นั่งสอบ | โรงเรียนเตรียมอุดมศึกษา"
          />
          <meta property="og:description" content="" />
          <meta property="og:image" content="/assets/og.jpg" />
          <meta property="og:image:type" content="image/jpeg" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
          <meta name="twitter:card" content="summary" />
          <link
            href="https://fonts.googleapis.com/css?family=Kanit:400,700&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="/assets/logo.png" />
          <link rel="apple-touch-icon" href="/assets/logo.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default NextDocument
