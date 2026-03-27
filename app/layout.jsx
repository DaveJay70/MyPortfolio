import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '../components/Navbar';

const inter = Inter({ subsets: ['latin'] });

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
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
