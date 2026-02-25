"use client";

import { motion } from "framer-motion";
import { Code2, Twitter, BookOpen, Github } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="py-8 px-4 sm:px-6 lg:px-8 border-t border-gray-200"
        >
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    {/* Logo */}
                    <a
                        href="#"
                        className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors"
                        onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                    >
                        <Code2 className="w-5 h-5 text-indigo-600" />
                        <span className="font-medium">Kenty</span>
                    </a>

                    {/* SNS Links */}
                    <div className="flex items-center gap-4">
                        <a
                            href="https://x.com/sibehasu_"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            <Twitter className="w-5 h-5" />
                        </a>
                        <a
                            href="https://zenn.dev/kenty"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            <BookOpen className="w-5 h-5" />
                        </a>
                        <a
                            href="https://github.com/kenty-gn"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-gray-600 transition-colors"
                        >
                            <Github className="w-5 h-5" />
                        </a>
                    </div>

                    {/* Copyright */}
                    <p className="text-sm text-gray-400">
                        &copy; {currentYear} Kenty
                    </p>
                </div>
            </div>
        </motion.footer>
    );
}
