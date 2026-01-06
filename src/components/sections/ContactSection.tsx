"use client";

import { motion } from "framer-motion";
import { Mail, Send, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactSection() {
    return (
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
                        <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                            Contact
                        </span>
                    </h2>
                    <p className="text-muted-foreground text-center mb-12 max-w-xl mx-auto">
                        お仕事のご依頼やご質問など、お気軽にお問い合わせください。
                        できるだけ早くご返信いたします。
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="bg-gradient-to-br from-card/80 to-card/40 backdrop-blur-sm border border-border/50 rounded-3xl p-8 sm:p-12"
                >
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium">
                                    お名前
                                </label>
                                <Input
                                    id="name"
                                    type="text"
                                    placeholder="山田 太郎"
                                    className="bg-background/50 border-border/50 focus:border-blue-500 rounded-xl h-12"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium">
                                    メールアドレス
                                </label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="your@email.com"
                                    className="bg-background/50 border-border/50 focus:border-blue-500 rounded-xl h-12"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm font-medium">
                                件名
                            </label>
                            <Input
                                id="subject"
                                type="text"
                                placeholder="お問い合わせ内容"
                                className="bg-background/50 border-border/50 focus:border-blue-500 rounded-xl h-12"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium">
                                メッセージ
                            </label>
                            <Textarea
                                id="message"
                                placeholder="お問い合わせ内容を入力してください..."
                                rows={6}
                                className="bg-background/50 border-border/50 focus:border-blue-500 rounded-xl resize-none"
                            />
                        </div>

                        <Button
                            type="submit"
                            size="lg"
                            className="w-full bg-blue-600 hover:bg-blue-500 text-white rounded-xl h-14 text-lg shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-blue-500/40"
                        >
                            <Send className="w-5 h-5 mr-2" />
                            送信する
                        </Button>
                    </form>

                    {/* Divider */}
                    <div className="relative my-10">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-border/50" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-card px-4 text-muted-foreground">
                                または
                            </span>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            variant="outline"
                            size="lg"
                            className="rounded-xl h-12 px-6"
                            asChild
                        >
                            <a
                                href="https://x.com/tea_programer?s=21&t=HZ9W7hnhD8Wfzo2lg9AaPg"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Twitter className="w-5 h-5 mr-2" />
                                X (Twitter)
                            </a>
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="rounded-xl h-12 px-6"
                            asChild
                        >
                            <a href="mailto:contact@example.com">
                                <Mail className="w-5 h-5 mr-2" />
                                メールで連絡
                            </a>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
