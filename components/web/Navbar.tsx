"use client"
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Navbar() {
    const pathname = usePathname();
    return (
        <header className="fixed top-0 z-50 w-full bg-surface-container/70 backdrop-blur-[20px] shadow-ambient">
            <div className="flex justify-between items-center max-w-7xl mx-auto w-full px-8 py-4">

                {/* Brand / Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <Image
                        src="/navIcon.svg"
                        alt="Logo"
                        width={13.5}
                        height={22.5}
                    />
                    <span className="text-2xl font-display font-bold tracking-tight text-white">
                        Elevate Studio
                    </span>
                </Link>

                {/* Navigation - Enforcing the "No-Line" Rule */}
                <nav className="hidden md:flex items-center gap-8">
                    {/* Active State - Color shift only, no borders */}
                    <Link href="/" className={cn("text-brand-tertiary font-semibold transition-colors", pathname === "/" ? "text-brand-tertiary" : "text-muted-foreground hover:text-brand-tertiary hover:opacity-100 transition-all")}>
                        Home
                    </Link>
                    <Link href="/services" className={cn("text-brand-tertiary font-semibold transition-colors", pathname === "/services" ? "text-brand-tertiary" : "text-muted-foreground hover:text-brand-tertiary hover:opacity-100 transition-all")}>
                        Services
                    </Link>
                    <Link href="/project" className={cn("text-brand-tertiary font-semibold transition-colors", pathname === "/project" ? "text-brand-tertiary" : "text-muted-foreground hover:text-brand-tertiary hover:opacity-100 transition-all")}>
                        Projects
                    </Link>
                    <Link href="/about" className={cn("text-brand-tertiary font-semibold transition-colors", pathname === "/about" ? "text-brand-tertiary" : "text-muted-foreground hover:text-brand-tertiary hover:opacity-100 transition-all")}>
                        About
                    </Link>
                </nav>

                {/* High-Action Tertiary CTA */}
                <Link href="contact" className="cursor-pointer">
                    <Button variant="tertiary" size="default" >
                        Start Project
                    </Button>
                </Link>
            </div>
        </header>
    );
}