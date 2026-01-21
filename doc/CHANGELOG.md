# 変更履歴

## 2026-01-21

### 家計簿アプリのURL追加

**変更ファイル**: `src/components/sections/WorksSection.tsx`

#### 変更内容
- 家計簿アプリにVercelデプロイURLを追加
  - URL: https://portfolio-psi-one-gp7apao4np.vercel.app/
- 説明文を更新し、「開発中」であることを明記
- ボタンのラベルを動的に変更
  - `comingSoon`かつ`liveUrl`がある場合は「開発中」と表示
  - それ以外は「Live」と表示

#### 変更前
```typescript
{
    id: "1",
    title: "家計簿アプリ",
    description: "Next.js 14とSupabaseを使用した家計管理アプリ。収支の可視化、カテゴリ分析、月次レポート機能を実装予定。",
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    comingSoon: true,
}
```

#### 変更後
```typescript
{
    id: "1",
    title: "家計簿アプリ",
    description: "Next.js 14とSupabaseを使用した家計管理アプリ。収支の可視化、カテゴリ分析、月次レポート機能を搭載。現在開発中のプロジェクトです。",
    tags: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
    liveUrl: "https://portfolio-psi-one-gp7apao4np.vercel.app/",
    comingSoon: true,
}
```

#### UI変更
- カード上部の「Coming Soon」バッジはそのまま表示
- ボタンは「開発中」というラベルでクリック可能に変更
