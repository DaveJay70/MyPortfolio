import './globals.css';
import { Plus_Jakarta_Sans } from 'next/font/google';
import Navbar from '../components/Navbar';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

export const metadata = {
  title: 'Jay Dave - Full Stack Developer',
  description:
    'Portfolio of Jay Dave - Full Stack Developer specializing in MERN Stack, ASP.NET, and Flutter. Teaching Assistant at Darshan University.',
  keywords: [
    'Jay Dave',
    'Full Stack Developer',
    'MERN Stack',
    'ASP.NET',
    'Flutter',
    'Web Developer',
    'Teaching Assistant',
  ],
  authors: [{ name: 'Jay Dave' }],
  openGraph: {
    title: 'Jay Dave - Full Stack Developer',
    description:
      'Portfolio of Jay Dave - Full Stack Developer specializing in MERN Stack, ASP.NET, and Flutter.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jay Dave - Full Stack Developer',
    description:
      'Portfolio of Jay Dave - Full Stack Developer specializing in MERN Stack, ASP.NET, and Flutter.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body className="min-h-screen font-sans antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
