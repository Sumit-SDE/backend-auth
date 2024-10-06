const express = require("express");
const app = express();
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());
app.use(cors());

app.post("/", async (req, res) => {
    console.log("req", req);
    return res.status(200).json({ success: true, message: "Server is running bro" });
});

app.listen(process.env.PORT, () => {
    console.log("App is running on port", process.env.PORT);
});
