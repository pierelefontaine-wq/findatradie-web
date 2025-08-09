// src/app/layout.tsx
import '../styles/globals.css'; // adjust the path if needed

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}


