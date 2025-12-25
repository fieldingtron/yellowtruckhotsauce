import { VertexAI } from "@google-cloud/vertexai";
import * as dotenv from "dotenv";

dotenv.config();

process.env.GOOGLE_APPLICATION_CREDENTIALS = './google-cloud.json';

const project = 'findthedivine';
const configurations = [
    { location: 'us-central1', model: 'gemini-1.5-flash' },
    { location: 'us-central1', model: 'gemini-1.5-pro-002' },
    { location: 'us-east4', model: 'gemini-1.5-flash' },
    { location: 'europe-west1', model: 'gemini-1.5-flash' },
];

async function scanVertex() {
    console.log("🚀 Scanning Vertex AI Regions and Models...\n");

    for (const config of configurations) {
        try {
            console.log(`📡 Trying ${config.model} in ${config.location}...`);
            const vertexAI = new VertexAI({ project, location: config.location });
            const model = vertexAI.getGenerativeModel({ model: config.model });

            const response = await model.generateContent({
                contents: [{ role: 'user', parts: [{ text: 'Hello' }] }],
            });

            const text = response.response.candidates?.[0]?.content?.parts?.[0]?.text;
            console.log(`✅ SUCCESS! Response: ${text}\n`);
            return; // Exit on first success
        } catch (error: any) {
            console.log(`❌ Failed: ${error.message.substring(0, 150)}\n`);
        }
    }

    console.log("⚠️  Could not connect to any Vertex AI endpoint. Please ensure the API is enabled and the service account has Vertex AI User permissions.");
}

scanVertex();
