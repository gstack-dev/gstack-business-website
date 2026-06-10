import CoreExpertise from "@/home/Core";
import CallToAction from "@/home/CTA";
import ElevateEdge from "@/home/Elevate";
import FeaturedWork from "@/home/Feature";
import Hero from "@/home/Hero";
import StatsGrid from "@/home/Stats";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <StatsGrid />
      <CoreExpertise />
      <ElevateEdge />
      <FeaturedWork />
      <CallToAction />
    </main>
  );
}