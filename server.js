const express = require("express");
const app = express();
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());

app.listen(process.env.PORT, () => {
    console.log("App is running on port", process.env.PORT);
});
