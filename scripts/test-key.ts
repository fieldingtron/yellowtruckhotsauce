import { GoogleGenerativeAI } from "@google/generative-ai";
import * as dotenv from "dotenv";
import * as fs from "fs";
import * as path from "path";

dotenv.config();

const apiKey = process.env.VERTEX_API_KEY;
if (!apiKey) {
    console.error("VERTEX_API_KEY not found in .env");
    process.exit(1);
}

const genAI = new GoogleGenerativeAI(apiKey);

async function testKey() {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-pro" });
        const result = await model.generateContent("Say hello");
        console.log("Response:", result.response.text());
        console.log("✅ Key works!");
    } catch (e) {
        console.error("❌ Key test failed:", e);
    }
}

testKey();
