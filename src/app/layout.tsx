import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import { Toaster } from 'react-hot-toast'

export const metadata: Metadata = {
  title: {
    default: 'Green Yatırım | Lüks Gayrimenkul Yatırımları',
    template: '%s | Green Yatırım',
  },
  description:
    'Green Yatırım ile lüks gayrimenkul projelerinde güvenli yatırım fırsatlarını keşfedin. Sürdürülebilir, modern ve değer kazanan emlak projeleri.',
  keywords: [
    'gayrimenkul',
    'emlak',
    'yatırım',
    'lüks konut',
    'proje',
    'green yatırım',
    'sürdürülebilir',
  ],
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://greenyatirim.com',
    siteName: 'Green Yatırım',
    title: 'Green Yatırım | Lüks Gayrimenkul Yatırımları',
    description:
      'Lüks gayrimenkul projelerinde güvenli yatırım fırsatlarını keşfedin.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Green Yatırım | Lüks Gayrimenkul Yatırımları',
    description:
      'Lüks gayrimenkul projelerinde güvenli yatırım fırsatlarını keşfedin.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className="font-sans">
        <Toaster
          position="top-right"
          toastOptions={{
            style: {
              background: '#1a1a1a',
              color: '#fff',
              border: '1px solid #2a2a2a',
            },
          }}
        />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
