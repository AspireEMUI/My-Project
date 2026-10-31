import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
});

export const metadata = {
  title: 'Lush Shine - Natural Skincare for Radiant Glow',
  description: 'Discover Lush Shine - premium, natural skincare products crafted with care. Shop our collection of serums, face washes, and skincare essentials for radiant, glowing skin.',
  openGraph: {
    title: 'Lush Shine - Natural Skincare for Radiant Glow',
    description: 'Premium natural skincare products for beautiful, radiant skin',
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=1200',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${playfair.variable}`}>
        {children}
      </body>
    </html>
  );
}
