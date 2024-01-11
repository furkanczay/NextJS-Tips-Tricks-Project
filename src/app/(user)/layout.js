"use client"
import { Inter } from 'next/font/google'
import { SessionProvider } from 'next-auth/react'
import MainLayout from '@/layouts/user/MainLayout'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <MainLayout>
            {children}
          </MainLayout>
        </SessionProvider>
      </body>
    </html>
  )
}
