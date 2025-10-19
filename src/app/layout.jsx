import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Bilton Technologies | Innovating the Digital Tomorrow',
  description: "A Goa-based digital innovation company building smart brands, systems, and marketing solutions that scale.",
  keywords: 'Bilton Technologies, Bilton Marketing, ColonyOne, Digital Marketing Goa, Brand Strategy, Community Marketing',
  authors: [{ name: 'Bilton Technologies' }],
  openGraph: {
    title: 'Bilton Technologies | Innovating the Digital Tomorrow',
    description: "A Goa-based digital innovation company building smart brands, systems, and marketing solutions that scale.",
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
