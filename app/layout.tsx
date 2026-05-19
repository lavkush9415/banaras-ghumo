import type { Metadata } from 'next';
import { Inter, Playfair_Display, Space_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/ui/WhatsAppButton';
import CallbackModal from '@/components/ui/CallbackModal';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Banaras Ghumo — See Banaras Beyond The Ordinary',
  description:
    'Experience Banaras like never before. Cinematic ghats, night aarti, heritage trails, and luxury boat rides — curated by Banaras Ghumo.',
  keywords: [
    'Banaras tourism',
    'Varanasi travel',
    'Ganga aarti',
    'Banaras boat ride',
    'Banaras packages',
    'Varanasi hotels',
    'temple tours Varanasi',
  ],
  openGraph: {
    title: 'Banaras Ghumo — See Banaras Beyond The Ordinary',
    description:
      'Discover the cinematic soul of Banaras. Luxury travel experiences, curated packages, and immersive cultural journeys.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${spaceMono.variable}`}>
      <body className="bg-[#0a0a0f] text-white overflow-x-hidden">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <CallbackModal />
      </body>
    </html>
  );
}
