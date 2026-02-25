"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Zap, Bot, Smartphone } from "lucide-react";

export function AboutSection() {
    return (
        <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
                        <span className="bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent">
                            About Me
                        </span>
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="bg-white border border-gray-200 rounded-3xl p-8 sm:p-12 shadow-sm"
                >
                    <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
                        {/* Profile Image */}
                        <div className="flex-shrink-0">
                            <div className="w-40 h-40 rounded-2xl overflow-hidden shadow-lg ring-2 ring-indigo-100">
                                <Image
                                    src="/profile.jpg"
                                    alt="Kenty"
                                    width={160}
                                    height={160}
                                    className="w-full h-full object-cover"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Profile Content */}
                        <div className="flex-1 text-center lg:text-left">
                            <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-900">
                                Kenty
                            </h3>
                            <p className="text-lg text-indigo-600 mb-6">AI活用開発エンジニア</p>

                            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-6">
                                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium">
                                    <Bot className="w-4 h-4" />
                                    AI-Powered Dev
                                </span>
                                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 text-sm font-medium">
                                    <Zap className="w-4 h-4" />
                                    Full-Stack
                                </span>
                                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-sm font-medium">
                                    <Smartphone className="w-4 h-4" />
                                    App Store Published
                                </span>
                                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 text-gray-600 text-sm font-medium">
                                    <MapPin className="w-4 h-4" />
                                    Japan
                                </span>
                            </div>

                            <p className="text-gray-500 leading-relaxed text-lg">
                                Claude Codeを活用した
                                <span className="text-gray-900 font-medium">AI駆動開発</span>で、
                                企画から設計・実装・App Storeリリースまでを
                                <span className="text-gray-900 font-medium">2日でMVP完成</span>させる
                                スピード感が強みです。
                                <br />
                                <br />
                                副業収入管理アプリ「ふくログ」をApp Storeで公開中。
                                Zennでは技術本を有料販売し、AI活用開発のノウハウを発信しています。
                                受託ではLP制作やSaaSモダナイゼーションまで幅広く対応します。
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
