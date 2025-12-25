import { VertexAI } from "@google-cloud/vertexai";

process.env.GOOGLE_APPLICATION_CREDENTIALS = './google-cloud.json';

async function checkAccess() {
    console.log("🔍 Checking Vertex AI Access");
    console.log("============================\n");
    
    const project = 'findthedivine';
    const serviceAccount = 'ftd-885@findthedivine.iam.gserviceaccount.com';
    
    console.log("📋 Configuration:");
    console.log(`   Project: ${project}`);
    console.log(`   Service Account: ${serviceAccount}`);
    console.log(`   Location: us-central1\n`);
    
    // Try different models and locations
    const tests = [
        { location: 'us-central1', model: 'gemini-1.5-pro' },
        { location: 'us-central1', model: 'gemini-1.5-flash' },
        { location: 'us-east4', model: 'gemini-1.5-pro' },
    ];
    
    for (const test of tests) {
        try {
            console.log(`\n🧪 Testing: ${test.model} in ${test.location}...`);
            const vertexAI = new VertexAI({ project, location: test.location });
            const model = vertexAI.getGenerativeModel({ model: test.model });
            
            const response = await model.generateContent({
                contents: [{ role: 'user', parts: [{ text: 'Hi' }] }],
            });
            
            const text = response.response.candidates?.[0]?.content?.parts?.[0]?.text;
            console.log(`   ✅ SUCCESS! Response: ${text}`);
            return;
            
        } catch (error: any) {
            console.log(`   ❌ Failed: ${error.message?.substring(0, 100)}...`);
        }
    }
    
    console.log("\n\n❌ All tests failed. Permissions are not set correctly.");
    console.log("\n📝 TO FIX - Use Google Cloud Console:");
    console.log("=====================================");
    console.log("\n1. Enable Vertex AI API:");
    console.log(`   https://console.cloud.google.com/apis/library/aiplatform.googleapis.com?project=${project}`);
    console.log("\n2. Grant IAM Permissions:");
    console.log(`   https://console.cloud.google.com/iam-admin/iam?project=${project}`);
    console.log(`   - Find: ${serviceAccount}`);
    console.log(`   - Edit → Add Role → "Vertex AI User"`);
    console.log("\n3. Wait 1-2 minutes for permissions to propagate");
    console.log("\n4. Check billing is enabled:");
    console.log(`   https://console.cloud.google.com/billing?project=${project}`);
}

checkAccess();
