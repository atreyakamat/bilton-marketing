import { Inter } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Bilton Technologies | Social Media Marketing & Society Management Software India',
  description:
    'Bilton Technologies delivers data-driven social media marketing and ColonyOne society management software for Indian businesses and communities.',
  keywords:
    'social media marketing India, society management software India, Bilton Technologies, Bilton Marketing, ColonyOne, community management platform',
  authors: [{ name: 'Bilton Technologies' }],
  openGraph: {
    title: 'Bilton Technologies | Social Media Marketing & Society Management Software India',
    description:
      'Bilton Technologies delivers data-driven social media marketing and ColonyOne society management software for Indian businesses and communities.',
    type: 'website',
    url: 'https://www.biltontechnologies.com',
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
