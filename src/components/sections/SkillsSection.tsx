"use client";

import { motion } from "framer-motion";
import {
    Code2,
    Database,
    Layout,
    GitBranch,
    Terminal,
    Cpu,
    Globe,
    Rocket
} from "lucide-react";

const skillCategories = [
    {
        title: "Backend / Database",
        subtitle: "実務経験あり",
        icon: Database,
        color: "from-emerald-500 to-teal-600",
        skills: ["VB.NET", "C#", "Oracle", "SQL Server"],
    },
    {
        title: "Frontend",
        subtitle: "個人開発・学習中",
        icon: Layout,
        color: "from-blue-500 to-indigo-600",
        skills: ["TypeScript", "Next.js", "Nuxt.js", "Vue.js", "React", "Tailwind CSS"],
    },
    {
        title: "Tools & Platforms",
        subtitle: "開発環境",
        icon: Terminal,
        color: "from-violet-500 to-purple-600",
        skills: ["Git", "VS Code", "Vercel", "Antigravity", "GitHub"],
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
        <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
                        <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                            Skills
                        </span>
                    </h2>
                    <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                        業務システム開発で培った堅実なバックエンド技術と、
                        モダンなフロントエンド技術を組み合わせた開発が可能です。
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            variants={itemVariants}
                            className="group relative bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-border/50 rounded-2xl p-6 hover:border-border transition-all duration-300"
                        >
                            {/* Icon */}
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                <category.icon className="w-6 h-6 text-white" />
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-semibold mb-1">{category.title}</h3>
                            <p className="text-sm text-muted-foreground mb-4">{category.subtitle}</p>

                            {/* Skills */}
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 text-sm rounded-lg bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors duration-200"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            {/* Hover glow effect */}
                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10`} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
