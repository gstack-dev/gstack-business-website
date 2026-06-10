import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FeaturedWork() {
  return (
    <section className="py-24 px-8 bg-surface-low">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header & Action */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-display font-bold tracking-tight text-foreground mb-4">
              Featured Work
            </h2>
            <p className="text-muted-foreground text-lg">
              Recent success stories from our studio.
            </p>
          </div>
          
          {/* Swapped raw button for Next.js Link with a hover micro-interaction */}
          <Link 
            href="/project" 
            className="group flex items-center gap-2 text-brand-primary font-bold hover:text-brand-primary/80 transition-colors"
          >
            View Portfolio 
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Work Card 1: Primary Brand Focus */}
          <Link href="/project/brand-redesign" className="group cursor-pointer block">
            <div className="aspect-16/10 rounded-2xl overflow-hidden mb-6 relative shadow-ambient">
              <Image 
                src="/project1.png" // Ensure you have this asset in your public/ folder
                alt="Clean minimalist website design preview for a luxury lifestyle brand" 
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Gradient Overlay for text legibility */}
              <div className="absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent opacity-80" />
              
              {/* Floating Primary Badge */}
              <div className="absolute bottom-6 left-6">
                <span className="px-4 py-1.5 bg-brand-primary text-white text-xs font-bold rounded-full tracking-wide">
                  Case Study
                </span>
              </div>
            </div>
            <h3 className="text-2xl font-display font-bold text-foreground transition-colors duration-300 group-hover:text-brand-primary tracking-tight">
              Brand Website Redesign
            </h3>
            <p className="text-muted-foreground mt-3 leading-relaxed">
              A complete visual overhaul for a global fashion retailer, resulting in a 45% increase in engagement.
            </p>
          </Link>

          {/* Work Card 2: Tertiary Action Accent */}
          <Link href="/project/agency-site" className="group cursor-pointer block">
            <div className="aspect-16/10 rounded-2xl overflow-hidden mb-6 relative shadow-ambient">
              <Image 
                src="/project2.png" 
                alt="A dark-themed agency multi-page website design with glowing UI elements" 
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background via-background/20 to-transparent opacity-80" />
              
              {/* Floating Tertiary Badge */}
              <div className="absolute bottom-6 left-6">
                <span className="px-4 py-1.5 bg-brand-tertiary text-brand-onTertiary text-xs font-bold rounded-full tracking-wide">
                  Multi-Page
                </span>
              </div>
            </div>
            <h3 className="text-2xl font-display font-bold text-foreground transition-colors duration-300 group-hover:text-brand-tertiary tracking-tight">
              Agency Multi-Page Site
            </h3>
            <p className="text-muted-foreground mt-3 leading-relaxed">
              Scalable digital hub for a creative marketing agency with integrated project management tools.
            </p>
          </Link>

        </div>
      </div>
    </section>
  );
}