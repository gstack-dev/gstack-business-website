import { NextResponse } from "next/server";
import { connectMongoDB } from "@/lib/mongodb";
import Contact from "@/model/contact";
import { ContactSchema } from "@/schema/contact";

export async function GET(req: Request) {
    try {
        await connectMongoDB();
        // Added .sort({ createdAt: -1 }) to arrange newest first
        const contacts = await Contact.find().sort({ createdAt: -1 });
        
        const validation = ContactSchema.array().safeParse(contacts);
        if (!validation.success) {
            return NextResponse.json({ error: "Validation failed" }, { status: 400 });
        }
        const { data } = validation;
        return NextResponse.json({ contacts: data }, { status: 200 });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ error: "Failed to fetch contacts" }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        await connectMongoDB();
        const { name, email, companyName, budget, service, message } = await req.json();

        if (!name || !email || !companyName || !budget || !service || !message) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 });
        }

        const validate = ContactSchema.safeParse({ name, email, companyName, budget, service, message });
        if (!validate.success) {
            return NextResponse.json({ error: "Validation failed" }, { status: 400 });
        }

        const { data } = validate;
        
        const contact = await Contact.create(data);

        return NextResponse.json({ contact }, { status: 201 });
    }
    catch (err) {
        console.log(err);
        return NextResponse.json({ error: "Failed to create" }, { status: 500 });
    }
}