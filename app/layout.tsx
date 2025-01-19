import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Cosmic Mystery Center | Exploring Universe\'s Greatest Enigmas',
  description: 'The Cosmic Mystery Center, founded by David Eagan and Kurt Arbuckle, is at the forefront of investigating unexplained phenomena through scientific discovery.',
  keywords: ['cosmic mystery', 'paranormal research', 'scientific discovery', 'unexplained phenomena'],
  openGraph: {
    title: 'Cosmic Mystery Center | Scientific Discovery of the Unknown',
    description: 'Leading institution in paranormal research and unexplained phenomena investigation.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Cosmic Mystery Center',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cosmic Mystery Center',
    description: 'Exploring Universe\'s Greatest Enigmas Through Scientific Discovery',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}