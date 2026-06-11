import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
    ArrowDown,
    Palette,
    CheckCircle2,
    Terminal,
    Database,
    RefreshCw,
    LayoutDashboard,
    Wrench
} from "lucide-react";
import Link from "next/link";

export default function ServicesPage() {
    return (
        <main className="pt-12 bg-background flex flex-col min-h-screen">

            {/* 1. Hero Section */}
            <section className="px-6 md:px-8 mb-32 relative">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="text-brand-tertiary font-bold text-xs uppercase tracking-widest mb-6 block">
                            Our Expertise
                        </span>
                        <h1 className="text-5xl md:text-7xl font-display font-extrabold tracking-tight leading-tight mb-8 text-foreground">
                            Services built for <br />
                            {/* Signature Gradient Text */}
                            <span className="bg-linear-to-r from-brand-primary to-[#b4c5ff] bg-clip-text text-transparent">
                                growing businesses
                            </span>
                        </h1>
                        <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mb-10">
                            We bridge the gap between visionary design and technical excellence. Our solutions are engineered to scale, perform, and convert.
                        </p>
                        <Link href="#services" className="flex flex-wrap gap-4">
                            <Button variant="tertiary" size="lg" className="rounded-full px-8 h-14 font-bold text-lg flex items-center gap-2">
                                View Our Process
                                <ArrowDown className="w-5 h-5" />
                            </Button>
                        </Link>
                    </div>

                    <div className="relative">
                        <div className="aspect-square rounded-2xl overflow-hidden relative z-10 shadow-ambient">
                            <Image
                                src="/service.png" // Add your image to the public folder
                                alt="Modern architectural office space"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        {/* Ambient Background Lighting */}
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-primary/20 rounded-full blur-[100px] pointer-events-none" />
                        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand-tertiary/10 rounded-full blur-[100px] pointer-events-none" />
                    </div>
                </div>
            </section>

            {/* 2. Services Grid (Bento Style) */}
            <section
                className="px-6 md:px-8 py-24 bg-surface-low relative overflow-hidden scroll-mt-32"
                id="services"
            >
                <div className="max-w-7xl mx-auto">
                    <div className="mb-20 text-center max-w-2xl mx-auto">
                        <h2 className="text-4xl font-display font-bold mb-6 tracking-tight text-foreground">
                            Full-Spectrum Digital Services
                        </h2>
                        <p className="text-muted-foreground text-lg">
                            Strategic execution across the entire project lifecycle, from initial pixel to final deployment.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

                        {/* Service 1: Web Design (Span 7) */}
                        <div className="md:col-span-7 bg-surface-container p-10 md:p-12 rounded-2xl group transition-all duration-500 hover:bg-surface-high hover:shadow-primary-glow border border-transparent relative overflow-hidden">
                            <div className="relative z-10">
                                <Palette className="text-brand-primary w-12 h-12 mb-8 transition-transform duration-500 group-hover:scale-110 origin-left" />
                                <h3 className="text-3xl font-display font-bold mb-6 tracking-tight text-foreground">Web Design</h3>
                                <p className="text-muted-foreground text-lg mb-8 max-w-md">
                                    We craft immersive experiences that capture brand identity while ensuring perfect usability across all screens.
                                </p>
                                <ul className="space-y-4 mb-8">
                                    <li className="flex items-center gap-3 text-foreground font-medium"><CheckCircle2 className="text-brand-tertiary w-5 h-5" /> Landing pages that convert</li>
                                    <li className="flex items-center gap-3 text-foreground font-medium"><CheckCircle2 className="text-brand-tertiary w-5 h-5" /> High-impact business websites</li>
                                    <li className="flex items-center gap-3 text-foreground font-medium"><CheckCircle2 className="text-brand-tertiary w-5 h-5" /> Precision responsive layouts</li>
                                </ul>
                            </div>
                        </div>

                        {/* Service 2: Web Development (Span 5) */}
                        <div className="md:col-span-5 bg-surface-container p-10 md:p-12 rounded-2xl group transition-all duration-500 hover:bg-surface-high hover:shadow-primary-glow border border-transparent">
                            <Terminal className="text-brand-primary w-12 h-12 mb-8 transition-transform duration-500 group-hover:scale-110 origin-left" />
                            <h3 className="text-3xl font-display font-bold mb-6 tracking-tight text-foreground">Web Development</h3>
                            <p className="text-muted-foreground mb-8">
                                Engineering performant, scalable frontends using modern frameworks and multi-page architectures.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-surface-lowest p-4 rounded-xl text-center">
                                    <span className="block font-display font-bold text-2xl text-brand-primary mb-1">99.9%</span>
                                    <span className="text-xs uppercase font-bold tracking-wider text-muted-foreground">Uptime</span>
                                </div>
                                <div className="bg-surface-lowest p-4 rounded-xl text-center">
                                    <span className="block font-display font-bold text-2xl text-brand-primary mb-1">&lt;1s</span>
                                    <span className="text-xs uppercase font-bold tracking-wider text-muted-foreground">LCP Time</span>
                                </div>
                            </div>
                        </div>

                        {/* Service 3: Backend Integration (Span 5) */}
                        <div className="md:col-span-5 bg-surface-container p-10 md:p-12 rounded-2xl group transition-all duration-500 hover:bg-surface-high hover:shadow-primary-glow border border-transparent">
                            <Database className="text-brand-primary w-12 h-12 mb-8 transition-transform duration-500 group-hover:scale-110 origin-left" />
                            <h3 className="text-3xl font-display font-bold mb-6 tracking-tight text-foreground">Backend Integration</h3>
                            <p className="text-muted-foreground mb-8">
                                Powerful logic and data management to turn static sites into dynamic business tools.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between p-4 bg-surface-lowest rounded-xl">
                                    <span className="text-sm font-medium text-foreground">API Integration</span>
                                    <RefreshCw className="text-brand-tertiary w-5 h-5" />
                                </div>
                                <div className="flex items-center justify-between p-4 bg-surface-lowest rounded-xl">
                                    <span className="text-sm font-medium text-foreground">Admin Dashboards</span>
                                    <LayoutDashboard className="text-brand-tertiary w-5 h-5" />
                                </div>
                            </div>
                        </div>

                        {/* Service 4: Website Maintenance (Span 7) */}
                        <div className="md:col-span-7 bg-surface-container p-10 md:p-12 rounded-2xl group transition-all duration-500 hover:bg-surface-high hover:shadow-primary-glow border border-transparent relative overflow-hidden">
                            <div className="relative z-10 flex flex-col h-full">
                                <Wrench className="text-brand-primary w-12 h-12 mb-8 transition-transform duration-500 group-hover:scale-110 origin-left" />
                                <h3 className="text-3xl font-display font-bold mb-6 tracking-tight text-foreground">Website Maintenance</h3>
                                <p className="text-muted-foreground text-lg mb-8 max-w-md">
                                    Peace of mind for your digital assets. We handle the technical heavy lifting so you can focus on growth.
                                </p>
                                <div className="mt-auto flex flex-wrap gap-4">
                                    <span className="px-5 py-2 bg-brand-primary/10 text-brand-primary rounded-full text-xs font-bold uppercase tracking-widest">
                                        Daily Backups
                                    </span>
                                    <span className="px-5 py-2 bg-brand-primary/10 text-brand-primary rounded-full text-xs font-bold uppercase tracking-widest">
                                        Security Updates
                                    </span>
                                </div>
                            </div>
                            {/* Internal Accent Lighting */}
                            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-linear-to-tl from-brand-primary/10 to-transparent blur-3xl pointer-events-none" />
                        </div>

                    </div>
                </div>
            </section>

            {/* 3. Process Section (Cascading Steps) */}
            <section className="px-6 md:px-8 py-32 bg-background">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
                        <div className="max-w-xl">
                            <span className="text-brand-tertiary font-bold text-xs uppercase tracking-widest mb-6 block">
                                The Blueprint
                            </span>
                            <h2 className="text-5xl font-display font-bold tracking-tight leading-tight text-foreground">
                                Our proven path to digital success.
                            </h2>
                        </div>
                        <div className="pb-2">
                            <p className="text-muted-foreground text-lg">
                                A structured, four-step methodology designed for clarity and speed.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {/* Step 1 */}
                        <div className="bg-surface-container p-8 rounded-2xl group transition-colors duration-300 hover:bg-surface-high relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-brand-primary/50 group-hover:bg-brand-primary transition-colors" />
                            <span className="text-5xl font-display font-black text-[#434655]/30 mb-6 block group-hover:text-brand-primary/40 transition-colors">01</span>
                            <h4 className="text-xl font-display font-bold mb-4 text-foreground tracking-tight">Discovery</h4>
                            <p className="text-muted-foreground text-sm leading-relaxed">Defining your goals, audience, and technical requirements through intensive stakeholder sessions.</p>
                        </div>
                        {/* Step 2 */}
                        <div className="bg-surface-container p-8 rounded-2xl group transition-colors duration-300 hover:bg-surface-high relative overflow-hidden md:mt-12">
                            <div className="absolute top-0 left-0 w-full h-1 bg-brand-primary/50 group-hover:bg-brand-primary transition-colors" />
                            <span className="text-5xl font-display font-black text-[#434655]/30 mb-6 block group-hover:text-brand-primary/40 transition-colors">02</span>
                            <h4 className="text-xl font-display font-bold mb-4 text-foreground tracking-tight">Design</h4>
                            <p className="text-muted-foreground text-sm leading-relaxed">Visualizing the interface with high-fidelity prototypes that prioritize user flow and brand impact.</p>
                        </div>
                        {/* Step 3 */}
                        <div className="bg-surface-container p-8 rounded-2xl group transition-colors duration-300 hover:bg-surface-high relative overflow-hidden md:mt-24">
                            <div className="absolute top-0 left-0 w-full h-1 bg-brand-primary/50 group-hover:bg-brand-primary transition-colors" />
                            <span className="text-5xl font-display font-black text-[#434655]/30 mb-6 block group-hover:text-brand-primary/40 transition-colors">03</span>
                            <h4 className="text-xl font-display font-bold mb-4 text-foreground tracking-tight">Development</h4>
                            <p className="text-muted-foreground text-sm leading-relaxed">Translating designs into clean, semantic code with robust backend logic and performance checks.</p>
                        </div>
                        {/* Step 4 */}
                        <div className="bg-surface-container p-8 rounded-2xl group transition-colors duration-300 hover:bg-surface-high relative overflow-hidden md:mt-36">
                            <div className="absolute top-0 left-0 w-full h-1 bg-brand-tertiary/50 group-hover:bg-brand-tertiary transition-colors" />
                            <span className="text-5xl font-display font-black text-[#434655]/30 mb-6 block group-hover:text-brand-tertiary/40 transition-colors">04</span>
                            <h4 className="text-xl font-display font-bold mb-4 text-foreground tracking-tight">Launch</h4>
                            <p className="text-muted-foreground text-sm leading-relaxed">Final optimization, cross-browser testing, and seamless deployment to your live environment.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Bottom CTA */}
            <section className="px-6 md:px-8 py-32 mb-16">
                <div className="max-w-7xl mx-auto">
                    {/* Replaced hardcoded gradient with our mapped design tokens */}
                    <div className="bg-linear-to-br from-brand-primary to-brand-surface-container p-12 md:p-24 rounded-[3rem] text-center relative overflow-hidden shadow-ambient">

                        {/* Abstract Background Grid pattern */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none">
                            <div className="grid grid-cols-12 gap-4 h-full">
                                {Array.from({ length: 12 }).map((_, i) => (
                                    <div key={i} className="border-r border-white/20 h-full"></div>
                                ))}
                            </div>
                        </div>

                        <div className="relative z-10">
                            <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-8 text-white">
                                Need a custom solution?
                            </h2>
                            <p className="text-xl text-blue-100/80 mb-12 max-w-2xl mx-auto">
                                Let’s talk about how we can build something exceptional together for your brand.
                            </p>
                            <Link href="/contact" className="flex justify-center">
                                <Button variant="tertiary" size="lg" className="rounded-full px-12 h-16 font-bold text-xl hover:scale-105 shadow-[0_0_40px_rgba(78,222,163,0.3)]">
                                    Let’s talk.
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}