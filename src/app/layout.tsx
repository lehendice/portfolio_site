import React from 'react'
import Link from 'next/link'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Your Name - Software Engineer Portfolio',
  description: 'Software Engineer and Machine Learning Engineer portfolio showcasing projects and skills',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}>
        <nav className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <Link href="/" className="text-xl font-bold">Paul Henderson</Link>
              <div className="space-x-6">
                <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
                <Link href="/about" className="hover:text-blue-600 dark:hover:text-blue-400">About</Link>
                <Link href="/projects" className="hover:text-blue-600 dark:hover:text-blue-400">Projects</Link>
                <Link href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</Link>
              </div>
            </div>
          </div>
        </nav>
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  )
}