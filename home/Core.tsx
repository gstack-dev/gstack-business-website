import { Paintbrush, Code2, Terminal } from "lucide-react";

export default function CoreExpertise() {
    return (
        <section className="py-24 px-8 bg-surface-low">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="mb-16">
                    <h2 className="text-4xl font-display font-bold tracking-tight text-foreground mb-4">
                        Core Expertise
                    </h2>
                    {/* Accent mark - acceptable under the No-Line rule as it acts as a flourish, not a divider */}
                    <div className="w-20 h-1 bg-brand-tertiary rounded-full" />
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-3 gap-8">

                    {/* Card 1: Web Design */}
                    <div className="group bg-surface-container p-10 rounded-2xl border border-transparent transition-all duration-300 hover:bg-surface-high hover:shadow-primary-glow">
                        <Paintbrush className="w-12 h-12 text-brand-primary mb-6 transition-transform duration-300 group-hover:scale-110 origin-left" />
                        <h3 className="text-2xl font-display font-bold text-foreground mb-4 tracking-tight">
                            Web Design
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Crafting visually stunning, high-converting layouts that reflect your unique brand identity and captivate audiences.
                        </p>
                    </div>

                    {/* Card 2: Web Development */}
                    <div className="group bg-surface-container p-10 rounded-2xl border border-transparent transition-all duration-300 hover:bg-surface-high hover:shadow-primary-glow">
                        <Code2 className="w-12 h-12 text-brand-tertiary mb-6 transition-transform duration-300 group-hover:scale-110 origin-left" />
                        <h3 className="text-2xl font-display font-bold text-foreground mb-4 tracking-tight">
                            Web Development
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Building robust, scalable frontend architectures using the latest technologies for seamless user experiences.
                        </p>
                    </div>

                    {/* Card 3: Backend Integration */}
                    <div className="group bg-surface-container p-10 rounded-2xl border border-transparent transition-all duration-300 hover:bg-surface-high hover:shadow-primary-glow">
                        <Terminal className="w-12 h-12 text-brand-primary mb-6 transition-transform duration-300 group-hover:scale-110 origin-left" />
                        <h3 className="text-2xl font-display font-bold text-foreground mb-4 tracking-tight">
                            Backend Integration
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                            Custom API development and database management to power complex functionalities and dynamic content.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}