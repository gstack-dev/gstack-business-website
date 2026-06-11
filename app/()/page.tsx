import Hero from "@/home/Hero";
import CoreExpertise from "@/home/Core";
import CTA from "@/home/CTA";
import ElevateEdge from "@/home/Elevate";
import StatsGrid from "@/home/Stats";
import FeaturedWork from "@/home/Feature";

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