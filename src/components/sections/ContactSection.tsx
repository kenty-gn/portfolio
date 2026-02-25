"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, Twitter, Loader2, CheckCircle, AlertCircle, BookOpen, Users, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { sendContactEmail, type ContactFormData } from "@/app/actions/contact";

type FormStatus = "idle" | "loading" | "success" | "error";

export function ContactSection() {
    const [formData, setFormData] = useState<ContactFormData>({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [status, setStatus] = useState<FormStatus>("idle");
    const [statusMessage, setStatusMessage] = useState("");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");

        try {
            const result = await sendContactEmail(formData);

            if (result.success) {
                setStatus("success");
                setStatusMessage(result.message);
                setFormData({ name: "", email: "", subject: "", message: "" });
            } else {
                setStatus("error");
                setStatusMessage(result.message);
            }
        } catch {
            setStatus("error");
            setStatusMessage("エラーが発生しました。しばらく経ってから再度お試しください。");
        }

        // 5秒後にステータスをリセット
        setTimeout(() => {
            if (status !== "loading") {
                setStatus("idle");
                setStatusMessage("");
            }
        }, 5000);
    };

    return (
        <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50/50">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">
                        <span className="bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent">
                            Contact
                        </span>
                    </h2>
                    <p className="text-gray-500 text-center mb-12 max-w-xl mx-auto">
                        お仕事のご依頼やご質問など、お気軽にお問い合わせください。
                        できるだけ早くご返信いたします。
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="bg-white border border-gray-200 rounded-3xl p-8 sm:p-12 shadow-sm"
                >
                    {/* Status Message */}
                    {status === "success" && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center gap-3"
                        >
                            <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                            <p className="text-emerald-700">{statusMessage}</p>
                        </motion.div>
                    )}

                    {status === "error" && (
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 flex items-center gap-3"
                        >
                            <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                            <p className="text-red-700">{statusMessage}</p>
                        </motion.div>
                    )}

                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-gray-700">
                                    お名前 <span className="text-red-400">*</span>
                                </label>
                                <Input
                                    id="name"
                                    type="text"
                                    placeholder="山田 太郎"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    disabled={status === "loading"}
                                    className="bg-gray-50 border-gray-200 focus:border-indigo-500 rounded-xl h-12"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                                    メールアドレス <span className="text-red-400">*</span>
                                </label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="your@email.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    disabled={status === "loading"}
                                    className="bg-gray-50 border-gray-200 focus:border-indigo-500 rounded-xl h-12"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                                件名 <span className="text-red-400">*</span>
                            </label>
                            <Input
                                id="subject"
                                type="text"
                                placeholder="お問い合わせ内容"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                disabled={status === "loading"}
                                className="bg-gray-50 border-gray-200 focus:border-indigo-500 rounded-xl h-12"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-gray-700">
                                メッセージ <span className="text-red-400">*</span>
                            </label>
                            <Textarea
                                id="message"
                                placeholder="お問い合わせ内容を入力してください..."
                                rows={6}
                                value={formData.message}
                                onChange={handleChange}
                                required
                                disabled={status === "loading"}
                                className="bg-gray-50 border-gray-200 focus:border-indigo-500 rounded-xl resize-none"
                            />
                        </div>

                        <Button
                            type="submit"
                            size="lg"
                            disabled={status === "loading"}
                            className="w-full bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl h-14 text-lg shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:shadow-indigo-500/40 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {status === "loading" ? (
                                <>
                                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                    送信中...
                                </>
                            ) : (
                                <>
                                    <Send className="w-5 h-5 mr-2" />
                                    送信する
                                </>
                            )}
                        </Button>
                    </form>

                    {/* Divider */}
                    <div className="relative my-10">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-white px-4 text-gray-400">
                                または
                            </span>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        <Button
                            variant="outline"
                            size="lg"
                            className="rounded-xl h-12 border-gray-200 text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 hover:border-indigo-200"
                            asChild
                        >
                            <a
                                href="https://x.com/sibehasu_"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Twitter className="w-4 h-4 mr-2" />
                                X
                            </a>
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="rounded-xl h-12 border-gray-200 text-gray-700 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200"
                            asChild
                        >
                            <a
                                href="https://zenn.dev/kenty_vibe"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <BookOpen className="w-4 h-4 mr-2" />
                                Zenn
                            </a>
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="rounded-xl h-12 border-gray-200 text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 hover:border-emerald-200"
                            asChild
                        >
                            <a
                                href="https://menta.work/user/220479"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Users className="w-4 h-4 mr-2" />
                                MENTA
                            </a>
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="rounded-xl h-12 border-gray-200 text-gray-700 hover:bg-amber-50 hover:text-amber-600 hover:border-amber-200"
                            asChild
                        >
                            <a
                                href="https://coconala.com/users/1585448"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <ShoppingBag className="w-4 h-4 mr-2" />
                                ココナラ
                            </a>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
