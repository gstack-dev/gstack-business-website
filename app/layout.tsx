import type { Metadata } from "next";
import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import Navbar from "@/components/web/Navbar";
import Footer from "@/components/web/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: 'swap' });
const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: 'swap'
});

export const metadata: Metadata = {
  title: "Elevate Studio | Modern Digital Experiences",
  description: "Visionary spaces engineered for ambitious businesses.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-sans bg-surface text-foreground antialiased`}>
        <Navbar />
        <div className="pt-20">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}