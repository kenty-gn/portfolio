"use client";

import { motion } from "framer-motion";
import { Code2, Heart } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <motion.footer
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border/50"
        >
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    {/* Logo */}
                    <a
                        href="#"
                        className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                        onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                    >
                        <Code2 className="w-5 h-5 text-blue-500" />
                        <span className="font-medium">K.Fujioka</span>
                    </a>

                    {/* Copyright */}
                    <p className="text-sm text-muted-foreground flex items-center gap-1">
                        © {currentYear} Kento Fujioka. Made with
                        <Heart className="w-4 h-4 text-red-500 fill-red-500" />
                    </p>
                </div>
            </div>
        </motion.footer>
    );
}
