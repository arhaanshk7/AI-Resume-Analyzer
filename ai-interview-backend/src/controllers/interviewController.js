const Resume = require("../models/Resume");
const InterviewSession = require("../models/InterviewSessions");
const openRouter = require("../config/openrouter");

exports.firstQuestion = async (req, res) => {

    const resume = await Resume.findOne({
        userId: req.user._id
    }).sort({
        uploadedAt: -1
    });

    if (!resume) {

        return res.status(404).json({
            message: "Please upload your resume before starting the interview."
        });

    }

    // Start fresh interview
    await InterviewSession.deleteOne({
        userId: req.user._id
    });

    const response = await openRouter.post("/chat/completions", {
        

        model: "nvidia/nemotron-3-ultra-550b-a55b:free",

        messages: [
            {
                role: "user",
                content: `

                You are an experienced Senior Software Engineer conducting a technical interview.

                Below is the candidate's resume.

                Ask ONLY ONE interview question.

                The question should be based on the candidate's projects, skills, strengths, weaknesses, or missing skills.

                Do NOT ask multiple questions.

                Resume:

                ${resume.extractedResumeText}

                `
            }
        ]

    });

    if (!response.data.choices) {

        console.log(response.data);

        return res.status(503).json({
            message: "AI service is currently busy. Please try again in a few moments."
        });

    }
    const firstQuestion = response.data.choices[0].message.content;
    

    // Save interview session
    const interviewSession = new InterviewSession({

        userId: req.user._id,

        askedQuestions: [
            firstQuestion
        ],

        answers: [],

        currentQuestion: 1

    });

    await interviewSession.save();

    res.json({

        question: firstQuestion

    });

};


exports.nextQuestion = async (req, res) => {

    const { answer } = req.body;

    if (!answer) {
        return res.status(400).json({
            message: "Answer is required"
        });
    }

    // Find interview session
    const interviewSession = await InterviewSession.findOne({
        userId: req.user._id
    });

    if (!interviewSession) {
        return res.status(404).json({
            message: "Interview session not found. Please start a new interview."
        });
    }

    // Save user's answer
    interviewSession.answers.push(answer);

    // Convert previous questions into plain text
    const previousQuestions = interviewSession.askedQuestions.join("\n");

    // Get latest resume
    const resume = await Resume.findOne({
        userId: req.user._id
    }).sort({
        uploadedAt: -1
    });

    if (!resume) {
        return res.status(404).json({
            message: "Resume not found"
        });
    }

    const response = await openRouter.post("/chat/completions", {

        model: "nvidia/nemotron-3-ultra-550b-a55b:free",

        messages: [
            {
                role: "user",

                content: `

                You are a friendly Senior Software Engineer conducting a mock technical interview for a fresher software developer.

                Candidate Resume:

                ${resume.extractedResumeText}

                Candidate Previous Answer:

                ${answer}

                Previously Asked Questions:

                ${previousQuestions}

                Your Task:

                1. First analyse the candidate's previous answer in 2-3 encouraging sentences.

                2. Then leave two blank lines.

                3. Write:

                Next Question:

                4. Ask ONLY ONE interview question.

                Rules:

                - Never repeat any question from "Previously Asked Questions".
                - Never ask about the same implementation twice.
                - Cover different projects, technologies and skills from the resume.
                - Keep questions suitable for a fresher.
                - Ask practical implementation questions.
                - Ask only one question.
                - Do not ask multiple questions.
                - Do not ask advanced system design unless clearly mentioned in the resume.
                - If the previous answer is weak, ask one follow-up question only.
                - Otherwise move to a different uncovered topic.

                Current Interview Question Number:

                ${interviewSession.currentQuestion}

                Interview Rules:

                - Conduct the interview for a maximum of 15 questions.
                - If the current question number is less than 15:
                    • Analyse the previous answer in 2–3 short encouraging sentences.
                    • Leave two blank lines.
                    • Write:
                    Next Question:
                    • Ask exactly ONE new interview question.

                - If the current question number is 15 or greater:
                    • Do NOT generate another interview question.
                    • Do NOT write "Next Question".
                    • Instead generate ONLY the final interview evaluation.

                The final interview evaluation must contain:

                - Overall Score (/100)
                - Technical Skills Assessment
                - Weaknesses
                - Theoretical Topics to Focus More
                - Topics to Study thoroughly
                - Frequently Asked Project Questions to Prepare
                - Final Hiring Recommendation

                Response Format:

                Analysis:
                <2-3 short sentences>

                Next Question:
                <one interview question only>

                `
            }
        ]

    });

    if (!response.data.choices) {

        console.log(response.data);

        return res.status(503).json({
            message: "AI service is currently busy. Please try again in a few moments."
        });

    }
    
    
    const nextQuestion = response.data.choices[0].message.content;

    // Save newly generated question
    interviewSession.askedQuestions.push(nextQuestion);

    interviewSession.currentQuestion += 1;

    await interviewSession.save();

    res.json({
        question: nextQuestion
    });

};