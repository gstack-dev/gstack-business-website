import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
    TrendingUp,
    Rocket,
    Lightbulb,
    Sparkles,
    Gauge,
    Layers,
    ShieldCheck
} from "lucide-react";
import Link from "next/link";
import type { Metadata } from 'next'


export const metadata: Metadata = {
    title: 'About Us | Elevate Studio - Visionary Digital Architects',
    description: "Learn about Elevate Studio's mission, our core values, and the boutique collective of designers and engineers building world-class digital realities.",
    openGraph: {
        images: ['/aboutUs.png'],
    },
}

export default function AboutPage() {
    return (
        <main className="grow pt-12 bg-background">

            {/* 1. Hero Section */}
            <section className="max-w-7xl mx-auto px-6 md:px-8 mb-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <div className="relative z-10">
                        <span className="text-brand-tertiary font-bold text-xs uppercase tracking-widest mb-4 block">
                            Our Story
                        </span>
                        <h1 className="text-6xl md:text-7xl font-display font-extrabold tracking-tight mb-8 leading-[1.1] text-foreground">
                            About Elevate <br className="hidden md:block" />
                            <span className="bg-linear-to-r from-brand-primary to-[#b4c5ff] bg-clip-text text-transparent">
                                Studio
                            </span>
                        </h1>
                        <p className="text-muted-foreground text-xl leading-relaxed max-w-xl">
                            We are a boutique collective of designers and engineers dedicated to transforming ambitious ideas into world-class digital realities.
                        </p>
                    </div>

                    <div className="relative">
                        {/* Ambient Shadow applied, image optimized via Next.js */}
                        <div className="aspect-square rounded-2xl overflow-hidden shadow-ambient relative">
                            <Image
                                src="/about.png" // Ensure this exists in your public folder
                                alt="Modern architectural office interior"
                                fill
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                priority
                            />
                        </div>

                        {/* Overlapping Floating Element - Glassmorphism & No-Line enforced */}
                        <div className="absolute -bottom-8 -left-8 bg-surface-highest/90 backdrop-blur-md p-8 rounded-2xl shadow-ambient hidden md:block border border-transparent">
                            <div className="flex gap-5 items-center">
                                <div className="w-12 h-12 rounded-full bg-brand-tertiary flex items-center justify-center text-brand-onTertiary">
                                    <TrendingUp className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-2xl font-display font-bold text-white tracking-tight">120%</div>
                                    <div className="text-sm font-medium text-muted-foreground">Client Growth</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Narrative Story Section */}
            <section className="bg-surface-low py-32 px-6 md:px-8 mb-24">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">

                        <div className="md:col-span-4 lg:sticky lg:top-40">
                            <h2 className="text-4xl font-display font-bold tracking-tight text-foreground">
                                The Vision of Growth
                            </h2>
                        </div>

                        <div className="md:col-span-8 space-y-8 text-muted-foreground text-lg leading-relaxed">
                            <p>
                                In an era where digital noise is at an all-time high, we believe that true impact is found in the intersection of <span className="text-foreground font-semibold">clarity and performance</span>. Elevate Studio was born from a simple observation: most brands struggle not with a lack of ideas, but with the execution of those ideas across a fragmented digital landscape.
                            </p>
                            <p>
                                Our journey began by helping local innovators scale their presence through modern design systems that don't just look beautiful—they work flawlessly. We've evolved into a cross-disciplinary powerhouse that treats every line of code and every pixel with the same architectural precision.
                            </p>

                            <div className="grid grid-cols-2 gap-8 pt-8">
                                <div>
                                    <div className="text-brand-tertiary font-display font-bold text-5xl mb-2 tracking-tight">50+</div>
                                    <div className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Global Projects</div>
                                </div>
                                <div>
                                    <div className="text-brand-primary font-display font-bold text-5xl mb-2 tracking-tight">12</div>
                                    <div className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Industry Awards</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 3. Mission/Vision Cards (Bento Style) */}
            <section className="max-w-7xl mx-auto px-6 md:px-8 mb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    <div className="group bg-surface-container p-12 rounded-2xl border border-transparent hover:bg-surface-high hover:shadow-primary-glow transition-all duration-300">
                        <div className="mb-8 w-16 h-16 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform duration-500 origin-left">
                            <Rocket className="w-8 h-8" />
                        </div>
                        <h3 className="text-3xl font-display font-bold mb-6 text-foreground tracking-tight">Mission</h3>
                        <p className="text-muted-foreground leading-relaxed text-lg">
                            Our mission is to empower visionaries by building digital ecosystems that facilitate seamless growth, human-centric interaction, and sustainable competitive advantage through high-fidelity engineering.
                        </p>
                    </div>

                    <div className="group bg-surface-container p-12 rounded-2xl border border-transparent hover:bg-surface-high hover:shadow-primary-glow transition-all duration-300">
                        <div className="mb-8 w-16 h-16 rounded-full bg-brand-tertiary/10 flex items-center justify-center text-brand-tertiary group-hover:scale-110 transition-transform duration-500 origin-left">
                            <Lightbulb className="w-8 h-8" />
                        </div>
                        <h3 className="text-3xl font-display font-bold mb-6 text-foreground tracking-tight">Approach</h3>
                        <p className="text-muted-foreground leading-relaxed text-lg">
                            We leverage a research-driven design process and edge-computing development to ensure your brand isn't just current, but future-proof. We don't just build websites; we build scalable digital infrastructure.
                        </p>
                    </div>

                </div>
            </section>

            {/* 4. Values Section (The DNA) */}
            <section className="max-w-7xl mx-auto px-6 md:px-8 mb-40">
                <div className="text-center mb-20">
                    <span className="text-brand-primary font-bold text-xs uppercase tracking-widest mb-4 block">
                        Our DNA
                    </span>
                    <h2 className="text-5xl font-display font-bold tracking-tight text-foreground">
                        The Core Values
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="group bg-surface-container p-8 rounded-2xl text-center border border-transparent hover:bg-surface-high hover:shadow-primary-glow transition-all duration-300 flex flex-col items-center">
                        <Sparkles className="text-brand-primary mb-6 w-10 h-10 transition-transform duration-500 group-hover:scale-110" />
                        <h4 className="text-xl font-display font-bold mb-3 text-foreground tracking-tight">Clarity</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">Simplifying complex systems into intuitive experiences.</p>
                    </div>

                    <div className="group bg-surface-container p-8 rounded-2xl text-center border border-transparent hover:bg-surface-high hover:shadow-primary-glow transition-all duration-300 flex flex-col items-center">
                        <Gauge className="text-brand-tertiary mb-6 w-10 h-10 transition-transform duration-500 group-hover:scale-110" />
                        <h4 className="text-xl font-display font-bold mb-3 text-foreground tracking-tight">Performance</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">Optimizing for speed and efficiency at every layer.</p>
                    </div>

                    <div className="group bg-surface-container p-8 rounded-2xl text-center border border-transparent hover:bg-surface-high hover:shadow-primary-glow transition-all duration-300 flex flex-col items-center">
                        <Layers className="text-brand-primary mb-6 w-10 h-10 transition-transform duration-500 group-hover:scale-110" />
                        <h4 className="text-xl font-display font-bold mb-3 text-foreground tracking-tight">Scalability</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">Building flexible architectures that grow with you.</p>
                    </div>

                    <div className="group bg-surface-container p-8 rounded-2xl text-center border border-transparent hover:bg-surface-high hover:shadow-primary-glow transition-all duration-300 flex flex-col items-center">
                        <ShieldCheck className="text-brand-tertiary mb-6 w-10 h-10 transition-transform duration-500 group-hover:scale-110" />
                        <h4 className="text-xl font-display font-bold mb-3 text-foreground tracking-tight">Reliability</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">Consistent delivery and rock-solid digital foundations.</p>
                    </div>
                </div>
            </section>

            {/* 5. CTA Section */}
            <section className="max-w-7xl mx-auto px-6 md:px-8 mb-32">
                <div className="relative bg-surface-container rounded-[3rem] overflow-hidden p-12 md:p-24 text-center shadow-ambient">

                    {/* System Gradient Overlay */}
                    <div className="absolute inset-0 bg-linear-to-br from-brand-primary to-surface-container opacity-90 pointer-events-none"></div>

                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 text-white tracking-tight">
                            Ready to elevate your digital presence?
                        </h2>
                        <p className="text-blue-100/80 text-xl mb-12 leading-relaxed">
                            Let's collaborate on your next breakthrough project and build something extraordinary together.
                        </p>
                        <Link href="/contact">
                            <Button
                                variant="tertiary"
                                size="lg"
                                className="rounded-full px-10 h-14 font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_40px_rgba(78,222,163,0.3)]"
                            >
                                Start your project with us
                            </Button>
                        </Link>
                    </div>

                </div>
            </section>

        </main>
    );
}