import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProjectPage() {
    return (
        <main className="pt-12 pb-24 bg-background min-h-screen">

            {/* 1. Hero Section */}
            <section className="max-w-7xl mx-auto px-6 md:px-8 mb-24">
                <div className="max-w-3xl">
                    <span className="text-xs uppercase tracking-widest font-bold text-brand-tertiary mb-4 block">
                        Portfolio
                    </span>
                    <h1 className="text-6xl md:text-8xl font-display font-extrabold tracking-tight mb-8 leading-[0.9] text-foreground">
                        Selected <br className="hidden" />
                        <span className="text-transparent bg-clip-text bg-linear-to-br from-brand-primary to-[#b4c5ff]">
                            Work.
                        </span>
                    </h1>
                    <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                        We bridge the gap between engineering precision and visionary design. Explore our latest architectural digital experiences.
                    </p>
                </div>
            </section>

            {/* 2. Project Grid: Bento/Asymmetric Style */}
            <section className="max-w-7xl mx-auto px-6 md:px-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

                    {/* Project 1: Large Featured (Span 8) */}
                    <Link href="/project/brand-redesign" className="col-span-12 md:col-span-8 group block">
                        <div className="relative overflow-hidden rounded-2xl bg-surface-container h-[600px] border border-transparent hover:shadow-primary-glow transition-all duration-500">
                            <Image
                                src="/projects1.png" // Ensure this asset is in your public/ folder
                                alt="Modern dark-themed brand website dashboard"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-80"
                                priority
                            />
                            {/* Deep Gradient Overlay for text legibility */}
                            <div className="absolute inset-0 bg-linear-to-t from-background via-background/40 to-transparent" />

                            <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full">
                                <div className="flex items-center gap-3 mb-6">
                                    <span className="px-4 py-1.5 rounded-full bg-brand-tertiary/10 text-brand-tertiary text-xs font-bold uppercase tracking-wider">
                                        Completed
                                    </span>
                                    <span className="text-muted-foreground text-xs font-bold uppercase tracking-widest">
                                        Brand Redesign
                                    </span>
                                </div>
                                <h2 className="text-4xl font-display font-bold tracking-tight mb-4 text-white">
                                    Brand Website Redesign
                                </h2>
                                <p className="text-muted-foreground max-w-lg mb-8 leading-relaxed">
                                    A comprehensive overhaul of a global luxury brand's digital identity, focusing on immersive storytelling and high-performance e-commerce integration.
                                </p>
                                <div className="flex items-center gap-2 text-brand-primary font-bold">
                                    View Case Study
                                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                                </div>
                            </div>
                        </div>
                    </Link>

                    {/* Project 2: Vertical Small (Span 4) */}
                    <Link href="/project/agency-platform" className="col-span-12 md:col-span-4 group block">
                        <div className="relative overflow-hidden rounded-2xl bg-surface-container h-full flex flex-col border border-transparent hover:bg-surface-high hover:shadow-primary-glow transition-all duration-500">
                            <div className="h-1/2 relative overflow-hidden bg-surface-lowest">
                                <Image
                                    src="/projects2.png"
                                    alt="Minimalist digital agency workspace"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-50 group-hover:opacity-70"
                                />
                            </div>
                            <div className="p-8 grow flex flex-col justify-between relative z-10">
                                <div>
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider">
                                            In Progress
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-display font-bold tracking-tight mb-3 text-foreground">
                                        Digital Agency Platform
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        Designing a bespoke internal workflow engine for creative teams to manage assets and client collaboration seamlessly.
                                    </p>
                                </div>
                                <span className="text-xs text-muted-foreground font-bold uppercase tracking-widest mt-6 block">
                                    SaaS & Tooling
                                </span>
                            </div>
                        </div>
                    </Link>

                    {/* Project 3: Horizontal Medium (Span 5) */}
                    <Link href="/project/service-company" className="col-span-12 md:col-span-5 group block">
                        <div className="relative overflow-hidden rounded-2xl bg-surface-container h-[450px] border border-transparent hover:shadow-primary-glow transition-all duration-500">
                            <Image
                                src="/projects3.png"
                                alt="Team collaborating on a large digital interface"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-40 group-hover:opacity-60"
                            />
                            <div className="absolute inset-0 p-8 flex flex-col justify-end bg-linear-to-t from-background via-background/60 to-transparent">
                                <span className="text-xs text-brand-tertiary font-bold uppercase tracking-widest mb-3">
                                    Service Industry
                                </span>
                                <h3 className="text-2xl font-display font-bold tracking-tight mb-2 text-white">
                                    Service Company Website
                                </h3>
                                <p className="text-sm text-muted-foreground max-w-sm mb-6 leading-relaxed">
                                    Optimizing conversion funnels for a nationwide logistics provider through data-driven UX patterns.
                                </p>
                                <div className="flex items-center gap-2">
                                    <span className="px-3 py-1 rounded-full bg-surface-highest text-[10px] font-bold text-white uppercase tracking-wider">
                                        Coming Soon
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Link>

                    {/* 3. Call to Action Bento Item (Span 7) */}
                    <div className="col-span-12 md:col-span-7 bg-surface-lowest rounded-2xl p-8 md:p-12 flex flex-col justify-center relative overflow-hidden border border-transparent shadow-ambient">
                        {/* Ambient Background Lighting */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none" />

                        <div className="relative z-10">
                            <h2 className="text-4xl font-display font-bold tracking-tight mb-6 text-foreground">
                                Have a project<br />in mind?
                            </h2>
                            <p className="text-muted-foreground max-w-md mb-10 leading-relaxed text-lg">
                                We’re currently accepting new projects for Q3 {new Date().getFullYear()}. Let’s build something that redefines your industry standards.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <Link href="/contact">
                                    <Button variant="tertiary" size="lg" className="rounded-full px-8 font-bold text-lg">
                                        Let's Talk
                                    </Button>
                                </Link>
                                <Link href="/services">
                                    {/* Secondary uses surface_high with the subtle ghost border fallback */}
                                    <Button variant="secondary" size="lg" className="rounded-full px-8 font-bold text-lg">
                                        Our Process
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

        </main>
    );
}