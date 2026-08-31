const Resume = require("../models/Resume");
const openRouter = require("../config/openrouter");

const fs = require("fs");
const pdf = require("pdf-parse");

exports.upload = async (req, res) => {
  try {
    // Read uploaded PDF
    const dataBuffer = fs.readFileSync(req.file.path);

    // Extract text from PDF
    const data = await pdf(dataBuffer);

    const resumeText = data.text;

    // Send Resume to OpenRouter
    const response = await openRouter.post("/chat/completions", {
      model: "nvidia/nemotron-3-ultra-550b-a55b:free",
      messages: [
        {
          role: "user",
          content: `
You are an expert ATS Resume Analyzer.

Analyze the following resume carefully.

Return ONLY a valid JSON object.

Do NOT include any text before or after the JSON.
Do NOT use markdown.
Do NOT wrap the JSON inside \`\`\` or \`\`\`json.
Your entire response must be a single valid JSON object.

Return EXACTLY this structure:

{
  "overallScore": 0,
  "atsScore": 0,
  "grammarScore": 0,
  "formattingScore": 0,
  "missingSkills": [],
  "strengths": [],
  "weaknesses": [],
  "projectReview": "",
  "resumeSuggestions": []
  
}

Resume:

${resumeText}
`,
        },
      ],
    });

    // Convert JSON string returned by AI into JavaScript Object
    const analysis = JSON.parse(response.data.choices[0].message.content);
    await Resume.create({

        userId: req.user._id,

        extractedResumeText: resumeText,

        analysis: analysis

    });
    

    res.json({
      analysis,
    });

  } catch (err) {
    console.log(err.response?.data || err.message);

    res.status(500).json({
      message: "Resume Analysis Failed",
    });
  }
}