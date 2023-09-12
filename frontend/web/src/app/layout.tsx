
import './globals.css'
import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'
import { MantineProvider } from '@mantine/core'
import LayoutMain from '@/layouts/LayoutMain'
import LayoutHome from '@/layouts/LayoutHome'

const inter = Manrope({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div id="app">
          <LayoutHome>
          {children}
          </LayoutHome>
        </div>
      </body>
    </html>
  )
}
