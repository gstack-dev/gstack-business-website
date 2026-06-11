import ContactForm from "@/components/web/ContactForm";
import { AtSign, CheckCircle2, Phone } from "lucide-react";
import Image from "next/image";
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Contact Us | Start Your Project with Elevate Studio',
    description: "Ready to elevate your digital presence? Get in touch with Elevate Studio to discuss your project, request a quote, or start a collaboration.",
    openGraph: {
        images: ['/Contact.png'],
    },
}

export default function ContactPage() {
    return (
        <div className="flex flex-col justify-center items-center w-full overflow-x-hidden bg-background py-12 px-6 md:px-16 gap-12">
            
            {/* Header Section */}
            <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
                <div className="w-full lg:w-1/2 space-y-4">
                    <div className="text-brand-tertiary uppercase text-xs md:text-sm tracking-widest font-bold">
                        Get In Touch
                    </div>
                    <h2 className="text-foreground text-5xl lg:text-6xl font-display font-bold tracking-tight">
                        Let&apos;s talk about your project
                    </h2>
                </div>
                <p className="text-muted-foreground text-lg lg:text-xl w-full lg:w-1/2 leading-relaxed">
                    Whether you're starting a new venture or scaling an existing one, our team of digital architects is ready to build your vision.
                </p>
            </div>

            {/* Content Grid */}
            <div className="flex w-full max-w-7xl mx-auto h-full justify-start items-stretch flex-col lg:flex-row gap-8">
                
                {/* Left Column: Contact Info & Value Props */}
                <div className="w-full lg:w-1/3 flex flex-col gap-6">
                    {/* Email Card */}
                    <div className="w-full rounded-2xl bg-surface-container p-6 flex flex-col gap-2 transition-transform duration-300 hover:-translate-y-1 hover:shadow-ambient">
                        <AtSign className="text-brand-primary mb-2" size={24} />
                        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email us</p>
                        <p className="text-foreground font-medium">hello@gstack.studio</p>
                    </div>
                    
                    {/* Phone Card */}
                    <div className="w-full rounded-2xl bg-surface-container p-6 flex flex-col gap-2 transition-transform duration-300 hover:-translate-y-1 hover:shadow-ambient">
                        <Phone className="text-brand-primary mb-2" size={24} />
                        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Call us</p>
                        <p className="text-foreground font-medium">+20 100 000 0000</p>
                    </div>
                    
                    {/* What We Offer */}
                    <div className="w-full rounded-2xl bg-surface-container p-6 flex flex-col gap-4 grow">
                        <p className="text-lg text-foreground font-display font-bold tracking-tight">What We Offer</p>
                        <ul className="text-muted-foreground text-sm font-medium space-y-4">
                            <li className="flex justify-start items-start gap-3">
                                <CheckCircle2 className="text-brand-tertiary shrink-0 mt-0.5" size={18} />
                                <span>Custom Digital Experiences</span>
                            </li>
                            <li className="flex justify-start items-start gap-3">
                                <CheckCircle2 className="text-brand-tertiary shrink-0 mt-0.5" size={18} />
                                <span>Brand Identity & Strategy</span>
                            </li>
                            <li className="flex justify-start items-start gap-3">
                                <CheckCircle2 className="text-brand-tertiary shrink-0 mt-0.5" size={18} />
                                <span>Enterprise Web Apps</span>
                            </li>
                            <li className="flex justify-start items-start gap-3">
                                <CheckCircle2 className="text-brand-tertiary shrink-0 mt-0.5" size={18} />
                                <span>E-commerce Solutions</span>
                            </li>
                        </ul>
                    </div>
                    
                    {/* Headquarter Map/Image */}
                    <div className="w-full h-48 rounded-2xl relative overflow-hidden group shadow-ambient">
                        <Image src="/contact.png" alt="Headquarter Location" fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-linear-to-t from-background/90 to-background/20 flex flex-col justify-end items-start p-6">
                            <p className="font-display font-bold text-white tracking-tight">Visit our Workspace</p>
                            <p className="font-medium text-muted-foreground text-sm">Cairo, Egypt</p>
                        </div>
                    </div>
                </div>

                {/* Right Column: Form Container */}
                <div className="w-full lg:w-2/3 h-full rounded-3xl bg-surface-container shadow-ambient">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}