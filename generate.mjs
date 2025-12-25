import dotenv from 'dotenv';
import fs from 'fs';
import { ACCESS_TOKEN } from './newtoken.mjs';

dotenv.config();

const modelId = 'gemini-3-pro-image-preview';
const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelId}:streamGenerateContent`;

function fileToPart(path, mimeType) {
    return {
        inlineData: {
            mimeType,
            data: fs.readFileSync(path).toString('base64')
        }
    };
}

console.log("Loading reference images...");
const phinRef = fileToPart('public/phin.jpg', 'image/jpeg');
const paulsRef = fileToPart('public/pauls_panel_1_bald.jpg', 'image/jpeg');
const promptText = {
    text: `Based on the attached reference images, generate the tenth and final panel of the comic:
"The Router Treaty". Phin's bedroom, which has been transformed into a glowing, cyberpunk-style control center with multiple dark screens and "code rain" falling down the displays. The lighting is neon and dramatic. Paul (bald, blue eyes, no glasses) is kneeling, humbly offering a golden Wi-Fi router and a signed contract titled "Unlimited Internet + Partnership Rights" to Phin. Phin is sitting in a high-tech gaming chair, looking triumphant. The two black cats are perched on his shoulders or the desk like royal advisors.

Character Details:
1. Paul: Bald man with vibrant blue eyes (no glasses), looking defeated but respectful.
2. Phin: boy with curly brown hair in a brown hoodie (as seen in phin.jpg).

Style:
Maintain the exact same comic book / cartoon art style. The atmosphere should be high-tech, cyberpunk, and nocturnal.` };

async function generate() {
    console.log("Requesting image generation...");

    const payload = {
        contents: [
            { role: 'user', parts: [phinRef, paulsRef, promptText] }
        ],
        generationConfig: {
            maxOutputTokens: 32768,
            temperature: 1,
            topP: 0.95,
            responseModalities: ["TEXT", "IMAGE"],
            imageConfig: {
                aspectRatio: "1:1",
                imageSize: "1K",
            }
        }
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${ACCESS_TOKEN}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            const err = await response.text();
            throw new Error(`HTTP ${response.status}: ${err}`);
        }

        const data = await response.json();

        // Find the image part in the response
        for (const chunk of data) {
            if (chunk.candidates && chunk.candidates[0].content.parts) {
                for (const part of chunk.candidates[0].content.parts) {
                    if (part.inlineData) {
                        const filename = `public/phin_panel_10_treaty.jpg`;
                        fs.writeFileSync(filename, Buffer.from(part.inlineData.data, 'base64'));
                        console.log(`Successfully generated image: ${filename}`);
                    }
                    if (part.text) {
                        console.log("Model response text:", part.text);
                    }
                }
            }
        }
    } catch (e) {
        console.error("Error:", e);
    }
}

generate();
