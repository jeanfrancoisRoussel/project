/* eslint-disable import/no-extraneous-dependencies */
import { ClerkProvider } from '@clerk/nextjs'
import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'

import './globals.css'

import Footer from '@/components/Footer'
import NavbarComponent from '@/components/Navbar'
import { ThemeProvider } from '@/components/theme-provider'
import { cn } from '@/lib/utils'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

const RootLayout = ({
  children
}: Readonly<{
  children: React.ReactNode
}>) => (
  <ClerkProvider>
    <html lang='en'>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <div className='flex min-h-screen flex-col'>
            <NavbarComponent />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  </ClerkProvider>
)

export default RootLayout
