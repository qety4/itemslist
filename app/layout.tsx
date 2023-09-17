
import './globals.scss'
import type { Metadata } from 'next'
import Providers from '@/components/Providers'
import Nav from '@/components/nav/Nav'

export const metadata: Metadata = {
  title: 'itemslist',
  description: `craigslist 'clone'`,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Providers>
        <body >
          <Nav/>
          {children}
        </body>
      </Providers>
    </html>
  )
}
