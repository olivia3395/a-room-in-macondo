import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });

export interface LiteraryFate {
  title: string;
  town: string;
  identity: string;
  symbol: string;
  opening: string;
  fateLine: string;
}

export async function generateFate(
  haunting: string,
  weather: string,
  tone: string,
  logic: string,
  language: "en" | "zh" = "en"
): Promise<LiteraryFate> {
  const langInstruction = language === "zh" 
    ? "You MUST generate the entire response in Simplified Chinese." 
    : "You MUST generate the entire response in English.";

  const prompt = `
    You are an expert in Latin American magical realism literature. 
    Generate a personalized literary fate for a user based on these inputs:
    - What has been haunting them: ${haunting}
    - Desired weather: ${weather}
    - Story tone: ${tone}
    - What they trust more: ${logic}

    ${langInstruction}

    Return the result as a JSON object with the following fields:
    - title: A short, evocative, literary novel title.
    - town: A 1-2 line description of the fictional place and its mood.
    - identity: A poetic description of the user's role in this world.
    - symbol: One memorable symbolic object or image.
    - opening: 300-500 words of lush, emotionally coherent prose in the style of magical realism.
    - fateLine: One short closing sentence that feels inevitable and memorable.
  `;

  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
    },
  });

  return JSON.parse(response.text || "{}");
}
