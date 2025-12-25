import { VertexAI } from "@google-cloud/vertexai";
import * as dotenv from "dotenv";

dotenv.config();

const project = 'findthedivine';
const location = 'us-central1';

process.env.GOOGLE_APPLICATION_CREDENTIALS = './google-cloud.json';

async function testImagen() {
    try {
        console.log("🎨 Testing Imagen on Vertex AI...");
        const vertexAI = new VertexAI({ project, location });

        // Note: Imagen might require a different model name or endpoint
        const model = vertexAI.getGenerativeModel({
            model: 'imagen-3.0-generate-001'
        });

        const prompt = "A high-quality comic book illustration of a yellow truck.";

        console.log(`Sending prompt: ${prompt}`);

        const response = await model.generateContent({
            contents: [{ role: 'user', parts: [{ text: prompt }] }],
        });

        console.log("✅ Success? Response received.");
        console.log(JSON.stringify(response.response, null, 2));

    } catch (error: any) {
        console.error("❌ Imagen test failed:");
        console.error(error.message);
        if (error.response) {
            console.error(JSON.stringify(error.response.data, null, 2));
        }
    }
}

testImagen();
