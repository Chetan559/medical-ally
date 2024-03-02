const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
    try {
        console.log(req.body);

        const {
            patientName,
            phoneNumber,
            patientAge, // Corrected typo here
            medicalHistory,
            currentSymptoms,
            medication,
            allergies,
            vitalSigns,
            laboratoryTestResult
        } = req.body;

        const userCreated = await User.create({
            patientName,
            phoneNumber,
            patientAge, // Corrected typo here
            medicalHistory,
            currentSymptoms,
            medication,
            allergies,
            vitalSigns,
            laboratoryTestResult
        });

        // Generate JWT token if needed
        const token = userCreated.generateToken(); // Assuming you have corrected and implemented generateToken method

        res.status(200).json({ user: userCreated, token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Something went wrong" });
    }
};

const home = async (req, res) => {
    try {
        res.status(200).send('Welcome home');
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Something went wrong" });
    }
};

module.exports = { home, register };
