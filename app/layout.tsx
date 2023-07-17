import { cn } from '@/lib/utils';
import { Fira_Code } from 'next/font/google';
import { Metadata } from 'next';
import './globals.css';
import 'animate.css/animate.compat.css';

const firaCodeFont = Fira_Code({ subsets: ['latin'] });

const title = 'Khairul Hidayat | Front-End Developer';
const description =
  "Hi, I'm Khairul. A passionate Front-End Developer based in Kalimantan Barat, Indonesia.";

export const metadata: Metadata = {
  title,
  description,
  keywords:
    'khairul169, khairul.my.id, Khairul Hidayat, me@khairul.my.id, Khairul Frontend, Khairul App',

  openGraph: {
    type: 'website',
    url: 'https://rul.sh',
    title,
    description,
    siteName: title,
    images: [{ url: 'https://rul.sh/icon.png' }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cn('dark', firaCodeFont.className)}>{children}</body>
    </html>
  );
}
