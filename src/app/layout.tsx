import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemesProvider } from '@/components/theme/ThemesProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    template: '%s | Viktor Filyk',
    default: 'Viktor Filyk', // a default is required when creating a template
  },
}

type RootLayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className + ' container mx-auto max-w-3xl p-4 transition'}>
        <ThemesProvider>{children}</ThemesProvider>
      </body>
    </html>
  )
}
