import Image from "next/image";
import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[795px] flex items-center px-8 overflow-hidden bg-linear-to-br from-background via-background to-brand-primary/20">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Column: Editorial Typography & Actions */}
        <div className="space-y-8">
          <span className="inline-block px-4 py-1.5 rounded-full bg-surface-high text-brand-tertiary text-xs font-bold tracking-widest uppercase">
            Digital Excellence
          </span>
          
          <h1 className="text-5xl md:text-7xl font-display font-extrabold tracking-[-0.02em] leading-[1.1] text-foreground">
            Helping brands grow with <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-primary to-brand-tertiary">
              modern digital experiences
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
            We build websites and digital solutions designed to elevate businesses and convert visitors into customers through precision engineering and visionary design.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <Button variant="tertiary" size="lg" className="rounded-full px-8 h-14 font-bold text-lg">
              Start Your Project
            </Button>
            {/* Secondary variant automatically applies the surface_container_high background and 20% ghost border */}
            <Button variant="secondary" size="lg" className="rounded-full px-8 h-14 font-bold text-lg">
              View Services
            </Button>
          </div>
        </div>

        {/* Right Column: Intentional Asymmetry & Floating Glassmorphism */}
        <div className="relative hidden md:block">
          {/* Main Image Container */}
          <div className="aspect-square rounded-2xl overflow-hidden shadow-ambient rotate-3 hover:rotate-0 transition-transform duration-700 relative">
            <Image
              src="/heroImage.png" // Using your uploaded asset
              alt="Futuristic clean digital interface displayed on a high-end monitor"
              fill
              className="object-cover"
              priority
            />
          </div>
          
          {/* Floating Stats Card - Enforcing the Glass & Gradient Rule */}
          <div className="absolute -bottom-10 -left-10 bg-surface-highest/80 backdrop-blur-[20px] p-8 rounded-2xl shadow-ambient border border-[#434655]/20">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-brand-tertiary flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-brand-onTertiary" />
              </div>
              <div>
                <p className="text-2xl font-bold font-display text-white tracking-tight">98%</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider font-bold">
                  Conversion Boost
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Lighting */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-brand-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-brand-tertiary/10 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}