import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Kenty | AI活用開発エンジニア",
  description: "AI × 爆速開発で、アイデアを形に。Claude Code活用のバイブコーディングで、企画から設計・実装・ストア公開まで一気通貫対応するエンジニアのポートフォリオ。",
  keywords: ["AI活用開発", "バイブコーディング", "Claude Code", "Expo", "Next.js", "TypeScript", "フリーランス"],
  authors: [{ name: "Kenty" }],
  openGraph: {
    title: "Kenty | AI活用開発エンジニア",
    description: "AI × 爆速開発で、アイデアを形に。企画から設計・実装・ストア公開まで一気通貫対応。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
