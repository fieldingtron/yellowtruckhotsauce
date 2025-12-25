import { VertexAI } from "@google-cloud/vertexai";

process.env.GOOGLE_APPLICATION_CREDENTIALS = './google-cloud.json';

const project = 'findthedivine';
const location = 'us-central1';

async function testMultipleModels() {
    console.log("🧪 Testing multiple model configurations...\n");
    
    const models = [
        'gemini-1.5-pro',
        'gemini-1.5-flash',
        'gemini-pro',
        'gemini-1.0-pro',
        'gemini-1.5-pro-001',
        'gemini-1.5-flash-001',
    ];
    
    for (const modelName of models) {
        try {
            console.log(`Testing: ${modelName}...`);
            const vertexAI = new VertexAI({ project, location });
            const model = vertexAI.getGenerativeModel({ model: modelName });
            
            const response = await model.generateContent({
                contents: [{ role: 'user', parts: [{ text: 'Say hi' }] }],
            });
            
            const text = response.response.candidates?.[0]?.content?.parts?.[0]?.text;
            console.log(`✅ SUCCESS with ${modelName}!`);
            console.log(`Response: ${text}\n`);
            return;
            
        } catch (error: any) {
            if (error.message.includes('404')) {
                console.log(`   ❌ Model not found\n`);
            } else if (error.message.includes('403')) {
                console.log(`   ❌ Permission denied\n`);
            } else {
                console.log(`   ❌ Error: ${error.message?.substring(0, 80)}...\n`);
            }
        }
    }
    
    console.log("\n⚠️  None of the models worked. Possible issues:");
    console.log("   1. Vertex AI API may still be enabling (wait 1-2 minutes)");
    console.log("   2. Check if billing is enabled: https://console.cloud.google.com/billing?project=findthedivine");
    console.log("   3. Gemini models may not be available in your region");
}

testMultipleModels();
