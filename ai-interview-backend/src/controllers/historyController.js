const Resume = require("../models/Resume");

exports.getHistory =async(req,res)=>{
    const history = await Resume.find({
        userId:req.user.id
    })
    .sort({
        uploadedAt:-1
    });

    res.json({
        history
    })
}


exports.getHistoryById = async(req,res)=>{
    const {id}= req.params;

    const resume = await Resume.findOne({
        _id:id,
        userId:req.user.id
    });

    if(!resume){
        return res.status(404).json({
            message:"Resume analysis not found"
        });
    }

    res.json({
        resume
    });
}