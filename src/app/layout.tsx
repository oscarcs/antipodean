import type { Metadata } from "next";
import { Geist, Geist_Mono, Readex_Pro, Sulphur_Point } from "next/font/google";
import "./globals.css";

const readexPro = Readex_Pro({
  variable: "--font-readex-pro",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Antipodean Systems OÜ",
  description: "Antipodean Systems OÜ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${readexPro.variable} antialiased w-[100vw] h-[100vh]`}
      >
        {children}
      </body>
    </html>
  );
}
