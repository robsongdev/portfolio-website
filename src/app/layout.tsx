import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Robson Gabriel - Portfolio',
  description: 'Frontend Developer Portfolio - Robson Gabriel',
  keywords: ['Frontend', 'Developer', 'React', 'Next.js', 'TypeScript'],
  authors: [{ name: 'Robson Gabriel' }],
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
