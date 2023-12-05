'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'

export function ThemesProvider({ children }: { children: React.ReactNode }) {
  return <NextThemesProvider attribute='class'>{children}</NextThemesProvider>
}
