const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const Resume = require("../models/Resume");
const InterviewSession = require("../models/InterviewSessions");
const openRouter = require("../config/openrouter");
const wrapAsync = require("../utils/wrapAsync");
const interviewController = require("../controllers/interviewController")

router.post("/start", auth, wrapAsync(interviewController.firstQuestion));


router.post("/next", auth, wrapAsync(interviewController.nextQuestion));


module.exports = router