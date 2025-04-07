import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";

const font = Work_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Noto",
  description: "A simple program to help writters focus on their work.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} antialiased`}>{children}</body>
    </html>
  );
}
