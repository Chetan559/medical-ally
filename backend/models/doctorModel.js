const Doctor = require("../models/doctorModel");
const jwt = require("jsonwebtoken");

const registerDoctor = async (req, res) => {
    try {
        console.log(req.body);

        const {
            doctorName,
            email,
            password,
            specialty
        } = req.body;

        const doctorCreated = await Doctor.create({
            doctorName,
            email,
            password,
            specialty
        });

        const token = doctorCreated.generateToken(); 

        res.status(200).json({ doctor: doctorCreated, token });
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

module.exports = { home, registerDoctor };
