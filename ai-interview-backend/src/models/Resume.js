const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },

    extractedResumeText:{
        type:String,
        required:true
    },

    analysis:{
        type:Object,
        required:true
    },

    uploadedAt:{
        type:Date,
        default:Date.now
    }
});

module.exports = mongoose.model("Resume",resumeSchema);