import './globals.css';
import Link from 'next/link';
import React from 'react';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <div>
            <nav>
              <Link href="/">Home</Link>
              <Link href="/portfolio">Portfolio</Link>
              <Link href="/about">About</Link>
              <Link href="/contact">Contact</Link>
            </nav>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
