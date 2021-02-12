import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <h1>Loqui - an IRC client for Gtk</h1>
      <nav>
        <Link href="https://github.com/sunnyone/loqui">
          <a>GitHub</a>
        </Link>
      </nav>
    </header>
    {children}
  </div>
)

export default Layout
