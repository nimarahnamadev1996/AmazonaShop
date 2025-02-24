import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next AmazonaShop',
  description: 'Modern ECommerce Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='min-h-screen flex flex-col'>
          <Header/>
         {children}
         <footer className='footer footer-center p-4 bg-base-300 text-base-content'>
          Copyright © 2025 - All right reserved by Next AmazonaShop 
         </footer>
        </div>
       </body>
    </html>
  )
}
