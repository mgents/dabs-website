import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://www.dabs-singapore.com'),
  title: {
    default: 'DABS - Danish Business Association of Singapore',
    template: '%s | DABS',
  },
  description:
    'The Danish Business Association of Singapore (DABS) connects Danish professionals and businesses in Singapore through networking, events, and community.',
  keywords: [
    'DABS',
    'Danish Business Association',
    'Singapore',
    'Danish companies',
    'networking',
    'events',
    'Denmark Singapore',
  ],
  authors: [{ name: 'Danish Business Association of Singapore' }],
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_SG',
    url: '/',
    siteName: 'DABS - Danish Business Association of Singapore',
    title: 'DABS - Danish Business Association of Singapore',
    description:
      'Connecting Danish professionals and businesses in Singapore through networking, events, and community.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DABS - Danish Business Association of Singapore',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DABS - Danish Business Association of Singapore',
    description:
      'Connecting Danish professionals and businesses in Singapore.',
    images: ['/og-image.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
