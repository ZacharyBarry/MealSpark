const { GoogleGenerativeAI } = require("@google/generative-ai");

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');

  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); 

  try {
    const prompt = req.body.prompt;
    const result = await model.generateContent(prompt);
    res.status(200).json({ text: result.response.text() });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch from Gemini' });
  }
}
