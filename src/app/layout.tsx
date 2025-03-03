import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'PlantLife - Your Plant and Gardening Companion',
  description: 'Discover perfect plants for your space, get expert gardening advice, and shop premium gardening tools.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="container">
          <nav style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            padding: '20px 0',
          }}>
            <div style={{ fontWeight: 'bold', fontSize: '1.5rem', color: 'var(--color-primary)' }}>
              PlantLife
            </div>
            <ul style={{ 
              display: 'flex', 
              listStyle: 'none', 
              gap: '30px',
            }}>
              <li><a href="/">Home</a></li>
              <li><a href="/plants">Plants</a></li>
              <li><a href="/tools">Tools</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}