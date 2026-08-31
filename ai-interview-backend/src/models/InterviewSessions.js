const mongoose = require("mongoose");

const interviewSessionSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    askedQuestions: [{
        type: String
    }],

    answers: [{
        type: String
    }],

    currentQuestion: {
        type: Number,
        default: 1
    },

    createdAt: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model("InterviewSession", interviewSessionSchema);