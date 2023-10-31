const express = require('express');
const mongoose = require("mongoose");

require("dotenv").config();
const v1UserRouter =require("./v1/routes/user");

const app = express();
const PORT = process.env.PORT || 3100;

//meddlewares
app.use(express.json());
app.use("/api/v1/users", v1UserRouter);

//routes
app.get("/", (req,res)=>{
    res.send("<h1>Hello World!</h1> <script>console.log('hi, estoy mirando si tomo el codigo ')</script>");
});

//mongodb connection

mongoose
    .connect(process.env.MONGODB_URI)
    .then(()=>console.log("Connected to MongoDB Atlas..."))
    .catch((error) => console.error(error) )

app.listen(PORT, () => {console.log(`Server listening on port. ${PORT}`)});