"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Zap, Smartphone } from "lucide-react";

export function AboutSection() {
    return (
        <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-stone-900">
                        自己紹介
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="bg-white border border-stone-200 rounded-2xl p-8 sm:p-12 shadow-sm"
                >
                    <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
                        <div className="flex-shrink-0">
                            <div className="w-40 h-40 rounded-2xl overflow-hidden shadow-lg ring-2 ring-amber-100">
                                <Image
                                    src="/profile.png"
                                    alt="Kenty"
                                    width={160}
                                    height={160}
                                    className="w-full h-full object-cover"
                                    priority
                                />
                            </div>
                        </div>

                        <div className="flex-1 text-center lg:text-left">
                            <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-stone-900">
                                Kenty
                            </h3>
                            <p className="text-lg text-amber-600 mb-6">AI活用開発エンジニア</p>

                            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-6">
                                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-50 text-amber-700 text-sm font-medium">
                                    <Zap className="w-4 h-4" />
                                    Full-Stack
                                </span>
                                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 text-sm font-medium">
                                    <Smartphone className="w-4 h-4" />
                                    App Store Published
                                </span>
                                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-stone-100 text-stone-600 text-sm font-medium">
                                    <MapPin className="w-4 h-4" />
                                    Japan
                                </span>
                            </div>

                            <p className="text-stone-500 leading-relaxed text-lg">
                                Claude Codeを活用した
                                <span className="text-stone-900 font-medium">AI駆動開発</span>で、
                                企画から設計・実装・App Storeリリースまでを
                                <span className="text-stone-900 font-medium">2日でMVP完成</span>させる
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
