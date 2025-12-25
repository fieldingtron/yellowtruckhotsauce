import { VertexAI } from "@google-cloud/vertexai";
import * as dotenv from "dotenv";

dotenv.config();

// Initialize Vertex AI with your project and location
const project = 'findthedivine';
const location = 'us-central1';

// Set the service account key file path
process.env.GOOGLE_APPLICATION_CREDENTIALS = './google-cloud.json';

const vertexAI = new VertexAI({ project: project, location: location });

async function testVertexConnection() {
    try {
        console.log("🔍 Testing Vertex AI connection...");
        console.log(`Project: ${project}`);
        console.log(`Location: ${location}`);
        
        // Get the generative model
        const generativeModel = vertexAI.getGenerativeModel({
            model: 'gemini-1.5-pro',
        });

        // Test with a simple prompt
        const request = {
            contents: [{ role: 'user', parts: [{ text: 'Say hello in one sentence.' }] }],
        };

        console.log("\n📤 Sending test request...");
        const response = await generativeModel.generateContent(request);
        const aggregatedResponse = await response.response;
        
        console.log("\n✅ SUCCESS! Vertex AI is working!");
        console.log("\n📥 Response:", aggregatedResponse.candidates?.[0]?.content?.parts?.[0]?.text);
        
    } catch (error) {
        console.error("\n❌ FAILED! Error details:");
        if (error instanceof Error) {
            console.error("Message:", error.message);
            console.error("Stack:", error.stack);
        } else {
            console.error(error);
        }
    }
}

testVertexConnection();
