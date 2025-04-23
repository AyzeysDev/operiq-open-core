import { Inter } from 'next/font/google'
import { ThemeRegistry } from '@/components/ThemeRegistry'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  title: 'OperIQ',
  description: 'AI-powered Operations Optimizer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  )
}
