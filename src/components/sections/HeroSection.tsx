"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 bg-[#FAFAF8]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(217,119,6,0.07),transparent)]" />

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
                >
                    <span className="text-stone-900">
                        AI × 爆速開発で、
                    </span>
                    <br className="hidden sm:block" />
                    <span className="text-amber-600">
                        アイデアを形に。
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="text-lg sm:text-xl text-stone-500 max-w-2xl mx-auto mb-10"
                >
                    Claude Codeを使って、企画・設計・実装・リリースまで
                    <br className="hidden sm:block" />
                    ひとりでぜんぶやります。
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <Button
                        size="lg"
                        className="group bg-stone-900 hover:bg-stone-800 text-white px-8 py-6 text-lg rounded-xl shadow-md transition-all duration-300 hover:shadow-lg"
                        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    >
                        お問い合わせ
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        className="px-8 py-6 text-lg rounded-xl border-stone-300 text-stone-700 hover:bg-stone-100 transition-all duration-300"
                        onClick={() => document.getElementById("works")?.scrollIntoView({ behavior: "smooth" })}
                    >
                        実績を見る
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
