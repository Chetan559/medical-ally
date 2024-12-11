const mongoose =require("mongoose");

const URI ="mongodb+srv://healthappadmin:siddhu3011@cluster0.8xyaqqb.mongodb.net/healthapp";
// mongoose.connect(URI)

const connectDb = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Failed to connect to MongoDB:", error.message);
        process.exit(1); // Exit with non-zero code to indicate failure
    }
};



module.exports = connectDb;