import { Button } from "@/components/ui/button";

export default function CallToAction() {
    return (
        <section className="relative py-32 px-8 overflow-hidden bg-background">

            {/* Signature Gradient Overlay - Primary to Tertiary at 10% opacity */}
            <div className="absolute inset-0 bg-linear-to-r from-brand-primary/10 to-brand-tertiary/10 pointer-events-none" />

            {/* Content Container */}
            <div className="max-w-4xl mx-auto text-center relative z-10">

                <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tight text-foreground mb-8">
                    Ready to elevate your digital presence?
                </h2>

                <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                    Let's collaborate to build something exceptional. Our team is ready to transform your vision into a high-performance reality.
                </p>

                {/* High-Action Tertiary Button */}
                <Button
                    variant="tertiary"
                    size="lg"
                    className="rounded-full px-12 h-16 font-bold text-xl transition-transform duration-300 hover:scale-105 shadow-[0_0_40px_rgba(78,222,163,0.3)]"
                >
                    Let’s Work Together
                </Button>

            </div>
        </section>
    );
}