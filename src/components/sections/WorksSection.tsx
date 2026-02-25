"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Smartphone, BookOpen, FileText, Globe, Utensils } from "lucide-react";
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
        iconColor: "text-blue-500",
        liveUrl: "https://zenn.dev/kenty_vibe/books/expo-supabase-revenuecat-guide",
    },
    {
        id: "3",
        title: "Zenn記事",
        description: "Claude Codeで2日でiOSアプリを完成させた開発記録。バイブコーディングの実践例として多くの反響を獲得。",
        tags: ["Zenn", "Claude Code", "開発記録"],
        icon: FileText,
        iconColor: "text-indigo-500",
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
        iconColor: "text-amber-500",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
    },
};

export function WorksSection() {
    return (
        <section id="works" className="py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
                        <span className="bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent">
                            Works
                        </span>
                    </h2>
                    <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
                        AI活用開発を中心に、個人開発から受託案件まで幅広く手がけています。
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={itemVariants}
                            className="group relative bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-indigo-200 hover:shadow-md transition-all duration-300"
                        >
                            {/* Project Icon Area */}
                            <div className="relative h-44 bg-gradient-to-br from-gray-50 to-indigo-50/50 flex items-center justify-center overflow-hidden">
                                <project.icon className={`w-16 h-16 ${project.iconColor} opacity-60 group-hover:scale-110 transition-transform duration-300`} />
                                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2 text-gray-900 group-hover:text-indigo-600 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-500 text-sm mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-1 text-xs rounded-md bg-indigo-50 text-indigo-600"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex gap-3">
                                    {project.liveUrl && (
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="flex-1 rounded-lg border-gray-200 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200"
                                            asChild
                                        >
                                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink className="w-4 h-4 mr-2" />
                                                View
                                            </a>
                                        </Button>
                                    )}
                                    {project.githubUrl && (
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="flex-1 rounded-lg border-gray-200 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200"
                                            asChild
                                        >
                                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                                <Github className="w-4 h-4 mr-2" />
                                                Code
                                            </a>
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
