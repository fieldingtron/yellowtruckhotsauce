import { VertexAI } from "@google-cloud/vertexai";
import * as dotenv from "dotenv";

dotenv.config();

const project = 'findthedivine';
const locations = ['us-central1', 'us-east4', 'europe-west9', 'asia-northeast1'];

process.env.GOOGLE_APPLICATION_CREDENTIALS = './google-cloud.json';

async function testImagenLocations() {
    const modelName = 'imagen-3.0-generate-001';

    for (const location of locations) {
        try {
            console.log(`\n🎨 Testing ${modelName} in ${location}...`);
            const vertexAI = new VertexAI({ project, location });
            const model = vertexAI.getGenerativeModel({ model: modelName });

            // Just a test request
            const response = await model.generateContent({
                contents: [{ role: 'user', parts: [{ text: "Say hi" }] }],
            });

            console.log(`✅ Success in ${location}!`);
            return;
        } catch (error: any) {
            console.log(`❌ Failed in ${location}: ${error.message.substring(0, 80)}...`);
        }
    }
}

testImagenLocations();
