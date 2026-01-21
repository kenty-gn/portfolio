# ポートフォリオサイト プロジェクトドキュメント

## プロジェクト概要

個人のフリーランス活動をPRするためのポートフォリオサイトです。

### 技術スタック
- **フレームワーク**: Next.js 14 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **UIライブラリ**: shadcn/ui
- **アニメーション**: Framer Motion
- **デプロイ**: Vercel

### プロジェクト構造
```
src/
├── app/                     # Next.js App Router
│   ├── page.tsx            # メインページ
│   ├── layout.tsx          # ルートレイアウト
│   └── actions/            # Server Actions
│       └── contact.ts      # お問い合わせ処理
├── components/
│   ├── layout/             # レイアウトコンポーネント
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   ├── sections/           # ページセクション
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── WorksSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/                 # shadcn/ui コンポーネント
└── lib/
    └── utils.ts            # ユーティリティ関数
```

## セクション構成

1. **Hero** - メインビジュアルと自己紹介
2. **About** - 詳細な自己紹介
3. **Skills** - スキルセット（VB.NET, C#, Oracle, Next.js, Nuxt.jsなど）
4. **Works** - 個人開発プロジェクト一覧
5. **Contact** - お問い合わせフォーム（Resend連携）

## 開発コマンド

```bash
# 開発サーバー起動
npm run dev

# ビルド
npm run build

# 本番サーバー起動
npm start
```
