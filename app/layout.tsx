import type { Metadata } from "next";
import localFont from "next/font/local"
import "./globals.css";

const poppins = localFont({
  src: [
    {
      path: "../public/fonts/Recoleta-Black.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/Recoleta-Medium.ttf",
      weight: "300",
    },
    {
      path: "../public/fonts/Recoleta-Light.ttf",
      weight: "200",
    },
  ],
  variable: "--font-Recoleta-Black",
});

export const metadata: Metadata = {
  title: "Simon Franklin",
  description: "Simon Franklin's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
