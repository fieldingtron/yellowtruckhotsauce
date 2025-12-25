import { GoogleGenerativeAI } from "@google/generative-ai";
import * as dotenv from "dotenv";

dotenv.config();

async function listModels() {
    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
    const models = await genAI.listModels();
    
    console.log("\nAvailable Models:");
    models.forEach(m => {
        console.log(`\n${m.name}`);
        console.log(`  Supports: ${m.supportedGenerationMethods.join(", ")}`);
    });
}

listModels();
