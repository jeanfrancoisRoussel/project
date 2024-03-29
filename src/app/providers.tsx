/* eslint-disable import/no-extraneous-dependencies */

'use client'

import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

const Providers = ({ children }: { children: React.ReactNode }) => (
  <NextUIProvider>
    <NextThemesProvider
      attribute='class'
      defaultTheme='light'
      themes={['light', 'dark', 'modern']}
    >
      {children}
    </NextThemesProvider>
  </NextUIProvider>
)

export default Providers
