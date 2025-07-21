import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Simple Conveyancing",
  description: "Simple and easy low cost conveyancing quotes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        {children}
      </body>
    </html>
  );
}
