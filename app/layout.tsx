import type { Metadata } from "next";
import { Bai_Jamjuree } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const BaiFont = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ["200", "400", "500", "700"],
});

export const metadata: Metadata = {
  title: "BEAR - Password",
  description: "Creating a password manager",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={BaiFont.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
