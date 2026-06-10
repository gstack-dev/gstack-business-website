import Image from "next/image";
import { CheckCircle2, Layers, Search, Zap } from "lucide-react";

export default function ElevateEdge() {
    return (
        <section className="py-24 px-8 bg-background" >
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

                {/* Left Column: Asymmetrical Image Container */}
                <div className="relative group">
                    {/* Removing the gradient border in favor of the Ambient Shadow rule */}
                    <div className="relative rounded-2xl overflow-hidden shadow-ambient h-[500px] transition-transform duration-700 group-hover:-translate-y-2">
                        <Image
                            src="/edge.png" // Ensure you have a placeholder or actual image in the public folder
                            alt="Diverse creative team working together"
                            fill
                            className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                        />
                        {/* Signature Gradient Overlay (Primary to Primary-Container) at low opacity for a branded tint */}
                        <div className="absolute inset-0 bg-linear-to-br from-brand-primary/20 to-transparent mix-blend-overlay pointer-events-none" />
                    </div>

                    {/* Decorative floating accent */}
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-brand-tertiary/10 rounded-full blur-2xl pointer-events-none" />
                </div>

                {/* Right Column: Value Proposition List */}
                <div>
                    <h2 className="text-4xl font-display font-bold tracking-tight mb-12 text-foreground">
                        The Elevate Edge
                    </h2>

                    <ul className="space-y-8">
                        {/* Item 1 */}
                        <li className="flex items-start gap-5 group/item">
                            <div className="bg-brand-tertiary/10 p-3 rounded-xl transition-colors duration-300 group-hover/item:bg-brand-tertiary/20">
                                <CheckCircle2 className="w-6 h-6 text-brand-tertiary" />
                            </div>
                            <div>
                                <h4 className="font-display font-bold text-lg text-foreground mb-1 tracking-tight">
                                    Modern UI/UX
                                </h4>
                                <p className="text-muted-foreground leading-relaxed">
                                    Intuitively designed interfaces that guide users effortlessly toward conversion.
                                </p>
                            </div>
                        </li>

                        {/* Item 2 */}
                        <li className="flex items-start gap-5 group/item">
                            <div className="bg-brand-primary/10 p-3 rounded-xl transition-colors duration-300 group-hover/item:bg-brand-primary/20">
                                <Layers className="w-6 h-6 text-brand-primary" />
                            </div>
                            <div>
                                <h4 className="font-display font-bold text-lg text-foreground mb-1 tracking-tight">
                                    Scalable Architecture
                                </h4>
                                <p className="text-muted-foreground leading-relaxed">
                                    Future-proof builds that grow alongside your business without technical debt.
                                </p>
                            </div>
                        </li>

                        {/* Item 3 */}
                        <li className="flex items-start gap-5 group/item">
                            <div className="bg-brand-tertiary/10 p-3 rounded-xl transition-colors duration-300 group-hover/item:bg-brand-tertiary/20">
                                <Search className="w-6 h-6 text-brand-tertiary" />
                            </div>
                            <div>
                                <h4 className="font-display font-bold text-lg text-foreground mb-1 tracking-tight">
                                    SEO-Ready Structure
                                </h4>
                                <p className="text-muted-foreground leading-relaxed">
                                    Built from the ground up to rank higher and reach more potential customers.
                                </p>
                            </div>
                        </li>

                        {/* Item 4 */}
                        <li className="flex items-start gap-5 group/item">
                            <div className="bg-brand-primary/10 p-3 rounded-xl transition-colors duration-300 group-hover/item:bg-brand-primary/20">
                                <Zap className="w-6 h-6 text-brand-primary" />
                            </div>
                            <div>
                                <h4 className="font-display font-bold text-lg text-foreground mb-1 tracking-tight">
                                    Fast Delivery Workflow
                                </h4>
                                <p className="text-muted-foreground leading-relaxed">
                                    Agile processes that ensure your project goes live with speed and precision.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
        </section >
    );
}