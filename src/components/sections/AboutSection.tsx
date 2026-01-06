"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Briefcase } from "lucide-react";

export function AboutSection() {
    return (
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
                        <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                            About Me
                        </span>
                    </h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-border/50 rounded-3xl p-8 sm:p-12"
                >
                    <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
                        {/* Profile Image */}
                        <div className="flex-shrink-0">
                            <div className="w-40 h-40 rounded-2xl overflow-hidden shadow-xl shadow-blue-500/20 ring-2 ring-blue-500/30">
                                <Image
                                    src="/profile.jpg"
                                    alt="藤岡 賢利"
                                    width={160}
                                    height={160}
                                    className="w-full h-full object-cover"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Profile Content */}
                        <div className="flex-1 text-center lg:text-left">
                            <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                                藤岡 賢利
                            </h3>
                            <p className="text-lg text-blue-400 mb-6">Kento Fujioka</p>

                            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-6">
                                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-sm">
                                    <Briefcase className="w-4 h-4" />
                                    Frontend Engineer
                                </span>
                                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted text-muted-foreground text-sm">
                                    <MapPin className="w-4 h-4" />
                                    Japan
                                </span>
                            </div>

                            <p className="text-muted-foreground leading-relaxed text-lg">
                                業務系システム開発（VB.NET, Oracle）で培った
                                <span className="text-foreground font-medium">堅牢な設計力</span>と、
                                個人開発（Nuxt.js, Next.js）で磨いた
                                <span className="text-foreground font-medium">モダンな技術力</span>
                                を併せ持つエンジニアです。
                                <br />
                                <br />
                                「動くコード」ではなく「長く使えるコード」を書くことを心がけ、
                                クライアントのビジネスに貢献する高品質なWeb開発を提供します。
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
