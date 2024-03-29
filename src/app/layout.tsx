/* eslint-disable import/no-extraneous-dependencies */
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

// eslint-disable-next-line import/order
import Providers from './providers'


import './globals.css'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => (

  <html lang='en'>
    <body className={inter.className}>
      <Providers>
        <Navbar />
        {children}
        <Footer />
      </Providers>
    </body>
  </html>
)

export default RootLayout
