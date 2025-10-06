import "@/styles"

import Content from "@/layouts/Content"
import Header from "@/layouts/Header"
import { Head } from "minista"

export default function (props) {
  const { children } = props

  return (
    <>
      <Head htmlAttributes={{ lang: "ru" }}>
        <title>Portfolio | Frontend-developer</title>
        <script src="/src/main.js" type="module" />

        <link
          rel="icon"
          type="image/png"
          href="/src/assets/favicon/favicon-96x96.png"
          sizes="96x96"
        />
        <link
          rel="icon"
          type="image/svg+xml"
          href="/src/assets/favicon/favicon.svg"
        />
        <link rel="shortcut icon" href="/src/assets/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/src/assets/favicon/apple-touch-icon.png"
        />
        <link rel="manifest" href="/src/assets/favicon/site.webmanifest" />
      </Head>

      <Header />
      <Content>{children}</Content>
    </>
  )
}
