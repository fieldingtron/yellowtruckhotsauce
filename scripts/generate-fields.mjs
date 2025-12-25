import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { ACCESS_TOKEN } from '../newtoken.mjs';

dotenv.config();

const modelId = 'gemini-3-pro-image-preview';
const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelId}:streamGenerateContent`;

function fileToPart(path, mimeType) {
    if (!fs.existsSync(path)) {
        console.warn(`Warning: File not found ${path}`);
        return null;
    }
    return {
        inlineData: {
            mimeType,
            data: fs.readFileSync(path).toString('base64')
        }
    };
}

// References
const fieldsRef = fileToPart('images/fields.jpg', 'image/jpeg');
const paulsRef = fileToPart('images/pauls.jpg', 'image/jpeg');
const peytonRef = fileToPart('images/peyton2.jpg', 'image/jpeg');
const johnRef = fileToPart('images/john.jpg', 'image/jpeg');
const ianRef = fileToPart('images/ian.jpg', 'image/jpeg');
const isaRef = fileToPart('images/isa.jpg', 'image/jpeg');
const phinRef = fileToPart('images/phin.jpg', 'image/jpeg');
const beaRef = fileToPart('images/bea.jpg', 'image/jpeg');

// Using generated panels for better consistency as requested
const rutaPanelRef = fileToPart('public/ruta_panel_2.jpg', 'image/jpeg');
const ginnyPanelRef = fileToPart('public/ginny_panel_1.jpg', 'image/jpeg');

const STYLE = "Digital comic book art style, vibrant colors, cinematic lighting. NO SPEECH BUBBLES.";

const PANELS = [
    {
        number: 9,
        title: "Rich & Slightly Famous",
        prompt: "A celebratory scene. Fields (based on fields.jpg) is the main focus, sitting in a chair with coffee. He MUST look exactly like the man in fields.jpg, but with a receding hairline/balding and wearing a shirt that says 'ROGUE RIVER'. Peyton (peyton2.jpg) and Pauls (pauls.jpg, age 40, clean-shaven, completely bald) are in the background with confetti. " + STYLE,
        filename: "fields_panel_9.jpg",
        refs: [fieldsRef, paulsRef, peytonRef]
    },
    {
        number: 10,
        title: "Moral of the Story",
        prompt: "A large family Christmas photo. Everyone is facing the camera in a cozy living room. A 'MERRY XMAS' sign is visible. Characters to include (match the attached images perfectly): 1. Fields (1st image): Balding, Rogue River shirt. 2. Pauls (2nd image): Age 40, clean-shaven, completely bald. 3. Peyton (3rd image): Match peyton2.jpg. 4. Ruta (4th image): Match her look from the provided panel. 5. Virginia/Ginny (5th image): Match her look from the provided panel. 6. John (6th image): Wearing his Midshipman uniform. 7. Ian (7th image): Match ian.jpg. 8. Isabella (8th image): Match isa.jpg. 9. Phin (9th image): Match phin.jpg. 10. Bea (10th image): Match bea.jpg. Ensure EVERY face is clear and looks like their source photo. They are all posing for a group portrait." + STYLE,
        filename: "fields_panel_10.jpg",
        refs: [fieldsRef, paulsRef, peytonRef, rutaPanelRef, ginnyPanelRef, johnRef, ianRef, isaRef, phinRef, beaRef]
    }
];

async function generatePanel(panelNumber) {
    const panel = PANELS.find(p => p.number === panelNumber);
    if (!panel) return;

    console.log(`Generating Panel ${panelNumber}: ${panel.title}...`);

    const activeRefs = (panel.refs || []).filter(r => r !== null);

    const fullPrompt = {
        text: `You are generating a comic panel for a series. It is CRITICAL to maintain character likeness from the attached images. 

${panel.prompt}

MANDATORY RULES:
- NO SPEECH BUBBLES.
- NO DIALOGUE.
- Match facial features, hair, and clothing EXACTLY as described.
- Fields (Image 1) is balding and wearing a 'ROGUE RIVER' shirt.
- Pauls (Image 2) is 40, clean-shaven, and bald.` };

    const payload = {
        contents: [
            {
                role: "user",
                parts: [...activeRefs, fullPrompt]
            }
        ],
        generationConfig: {
            maxOutputTokens: 32768,
            temperature: 0.1,
            topP: 0.95,
            responseModalities: ["TEXT", "IMAGE"],
            imageConfig: { aspectRatio: "1:1", imageSize: "1K" }
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

        for (const chunk of data) {
            if (chunk.candidates && chunk.candidates[0].content.parts) {
                for (const part of chunk.candidates[0].content.parts) {
                    if (part.inlineData) {
                        const outputPath = path.join('public', panel.filename);
                        fs.writeFileSync(outputPath, Buffer.from(part.inlineData.data, 'base64'));
                        console.log(`✅ Successfully generated: ${outputPath}`);
                    }
                }
            }
        }
    } catch (e) {
        console.error(`Error generating panel ${panelNumber}:`, e);
    }
}

async function run() {
    const args = process.argv.slice(2);
    for (const arg of args) {
        const num = parseInt(arg);
        if (!isNaN(num)) {
            await generatePanel(num);
        }
    }
}

run();
