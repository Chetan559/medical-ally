const { z } = require("zod");

const doctorRegistration = z.object({
    doctorName: z.string({ required_error: "Doctor Name is required" })
        .min(3, { message: "Name must be more than 3 characters" })
        .max(100, { message: "Name is more than 100 characters" }),

    email: z.string({ required_error: "Email is required" })
        .email({ message: "Invalid email format" }),

    password: z.string({ required_error: "Password is required" })
        .min(6, { message: "Password must be at least 6 characters long" }),

    confirmPassword: z.string({ required_error: "Confirm Password is required" })
        .min(6, { message: "Confirm Password must be at least 6 characters long" }),

    specialty: z.string({ required_error: "Specialty is required" })
        .min(3, { message: "Specialty must be more than 3 characters" })
        .max(100, { message: "Specialty is more than 100 characters" })
});

module.exports = doctorRegistration;
