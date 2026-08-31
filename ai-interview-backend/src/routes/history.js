const express = require("express");

const router = express.Router();

const auth = require("../middlewares/auth");
const Resume = require("../models/Resume");
const wrapAsync = require("../utils/wrapAsync");
const historyController = require("../controllers/historyController");

router.get("/history",auth, wrapAsync(historyController.getHistory));

router.get("/history/:id",auth,wrapAsync(historyController.getHistoryById));

module.exports = router