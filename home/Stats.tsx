import { ShieldCheck } from "lucide-react";

export default function StatsGrid() {
    return (
        <section className="py-24 px-8 bg-background">
            <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">

                {/* Stat 1: Primary Brand Focus */}
                <div className="group bg-surface-container p-8 rounded-xl border border-transparent transition-all duration-300 hover:bg-surface-high hover:shadow-primary-glow flex flex-col justify-center">
                    <p className="text-4xl font-display font-bold tracking-tight text-brand-primary mb-2 transition-transform duration-300 origin-left group-hover:scale-105">
                        20+
                    </p>
                    <p className="text-sm text-muted-foreground font-medium">
                        Projects Planned
                    </p>
                </div>

                {/* Stat 2: Tertiary Action Accent */}
                <div className="group bg-surface-container p-8 rounded-xl border border-transparent transition-all duration-300 hover:bg-surface-high hover:shadow-primary-glow flex flex-col justify-center">
                    <p className="text-4xl font-display font-bold tracking-tight text-brand-tertiary mb-2 transition-transform duration-300 origin-left group-hover:scale-105">
                        100%
                    </p>
                    <p className="text-sm text-muted-foreground font-medium">
                        Responsive Design
                    </p>
                </div>

                {/* Stat 3: Primary Brand Focus */}
                <div className="group bg-surface-container p-8 rounded-xl border border-transparent transition-all duration-300 hover:bg-surface-high hover:shadow-primary-glow flex flex-col justify-center">
                    <p className="text-4xl font-display font-bold tracking-tight text-brand-primary mb-2 transition-transform duration-300 origin-left group-hover:scale-105">
                        Fast
                    </p>
                    <p className="text-sm text-muted-foreground font-medium">
                        Performance
                    </p>
                </div>

                {/* Stat 4: Icon Driven Accent */}
                <div className="group bg-surface-container p-8 rounded-xl border border-transparent transition-all duration-300 hover:bg-surface-high hover:shadow-primary-glow flex flex-col justify-center">
                    <ShieldCheck className="w-10 h-10 text-brand-tertiary mb-2 transition-transform duration-300 origin-left group-hover:scale-105" />
                    <p className="text-sm text-muted-foreground font-medium">
                        Client-Focused
                    </p>
                </div>

            </div>
        </section>
    );
}