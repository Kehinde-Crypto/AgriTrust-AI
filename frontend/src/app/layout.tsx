import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Auth0Provider } from '@auth0/nextjs-auth0/client';
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AgriTrace",
  description: "Every harvest. Every handoff. On-chain. Empowering agriculture with AI and Blockchain.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <Auth0Provider>
        <body className="min-h-full flex flex-col font-sans">{children}</body>
      </Auth0Provider>
    </html>
  );
}
