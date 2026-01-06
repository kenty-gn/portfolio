import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "藤岡 賢利 | Frontend Engineer Portfolio",
  description: "堅実な設計思考 × モダンな実装力。あなたのWeb開発を加速させます。業務系システム開発とモダンWeb技術の両方に精通したエンジニアのポートフォリオサイト。",
  keywords: ["フロントエンド", "Next.js", "TypeScript", "Web開発", "フリーランス"],
  authors: [{ name: "藤岡 賢利" }],
  openGraph: {
    title: "藤岡 賢利 | Frontend Engineer Portfolio",
    description: "堅実な設計思考 × モダンな実装力。あなたのWeb開発を加速させます。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="dark scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
