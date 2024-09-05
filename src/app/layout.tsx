import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "株式会社 TPF NEO | アパート・マンションの売却・利活用がしたい方へ",
  description:
    "アパート・マンションを売りたい方、活かしたい方は全国対応している株式会社 TPF NEOにお任せ下さい!",
  keywords:
    "株式会社 TPF NEO,不動産,マンション買取,アパート・マンション活かす,群馬県,太田市",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
