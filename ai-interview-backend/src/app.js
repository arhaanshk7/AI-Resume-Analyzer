const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const resumeRoutes = require("./routes/resume");
const interviewRoutes = require("./routes/interview");
const historyRoutes = require("./routes/history");


const app = express();

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({
    extended:true
}));


// Routes

app.use("/", authRoutes);

app.use("/resume", resumeRoutes);

app.use("/interview", interviewRoutes);

app.use("/interviews", historyRoutes);


// Error handler

app.use((err, req, res, next)=>{

    console.log(err);

    res.status(err.statusCode || 500).json({
        message: err.message || "Something went wrong"
    });

});


module.exports = app;