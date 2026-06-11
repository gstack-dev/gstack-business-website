"use client";
import { ContactSchema } from "@/schema/contact";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button"; // Integrating the shadcn button we built
import { useState } from "react";

export default function ContactForm() {
    const [isLoading, setIsLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setValue,
        watch
    } = useForm<z.infer<typeof ContactSchema>>({
        resolver: zodResolver(ContactSchema),
        defaultValues: {
            name: "",
            email: "",
            companyName: "",
            budget: "Under $10K",
            service: "Select a Service",
            message: "",
        },
    });

    const selectedBudget = watch("budget");
    const budgetOptions = ["Under $10K", "$10K - $25K", "$25K - $50K", "$50K+"] as const;

    async function onSubmit(data: z.infer<typeof ContactSchema>) {
        setIsLoading(true);
        const resp = await fetch("/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })

        if (resp.ok) {
            toast.success("Thank you for your message! We will get back to you soon.", {
                duration: 5000,
            });
            reset();
        } else {
            toast.error("Failed to send message.", {
                duration: 5000,
            });
        }
        setIsLoading(false);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-10 p-8 md:p-12">

            {/* Row 1: Name & Email */}
            <div className="flex w-full flex-col lg:flex-row gap-8">
                <div className="flex flex-col w-full lg:w-1/2 gap-2">
                    <label className="text-foreground font-medium px-2 text-sm uppercase tracking-wider" htmlFor="name">Full Name</label>
                    <input
                        {...register("name")}
                        className="text-foreground bg-surface-lowest border border-transparent focus:border-brand-primary/50 focus:ring-4 focus:ring-brand-primary/10 p-4 rounded-xl outline-none transition-all duration-300 placeholder:text-muted-foreground"
                        type="text"
                        placeholder="Enter your full name"
                    />
                    {errors.name && <p className="text-destructive text-sm px-2">{errors.name.message}</p>}
                </div>
                <div className="flex flex-col w-full lg:w-1/2 gap-2">
                    <label className="text-foreground font-medium px-2 text-sm uppercase tracking-wider" htmlFor="email">Email</label>
                    <input
                        {...register("email")}
                        className="text-foreground bg-surface-lowest border border-transparent focus:border-brand-primary/50 focus:ring-4 focus:ring-brand-primary/10 p-4 rounded-xl outline-none transition-all duration-300 placeholder:text-muted-foreground"
                        type="email"
                        placeholder="Enter your email"
                    />
                    {errors.email && <p className="text-destructive text-sm px-2">{errors.email.message}</p>}
                </div>
            </div>

            {/* Row 2: Company & Service */}
            <div className="flex w-full flex-col lg:flex-row gap-8">
                <div className="flex flex-col w-full lg:w-1/2 gap-2">
                    <label className="text-foreground font-medium px-2 text-sm uppercase tracking-wider" htmlFor="companyName">Company Name</label>
                    <input
                        {...register("companyName")}
                        className="text-foreground bg-surface-lowest border border-transparent focus:border-brand-primary/50 focus:ring-4 focus:ring-brand-primary/10 p-4 rounded-xl outline-none transition-all duration-300 placeholder:text-muted-foreground"
                        type="text"
                        placeholder="Enter your company name"
                    />
                    {errors.companyName && <p className="text-destructive text-sm px-2">{errors.companyName.message}</p>}
                </div>
                <div className="flex flex-col w-full lg:w-1/2 gap-2">
                    <label className="text-foreground font-medium px-2 text-sm uppercase tracking-wider" htmlFor="service">Service</label>
                    <select
                        {...register("service")}
                        className="text-foreground bg-surface-lowest border border-transparent focus:border-brand-primary/50 focus:ring-4 focus:ring-brand-primary/10 p-4 rounded-xl outline-none transition-all duration-300 appearance-none"
                        id="service"
                    >
                        <option value="Select a Service">Select a Service</option>
                        <option value="App Development">App Development</option>
                        <option value="Branding & Identity">Branding & Identity</option>
                        <option value="Web Design & Development">Web Design & Development</option>
                        <option value="Marketing Strategy">Marketing Strategy</option>
                    </select>
                    {errors.service && <p className="text-destructive text-sm px-2">{errors.service.message}</p>}
                </div>
            </div>

            {/* Row 3: Budget Options */}
            <div className="flex flex-col w-full gap-4">
                <label className="text-foreground font-medium px-2 text-sm uppercase tracking-wider">Budget</label>
                <div className="flex flex-wrap gap-4 px-2">
                    {budgetOptions.map((option) => {
                        const isSelected = selectedBudget === option;
                        return (
                            <button
                                key={option}
                                type="button"
                                onClick={() => setValue("budget", option, { shouldValidate: true })}
                                className={`
                                    px-6 py-3 rounded-full text-sm font-medium transition-all duration-300
                                    ${isSelected
                                        ? 'bg-brand-primary/10 text-brand-primary border border-brand-primary/30 shadow-primary-glow'
                                        : 'bg-surface-lowest text-muted-foreground border border-transparent hover:text-foreground'
                                    }
                                `}
                            >
                                {option}
                            </button>
                        );
                    })}
                </div>
                {errors.budget && <p className="text-destructive text-sm px-2">{errors.budget.message}</p>}
            </div>

            {/* Row 4: Message Textarea */}
            <div className="flex flex-col w-full gap-2">
                <label className="text-foreground font-medium px-2 text-sm uppercase tracking-wider" htmlFor="message">Message</label>
                <textarea
                    {...register("message")}
                    className="text-foreground bg-surface-lowest border border-transparent focus:border-brand-primary/50 focus:ring-4 focus:ring-brand-primary/10 p-4 rounded-xl outline-none transition-all duration-300 placeholder:text-muted-foreground resize-none"
                    id="message"
                    rows={5}
                    placeholder="Tell us about your requirements..."
                ></textarea>
                {errors.message && <p className="text-destructive text-sm px-2">{errors.message.message}</p>}
            </div>

            {/* Submit Button using our High-Action Tertiary Variant */}
            <div className="pt-4">
                <Button
                    type="submit"
                    variant="tertiary"
                    size="lg"
                    className="w-full md:w-auto"
                    disabled={isLoading}
                >
                    {isLoading ? "Sending..." : "Send Inquiry"}
                </Button>
            </div>
        </form>
    );
}