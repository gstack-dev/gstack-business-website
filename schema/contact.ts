import * as z from "zod";

export const ContactSchema = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.email("Invalid email"),
    companyName: z.string().min(1, "Company name is required"),
    budget: z.enum(["Under $10K", "$10K - $25K", "$25K - $50K", "$50K+"]),
    service: z.enum(["Select a Service", "App Development", "Branding & Identity", "Web Design & Development", "Marketing Strategy"]),
    message: z.string().min(1, "Message is required"),
});

export type ContactSchema = z.infer<typeof ContactSchema>;