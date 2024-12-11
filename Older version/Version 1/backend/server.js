const express = require("express");
const app = express();
const router = require("./router/authRouter");
const connectDb = require("./utils/db");
const cors = require("cors");

var corsOptions = {
    origin: "http://localhost:3000/#/appointment",
    methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
    credentials:true,
  }
// let takles 
app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/auth", router);

const PORT = 8000;

connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on ${PORT}`);
    });
    // connectDb().then(() => {
    //     console.log("Database connected successfully");
    //     app.listen(PORT, () => {
    //         console.log(`Server is running on ${PORT}`);
    //     });
    // }).catch(error => {
    //     console.error("Database connection error:", error);
    // });
    
});
