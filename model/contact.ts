import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    companyName: { type: String, required: true },
    budget: { type: String, required: true },
    service: { type: String, required: true },
    message: { type: String, required: true },
}, {
    timestamps: true
});

export default mongoose.models.Contact || mongoose.model("Contact", contactSchema);