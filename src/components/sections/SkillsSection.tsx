"use client";

import { motion } from "framer-motion";
import { Smartphone, Layout, Server, Bot } from "lucide-react";

const skillCategories = [
    {
        title: "Mobile / App",
        subtitle: "モバイルアプリ開発",
        icon: Smartphone,
        color: "from-emerald-500 to-teal-600",
        skills: ["Expo", "React Native", "RevenueCat", "App Store公開"],
    },
    {
        title: "Frontend / Web",
        subtitle: "Webフロントエンド",
        icon: Layout,
        color: "from-sky-500 to-blue-600",
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
        title: "Backend / Infra",
        subtitle: "バックエンド・インフラ",
        icon: Server,
        color: "from-stone-500 to-stone-700",
        skills: ["Supabase", "Edge Functions", "PostgreSQL", "Vercel", "VB.NET"],
    },
    {
        title: "AI / Tools",
        subtitle: "AI活用・開発ツール",
        icon: Bot,
        color: "from-amber-500 to-orange-600",
        skills: ["Claude Code", "バイブコーディング", "GitHub", "Zenn"],
    },
];

export function SkillsSection() {
    return (
        <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-stone-50/60">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center text-stone-900">
                        スキル
                    </h2>
                    <p className="text-stone-500 text-center mb-12 max-w-2xl mx-auto">
                        AI活用開発を軸に、モバイルアプリからWebまで
                        フルスタックで対応できる技術スタックです。
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {skillCategories.map((category) => (
                        <div
                            key={category.title}
                            className="group bg-white border border-stone-200 rounded-xl p-6 hover:border-amber-200 hover:shadow-md transition-all duration-300"
                        >
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                                <category.icon className="w-6 h-6 text-white" />
                            </div>

                            <h3 className="text-lg font-semibold mb-1 text-stone-900">{category.title}</h3>
                            <p className="text-sm text-stone-400 mb-4">{category.subtitle}</p>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 text-sm rounded-lg bg-stone-50 text-stone-600 hover:bg-amber-50 hover:text-amber-700 transition-colors duration-200"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
