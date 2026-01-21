"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
    id: string;
    title: string;
    description: string;
    tags: string[];
    image?: string;
    liveUrl?: string;
    githubUrl?: string;
    comingSoon?: boolean;
}

const projects: Project[] = [
    {
        id: "1",
        title: "家計簿アプリ",
        description: "Next.js 14とSupabaseを使用した家計管理アプリ。収支の可視化、カテゴリ分析、月次レポート機能を搭載。現在開発中のプロジェクトです。",
        tags: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
        liveUrl: "https://portfolio-psi-one-gp7apao4np.vercel.app/",
        comingSoon: true,
    },
    {
        id: "2",
        title: "ポートフォリオサイト",
        description: "このサイトです。Next.js 14 App Router、Framer Motion、shadcn/uiを使用したモダンなデザイン。",
        tags: ["Next.js", "TypeScript", "Framer Motion", "shadcn/ui"],
        liveUrl: "/",
    },
    {
        id: "3",
        title: "タスク管理ツール",
        description: "Vue.jsとFirebaseを使用したリアルタイムタスク管理ツール。ドラッグ&ドロップでのタスク移動機能付き。",
        tags: ["Vue.js", "Firebase", "TypeScript"],
        comingSoon: true,
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
        <section id="works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-blue-950/5 to-transparent">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
                        <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                            Works
                        </span>
                    </h2>
                    <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                        個人開発プロジェクトの一覧です。
                        実務経験を活かしながら、モダンな技術スタックでの開発に取り組んでいます。
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
                            className="group relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-300"
                        >
                            {/* Project Image / Placeholder */}
                            <div className="relative h-48 bg-gradient-to-br from-blue-900/20 to-indigo-900/20 flex items-center justify-center overflow-hidden">
                                <Folder className="w-16 h-16 text-blue-500/30 group-hover:scale-110 transition-transform duration-300" />
                                {project.comingSoon && (
                                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-medium">
                                        Coming Soon
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2 py-1 text-xs rounded-md bg-blue-500/10 text-blue-400"
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
                                            className="flex-1 rounded-lg"
                                            asChild
                                        >
                                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink className="w-4 h-4 mr-2" />
                                                {project.comingSoon ? "開発中" : "Live"}
                                            </a>
                                        </Button>
                                    )}
                                    {project.githubUrl && (
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="flex-1 rounded-lg"
                                            asChild
                                        >
                                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                                <Github className="w-4 h-4 mr-2" />
                                                Code
                                            </a>
                                        </Button>
                                    )}
                                    {project.comingSoon && !project.liveUrl && !project.githubUrl && (
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            className="flex-1 rounded-lg opacity-50 cursor-not-allowed"
                                            disabled
                                        >
                                            準備中
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
