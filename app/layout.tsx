import type { Metadata } from "next";
import { Bai_Jamjuree } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const BaiFont = Bai_Jamjuree({
  weight: ['200', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "BEAR - Password",
  description: "Generated password manager app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${BaiFont.className} antialiased`}>
        {children}
        <Toaster/>
      </body>
    </html>
  );
}
