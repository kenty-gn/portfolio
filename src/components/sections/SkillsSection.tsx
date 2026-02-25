"use client";

import { motion } from "framer-motion";
import {
    Smartphone,
    Layout,
    Server,
    Bot,
} from "lucide-react";

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
        color: "from-blue-500 to-indigo-600",
        skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
        title: "Backend / Infra",
        subtitle: "バックエンド・インフラ",
        icon: Server,
        color: "from-violet-500 to-purple-600",
        skills: ["Supabase", "Edge Functions", "PostgreSQL", "Vercel"],
    },
    {
        title: "AI / Tools",
        subtitle: "AI活用・開発ツール",
        icon: Bot,
        color: "from-amber-500 to-orange-600",
        skills: ["Claude Code", "バイブコーディング", "GitHub", "Zenn"],
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
    },
};

export function SkillsSection() {
    return (
        <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50/50">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
                        <span className="bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent">
                            Skills
                        </span>
                    </h2>
                    <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto">
                        AI活用開発を軸に、モバイルアプリからWebまで
                        フルスタックで対応できる技術スタックです。
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {skillCategories.map((category) => (
                        <motion.div
                            key={category.title}
                            variants={itemVariants}
                            className="group relative bg-white border border-gray-200 rounded-2xl p-6 hover:border-indigo-200 hover:shadow-md transition-all duration-300"
                        >
                            {/* Icon */}
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                <category.icon className="w-6 h-6 text-white" />
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-semibold mb-1 text-gray-900">{category.title}</h3>
                            <p className="text-sm text-gray-400 mb-4">{category.subtitle}</p>

                            {/* Skills */}
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 text-sm rounded-lg bg-gray-50 text-gray-600 hover:bg-indigo-50 hover:text-indigo-600 transition-colors duration-200"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
