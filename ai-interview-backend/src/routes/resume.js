const express = require("express");
const fs = require("fs");
const pdf = require("pdf-parse");

const router = express.Router();

const auth = require("../middlewares/auth");
const upload = require("../middlewares/multer") ;  // use your actual multer path
const Resume = require("../models/Resume");
const openRouter = require("../config/openrouter");
const wrapAsync = require("../utils/wrapAsync");

const resumeController = require("../controllers/resumeController");


router.post("/upload", auth,upload.single("resume"), wrapAsync(resumeController.upload));

module.exports = router