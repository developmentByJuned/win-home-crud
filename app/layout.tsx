import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Header } from './components';
import './globals.css'
import { PUBLIC_IMAGES } from './constants';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Win Home CRUD',
  description: 'This application is for test purpose.',
  icons: PUBLIC_IMAGES.companyLogoDark
}

/**
 * RootLayout component is the main layout for the entire application.
 * It wraps the content with common HTML and provides a consistent structure for all pages.
 *
 * @param {Object} props - The props for the RootLayout component.
 * @param {React.ReactNode} props.children - The content to be rendered within the layout.
 * @returns {JSX.Element} The JSX element representing the RootLayout component.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html lang="en">
        <body id='__next' className={`${inter.className}`}>
          <Header />
          {children}
        </body>
      </html>
    </>
  )
}
