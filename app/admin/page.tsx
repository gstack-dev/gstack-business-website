"use client";

import { useState, useEffect } from "react";
import {
    ChevronLeft,
    ChevronRight,
    Loader2
} from "lucide-react";
import Image from "next/image";

// --- Types ---
interface Inquiry {
    _id: string;
    name: string;
    email: string;
    service: string;
    message: string;
}

// --- UI Helper Functions ---
const getInitials = (name: string) => {
    if (!name) return "??";
    const parts = name.split(" ");
    if (parts.length >= 2) return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    return name.substring(0, 2).toUpperCase();
};

const getServiceBadgeStyles = (service: string) => {
    if (service.includes("Web Design") || service.includes("Social")) {
        return { bg: "bg-brand-tertiary/10", text: "text-brand-tertiary" };
    }
    if (service.includes("Identity") || service.includes("Strategy")) {
        return { bg: "bg-surface-highest", text: "text-foreground" };
    }
    return { bg: "bg-brand-primary/10", text: "text-brand-primary" };
};

export default function AdminDashboard() {
    const [inquiries, setInquiries] = useState<Inquiry[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // --- Pagination State ---
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    // Fetch data on mount
    useEffect(() => {
        const fetchInquiries = async () => {
            try {
                const response = await fetch('/api/contact');
                if (!response.ok) throw new Error('Failed to fetch inquiries.');

                const responseData = await response.json();
                const contacts = responseData.contacts;
                
                if (Array.isArray(contacts)) {
                    setInquiries(contacts);
                } else if (contacts && Array.isArray(contacts.data)) {
                    setInquiries(contacts.data);
                } else if (contacts && Array.isArray(contacts.inquiries)) {
                    setInquiries(contacts.inquiries);
                } else {
                    throw new Error('API response format is invalid. Expected an array.');
                }

            } catch (err: any) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchInquiries();
    }, []);

    // --- Pagination Logic ---
    const totalInquiries = inquiries.length;
    const totalPages = Math.ceil(totalInquiries / itemsPerPage);
    
    const indexOfLastInquiry = currentPage * itemsPerPage;
    const indexOfFirstInquiry = indexOfLastInquiry - itemsPerPage;
    const currentInquiries = inquiries.slice(indexOfFirstInquiry, indexOfLastInquiry);

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-background overflow-hidden">

            {/* Top Header */}
            <header className="px-8 py-4 bg-surface-low flex items-center justify-between shadow-sm relative z-10">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-brand-primary rounded-xl flex items-center justify-center shadow-primary-glow">
                        <Image src="/navIcon.svg" alt="Logo" width={20} height={20} className="rounded-full" />
                    </div>
                    <span className="text-xl font-display font-bold tracking-tight text-foreground">
                        Elevate Studio
                    </span>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 p-8 overflow-y-auto bg-background">
                <div className="max-w-7xl mx-auto h-full flex flex-col bg-surface-container rounded-2xl shadow-ambient overflow-hidden">

                    {/* Table Header & Actions */}
                    <div className="px-8 py-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-surface-container relative z-10 border-b border-transparent">
                        <h2 className="text-2xl font-display font-bold text-foreground tracking-tight">
                            Recent Inquiries
                        </h2>
                    </div>

                    {/* Data Table */}
                    <div className="flex-1 overflow-x-auto relative min-h-[400px]">
                        {/* Loading State */}
                        {isLoading && (
                            <div className="absolute inset-0 flex items-center justify-center bg-surface-container z-20">
                                <Loader2 className="w-8 h-8 text-brand-primary animate-spin" />
                            </div>
                        )}

                        {/* Error State */}
                        {error && (
                            <div className="absolute inset-0 flex items-center justify-center bg-surface-container z-20">
                                <p className="text-destructive font-bold">{error}</p>
                            </div>
                        )}

                        {!isLoading && !error && (
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-surface-low/50">
                                        <th className="px-8 py-5 text-xs font-bold uppercase tracking-widest text-muted-foreground w-[25%]">Name</th>
                                        <th className="px-8 py-5 text-xs font-bold uppercase tracking-widest text-muted-foreground w-[25%]">Email</th>
                                        <th className="px-8 py-5 text-xs font-bold uppercase tracking-widest text-muted-foreground w-[20%]">Service</th>
                                        <th className="px-8 py-5 text-xs font-bold uppercase tracking-widest text-muted-foreground w-[30%]">Message</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-surface-container">
                                    {!Array.isArray(inquiries) || inquiries.length === 0 ? (
                                        <tr>
                                            <td colSpan={4} className="px-8 py-12 text-center text-muted-foreground font-medium">
                                                No inquiries found.
                                            </td>
                                        </tr>
                                    ) : (
                                        currentInquiries.map((inquiry, index) => {
                                            const initials = getInitials(inquiry.name);
                                            const serviceStyle = getServiceBadgeStyles(inquiry.service);

                                            return (
                                                <tr key={index} className="group cursor-pointer hover:bg-surface-high transition-colors duration-300">
                                                    <td className="px-8 py-5 align-top">
                                                        <div className="flex items-center gap-4 transition-transform duration-300 group-hover:translate-x-2">
                                                            <div className="w-10 h-10 rounded-full bg-surface-lowest flex items-center justify-center text-sm font-display font-bold text-foreground shrink-0">
                                                                {initials}
                                                            </div>
                                                            <span className="font-bold text-foreground line-clamp-1">{inquiry.name}</span>
                                                        </div>
                                                    </td>
                                                    <td className="px-8 py-5 text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300 align-top pt-8">
                                                        <span className="line-clamp-1">{inquiry.email}</span>
                                                    </td>
                                                    <td className="px-8 py-5 align-top pt-7">
                                                        <span className={`px-4 py-1.5 ${serviceStyle.bg} ${serviceStyle.text} text-xs font-bold rounded-full tracking-wide whitespace-nowrap`}>
                                                            {inquiry.service}
                                                        </span>
                                                    </td>
                                                    <td className="px-8 py-5 align-top pt-7">
                                                        <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300 line-clamp-2 max-w-md leading-relaxed">
                                                            {inquiry.message}
                                                        </p>
                                                    </td>
                                                </tr>
                                            );
                                        })
                                    )}
                                </tbody>
                            </table>
                        )}
                    </div>

                    {/* Pagination Footer */}
                    <div className="px-8 py-6 bg-surface-low/50 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
                        <div className="text-sm font-medium text-muted-foreground">
                            Showing <span className="text-foreground font-bold">{totalInquiries > 0 ? indexOfFirstInquiry + 1 : 0}</span> to <span className="text-foreground font-bold">{Math.min(indexOfLastInquiry, totalInquiries)}</span> of <span className="text-foreground font-bold">{totalInquiries}</span> inquiries
                        </div>

                        <div className="flex gap-2">
                            <button 
                                onClick={handlePrevPage}
                                disabled={currentPage === 1}
                                className="w-10 h-10 flex items-center justify-center rounded-xl bg-surface-lowest text-muted-foreground hover:bg-surface-high hover:text-foreground transition-all disabled:opacity-30 disabled:hover:bg-surface-lowest disabled:hover:text-muted-foreground disabled:cursor-not-allowed"
                            >
                                <ChevronLeft className="w-5 h-5" />
                            </button>
                            
                            <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-brand-primary text-white font-bold shadow-primary-glow">
                                {currentPage}
                            </button>
                            
                            <button 
                                onClick={handleNextPage}
                                disabled={currentPage === totalPages || totalPages === 0}
                                className="w-10 h-10 flex items-center justify-center rounded-xl bg-surface-lowest text-muted-foreground hover:bg-surface-high hover:text-foreground transition-all disabled:opacity-30 disabled:hover:bg-surface-lowest disabled:hover:text-muted-foreground disabled:cursor-not-allowed"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}