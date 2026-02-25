"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Sparkles } from "lucide-react";

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-blue-50" />

            {/* Subtle grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.04)_1px,transparent_1px)] bg-[size:64px_64px]" />

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-6"
                >
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-200 text-indigo-600 text-sm font-medium">
                        <Sparkles className="w-4 h-4" />
                        AI-Powered Full-Stack Engineer
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
                >
                    <span className="bg-gradient-to-r from-gray-900 via-indigo-900 to-indigo-700 bg-clip-text text-transparent">
                        AI × 爆速開発で、
                    </span>
                    <br className="hidden sm:block" />
                    <span className="bg-gradient-to-r from-indigo-700 via-indigo-900 to-gray-900 bg-clip-text text-transparent">
                        アイデアを形に。
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg sm:text-xl text-gray-500 max-w-2xl mx-auto mb-10"
                >
                    Claude Codeを活用したバイブコーディングで、
                    <br className="hidden sm:block" />
                    企画から設計・実装・ストア公開まで一気通貫対応。
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <Button
                        size="lg"
                        className="group bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:shadow-indigo-500/40 hover:scale-105"
                        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    >
                        お問い合わせ
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        className="px-8 py-6 text-lg rounded-full border-gray-300 text-gray-700 hover:bg-gray-50 transition-all duration-300"
                        onClick={() => document.getElementById("works")?.scrollIntoView({ behavior: "smooth" })}
                    >
                        <Code2 className="mr-2 w-5 h-5" />
                        実績を見る
                    </Button>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 8, 0] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        className="w-6 h-10 rounded-full border-2 border-gray-300 flex justify-center pt-2"
                    >
                        <motion.div className="w-1.5 h-1.5 bg-gray-400 rounded-full" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
