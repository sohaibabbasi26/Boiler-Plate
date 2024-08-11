const openai = require('openai');
const dotenv = require("dotenv");
dotenv.config();

const OPEN_API_KEY = process.env.OPENAI_KEY;

if (!OPEN_API_KEY) {
    throw new Error("[OpenAI API key not configured]");
}

const apiClient = new openai.OpenAI({
    apiKey: OPEN_API_KEY
});
 
module.exports = apiClient; 