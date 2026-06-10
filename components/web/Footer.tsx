"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { useState } from "react";

export default function Footer() {
    const [email, setEmail] = useState("");

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(email);
    };

    return (
        <footer className="w-full bg-surface-low py-16 px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto">

                {/* Brand Column */}
                <div className="space-y-6">
                    <div className="flex items-center gap-2">
                        <Image
                            src="/navIcon.svg"
                            alt="Logo"
                            width={13.5}
                            height={22.5}
                        />
                        <span className="text-xl font-display font-bold tracking-tight text-white">
                            Elevate Studio
                        </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        Designing the future of digital interaction through engineering excellence and creative vision.
                    </p>
                </div>

                {/* Navigation Links */}
                <div>
                    <h5 className="text-xs uppercase tracking-widest font-bold text-white mb-6">
                        Navigation
                    </h5>
                    <ul className="space-y-4">
                        <li><Link className="text-sm text-muted-foreground hover:text-brand-tertiary transition-colors" href="/">Home</Link></li>
                        <li><Link className="text-sm text-muted-foreground hover:text-brand-tertiary transition-colors" href="/services">Services</Link></li>
                        <li><Link className="text-sm text-muted-foreground hover:text-brand-tertiary transition-colors" href="/about">About</Link></li>
                        <li><Link className="text-sm text-muted-foreground hover:text-brand-tertiary transition-colors" href="/project">Projects</Link></li>
                        <li><Link className="text-sm text-muted-foreground hover:text-brand-tertiary transition-colors" href="/contact">Contact</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h5 className="text-xs uppercase tracking-widest font-bold text-white mb-6">
                        Contact
                    </h5>
                    <ul className="space-y-4">
                        <li className="text-sm text-muted-foreground">hello@elevate.studio</li>
                        <li className="text-sm text-muted-foreground">123 Design District</li>
                        <li className="text-sm text-muted-foreground">London, UK</li>
                    </ul>
                </div>
                {/* Newsletter Form using Shadcn */}
                <div>
                    <h5 className="text-xs uppercase tracking-widest font-bold text-white mb-6">
                        Newsletter
                    </h5>
                    <form className="space-y-4">
                        <Input
                            type="email"
                            placeholder="Email Address"
                            // Uses the specific shadcn input configuration we set up earlier
                            className="bg-surface-lowest border-transparent"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {/* Uses the primary gradient button variant defined in the system */}
                        <Button className="w-full" variant={email == "" ? "secondary" : "default"} size="default">
                            Subscribe
                        </Button>
                    </form>
                </div>
            </div>

            {/* Copyright / Ghost Border Fallback */}
            <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-[#434655]/20 text-center">
                <p className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Elevate Studio. All rights reserved.
                </p>
            </div>
        </footer >
    );
}