import Hero from "@/home/Hero";
import CoreExpertise from "@/home/Core";
import CTA from "@/home/CTA";
import ElevateEdge from "@/home/Elevate";
import StatsGrid from "@/home/Stats";
import FeaturedWork from "@/home/Feature";
import type { Metadata } from 'next'


export const metadata: Metadata = {
    title: 'Elevate Studio | Modern Digital Experiences & Web Development',
    description: 'Elevate Studio crafts high-performance websites and modern digital solutions designed to scale your business and convert visitors into loyal customers.',
    openGraph: {
        images: ['/home.png'],
    },
}

function page() {
    return (
        <div>
            <Hero />
            <StatsGrid />
            <CoreExpertise />
            <ElevateEdge />
            <FeaturedWork />
            <CTA />
        </div>
    );
}

export default page;