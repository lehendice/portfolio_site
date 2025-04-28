import React from 'react'
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
              <a href="/" className="text-xl font-bold">Your Name</a>
              <div className="space-x-6">
                <a href="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</a>
                <a href="/about" className="hover:text-blue-600 dark:hover:text-blue-400">About</a>
                <a href="/projects" className="hover:text-blue-600 dark:hover:text-blue-400">Projects</a>
                <a href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</a>
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