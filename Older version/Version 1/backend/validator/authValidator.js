const { z } = require("zod");

const bookAppointment = z.object({

    patientName: z.string({ required_error: "PatientName is required" })
        .min(3, { message: "Name must be more than 3 characters" })
        .max(100, { message: "Name is more than 100 characters" }),

    phoneNumber: z.string({ required_error: "PhoneNumber is required" })
        .min(10, { message: "Phone number must have 10 digits" }),

    currentSymptoms: z.string({ required_error: "Current Symptoms is required" })
        .min(10, { message: "Current Symptoms must be more than 50 characters" }),

    allergies: z.string({ required_error: "Allergies is required" })
        .min(10, { message: "Allergies must be more than 50 characters" }),

    laboratoryTestResult: z.string({ required_error: "Laboratory Test Result is required" })
        .min(10, { message: "Laboratory Test Result must be more than 50 characters" }),

    lifeStlye: z.string({ required_error: "Life style is required" })
        .min(10, { message: "Life style must be more than 50 characters" })

    // doctorsNote: z.string({ required_error: "Doctor Notes is required" })
    //     .min(10, { message: "Doctors Note must be more than 50 characters" })




});

module.exports = bookAppointment;