import { z } from "zod";

export const candidateSchema = z.object({

    fullName: z.string().min(3, "Full Name is required"),

    email: z.string().email("Enter valid email"),

    phone: z.string().min(11, "Phone number is required"),

    experience: z.string().min(1, "Experience is required"),

    skills: z.string().min(2, "Skills are required"),

    education: z.string().min(2, "Education is required"),

    status: z.string().min(1, "Status is required")

});