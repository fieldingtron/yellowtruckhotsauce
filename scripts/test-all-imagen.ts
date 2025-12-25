import { VertexAI } from "@google-cloud/vertexai";
import * as dotenv from "dotenv";

dotenv.config();

const project = 'findthedivine';
const location = 'us-central1';

process.env.GOOGLE_APPLICATION_CREDENTIALS = './google-cloud.json';

async function testMultipleImagen() {
    const vertexAI = new VertexAI({ project, location });
    const models = [
        'imagen-3.0-generate-001',
        'imagen-3.0-fast-generate-001',
        'image-generation@006',
        'image-generation@005'
    ];

    for (const modelName of models) {
        try {
            console.log(`\n🎨 Testing: ${modelName}...`);
            const model = vertexAI.getGenerativeModel({ model: modelName });

            const response = await model.generateContent({
                contents: [{ role: 'user', parts: [{ text: "Say hi" }] }], // Testing with text first to see if model exists/access works
            });

            console.log(`✅ Success with ${modelName}!`);
            return;
        } catch (error: any) {
            console.log(`❌ Failed ${modelName}: ${error.message.substring(0, 100)}`);
        }
    }
}

testMultipleImagen();
