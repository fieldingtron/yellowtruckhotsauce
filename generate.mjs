import dotenv from 'dotenv';
import fs from 'fs';
import { ACCESS_TOKEN } from './token.mjs';

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
    text: `Based on the attached reference images, generate the third panel of the comic:
Backyard pepper patch. The pepper plants are small, wilted, and looking pathetic. Paul (the professor) is kneeling in the dirt with a soil test kit, frowning deeply at the results. Phin is peering through a window from inside the house, realizing that his father is becoming desperate.

Character Details:
1. Paul: He is a bald man with vibrant blue eyes (from pauls_panel_1_bald.jpg, but WITHOUT glasses). He should look frustrated.
2. Phin: He is a boy with curly brown hair wearing a brown hoodie (as seen in phin.jpg).

Style:
Maintain the exact same comic book / cartoon art style as seen in the reference images. The scene should be set in a backyard during the daytime.` };

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
                        const filename = `public/phin_panel_3_garden.jpg`;
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
