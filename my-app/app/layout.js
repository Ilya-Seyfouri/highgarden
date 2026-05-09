import './globals.css';

export const metadata = {
  title: 'Heritage Garden | Premium British Garden Furniture',
  description: 'Elevating outdoor living with timeless design and sustainable craftsmanship. From the Cotswolds.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@400;500;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="font-body-md text-body-md bg-background text-on-surface overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
