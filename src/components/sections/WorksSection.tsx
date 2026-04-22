"use client";

import { motion } from "framer-motion";
import { ExternalLink, Smartphone, BookOpen, FileText, Globe, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
    id: string;
    title: string;
    description: string;
    tags: string[];
    icon: React.ElementType;
    iconColor: string;
    liveUrl?: string;
    githubUrl?: string;
}

const projects: Project[] = [
    {
        id: "1",
        title: "ふくログ",
        description: "副業収入を簡単に記録・管理できるiOSアプリ。Expo + Supabase + RevenueCatで構築し、Claude Codeを活用して2日でMVP完成。App Storeで公開中。",
        tags: ["Expo", "Supabase", "RevenueCat", "App Store公開"],
        icon: Smartphone,
        iconColor: "text-emerald-500",
        liveUrl: "https://apps.apple.com/app/id6743806956",
    },
    {
        id: "2",
        title: "Zenn技術本",
        description: "「Claude Codeで2日でiOSアプリを作ってApp Storeに公開した話」全9章・980円で有料販売中。AI活用開発の実践ノウハウを体系的にまとめた一冊。",
        tags: ["Zenn", "技術書", "AI活用開発", "有料販売"],
        icon: BookOpen,
        iconColor: "text-sky-500",
        liveUrl: "https://zenn.dev/kenty_vibe/books/expo-supabase-revenuecat-guide",
    },
    {
        id: "3",
        title: "Zenn記事",
        description: "Claude Codeで2日でiOSアプリを完成させた開発記録。バイブコーディングの実践例として多くの反響を獲得。",
        tags: ["Zenn", "Claude Code", "開発記録"],
        icon: FileText,
        iconColor: "text-amber-500",
        liveUrl: "https://zenn.dev/kenty_vibe/articles/claude-code-2days-app",
    },
    {
        id: "4",
        title: "受託LP制作",
        description: "v0とAIツールを活用し、クライアント要望のLPを1日でスピード納品。デザイン提案から実装、レスポンシブ対応まで一貫して対応。",
        tags: ["v0", "Next.js", "Tailwind CSS", "AI活用"],
        icon: Globe,
        iconColor: "text-violet-500",
    },
    {
        id: "5",
        title: "飲食店SaaSモダナイゼーション",
        description: "レガシーな飲食店向け店舗管理システムのモダナイゼーション。Rails APIをOpenAPI仕様で再設計し、フロントエンドをNext.jsで刷新。",
        tags: ["Ruby on Rails", "OpenAPI", "Next.js", "TypeScript"],
        icon: Utensils,
        iconColor: "text-orange-500",
    },
];

export function WorksSection() {
    return (
        <section id="works" className="py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center text-stone-900">
                        制作実績
                    </h2>
                    <p className="text-stone-500 text-center mb-12 max-w-2xl mx-auto">
                        AI活用開発を中心に、個人開発から受託案件まで幅広く手がけています。
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
                >
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group bg-white border border-stone-200 rounded-xl p-6 hover:border-amber-200 hover:shadow-md transition-all duration-300 flex flex-col"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <project.icon className={`w-5 h-5 ${project.iconColor} flex-shrink-0`} />
                                <h3 className="text-lg font-semibold text-stone-900 group-hover:text-amber-700 transition-colors">
                                    {project.title}
                                </h3>
                            </div>

                            <p className="text-stone-500 text-sm mb-4 leading-relaxed flex-1">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-2 py-1 text-xs rounded-md bg-stone-100 text-stone-600"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {project.liveUrl && (
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="w-full rounded-lg border-stone-200 text-stone-700 hover:bg-amber-50 hover:text-amber-700 hover:border-amber-200"
                                    asChild
                                >
                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink className="w-4 h-4 mr-2" />
                                        見てみる
                                    </a>
                                </Button>
                            )}
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
