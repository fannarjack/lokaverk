import type { Metadata } from 'next';
import { Orbitron, Exo_2 } from 'next/font/google';
import './globals.css';

const Exo2 = Exo_2({
  variable: '--font-exo-2',
  subsets: ['latin'],
});

const orbitron = Orbitron({
  variable: '--font-orbitron',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Noice',
  description:
    'Track top Telegram crypto callers, get memecoin/altcoin tips, and learn how to avoid scams. Your go-to hub for smart, safe investing in crypto.',
  keywords: [
    'crypto callers',
    'Telegram crypto tips',
    'memecoins',
    'altcoins',
    'crypto scam prevention',
    'how not to get scammed',
    'safe crypto investing',
    'DeFi safety',
    'pump and dump warning',
    'crypto tracker',
  ],
  openGraph: {
    title: 'Stay Ahead in Crypto – Track Callers & Avoid Scams',
    description:
      'Discover legit Telegram callers, avoid common crypto traps, and explore the latest in memecoins and altcoins. Stay informed and safe in the world of DeFi.',
    url: 'https://yourdomain.com', // <-- replace with your domain
    siteName: 'Crypto Caller Tracker',
    images: [
      {
        url: 'https://yourdomain.com/og-image.jpg', // <-- replace with your OG image URL
        width: 1200,
        height: 630,
        alt: 'Crypto Caller Tracker & Scam Safety',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stay Ahead in Crypto – Track Callers & Avoid Scams',
    description:
      'Track real Telegram crypto callers, explore trending memecoins, and protect yourself from scams. Learn the smart way to invest.',
    images: ['https://yourdomain.com/twitter-image.jpg'], // same as OG image, or different
    creator: '@yourhandle', // <-- optional, replace if you have one
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/shortcut-icon.png',
    apple: '/apple-touch-icon.png',
  },
  metadataBase: new URL('https://yourdomain.com'), // replace with actual site
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-blackBackground ${Exo2.variable} ${orbitron.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
