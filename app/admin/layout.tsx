import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "../globals.css"; // Adjust this path if globals.css is located elsewhere

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: 'swap' });
const poppins = Poppins({
    weight: ['400', '500', '600', '700'],
    subsets: ["latin"],
    variable: "--font-poppins",
    display: 'swap'
});

export const metadata: Metadata = {
    title: "Admin Dashboard | G-Stack",
    description: "Secure internal management portal.",
    robots: {
        index: false,
        follow: false, // Prevents search engines from indexing your admin panel
    },
    icons: {
        icon: "/favicon.svg",
    },
};

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="dark">
            {/* The body tag handles all the global font mapping and default background/foreground colors */}
            <body className={`${inter.variable} ${poppins.variable} font-sans bg-background text-foreground antialiased selection:bg-brand-tertiary selection:text-brand-onTertiary`}>
                <div className="relative z-50 min-h-screen flex flex-col">
                    {children}
                </div>
            </body>
        </html>
    );
}