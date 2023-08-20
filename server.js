const app = require("./backend/app");

const dotenv = require("dotenv");
const cloudinary = require("cloudinary");
const connectDataBase = require("./backend/config/database");

//handling uncaught exception
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log("Shutting down the server due to Uncaught Exception");
    process.exit(1);
})

//config

if (process.env.NODE_ENV !== "PRODUCTION") {
    dotenv.config({ path: "backend/config/config.env" });
}

//connecting to database
connectDataBase();


cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const PORT = process.env.PORT || 4000;

const server = app.listen(PORT, () => {
    console.log(`server is working on ${PORT}`);
});


//unhandled promise rejection
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log("Shutting down the server due to the unhandled promise rejection");

    server.close(() => {
        process.exit(1);
    });
});