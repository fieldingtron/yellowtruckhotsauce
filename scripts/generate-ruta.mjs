import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { ACCESS_TOKEN } from '../newtoken.mjs';

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

const paulsRef = fileToPart('images/pauls2.jpg', 'image/jpeg');
const rutaRef = fileToPart('images/ruta2.jpg', 'image/jpeg');

const STYLE = "Digital comic book / cartoon art style, light historical/nostalgic flair, realistic character likeness. Cinematic lighting. NO SPEECH BUBBLES or DIALOGUE BUBBLES within the image. Text is only allowed for object labels (like book titles) if specifically requested.";

const PANELS = [
    {
        number: 1,
        title: "Quiet Evening, Big Dreams",
        prompt: "Kitchen table at night. Ruta (ruta2.jpg, depict her much younger, in her 30s, mid-length hair) sits solving a puzzle grid with a coffee. Pauls (depict as a 10-year-old boy, facial structure and eyes of pauls2.jpg, NORMAL BROWN HAIR) is sitting across from her, drawing intensely in a notebook. On the wall in the background, a small Latvian flag. Nostalgic family home setting. ABSOLUTELY NO TEXT. " + STYLE,
        filename: "ruta_panel_1.jpg"
    },
    {
        number: 2,
        title: "The Manuscript",
        prompt: "Interior shot. Pauls (10-year-old boy, pauls2.jpg facial structure, NORMAL BROWN HAIR) proudly holds up a handmade booklet. On the cover, the title 'Midshipman Marshall and his monkey Fielding' is clearly written in charming kid-like handwriting, alongside a drawing of a rocket and monkey. Ruta (ruta2.jpg, younger version) is looking at him with a supportive, bold expression. NO SPEECH BUBBLES. " + STYLE,
        filename: "ruta_panel_2.jpg"
    },
    {
        number: 3,
        title: "Brainstorm Drive",
        prompt: "Scenic back roads. Ruta (younger, ruta2.jpg) is driving an older car. Pauls (age 10, pauls2.jpg structure, NORMAL BROWN HAIR) in the passenger seat narrated ideas. Ruta stops at a turnout, looking at a paper puzzle. NO SPEECH BUBBLES. " + STYLE,
        filename: "ruta_panel_3.jpg"
    },
    {
        number: 4,
        title: "Kitchen Becomes Publishing House",
        prompt: "Kitchen table covered in stacks of paper. Pauls (age 10, NORMAL BROWN HAIR) is busy making 'books'. Ruta (ruta2.jpg, younger) flips a completed puzzle page triumphantly. NO SPEECH BUBBLES. " + STYLE,
        filename: "ruta_panel_4.jpg"
    },
    {
        number: 5,
        title: "First Customer Attempt",
        prompt: "Suburban street. Pauls (age 10, NORMAL BROWN HAIR) knocks on a front door. Neighbor is shaking their head. Ruta (ruta2.jpg, younger) stands behind him, giving a thumbs-up. NO SPEECH BUBBLES. " + STYLE,
        filename: "ruta_panel_5.jpg"
    },
    {
        number: 6,
        title: "Better Sales Pitch",
        prompt: "Another house. Pauls (age 10, NORMAL BROWN HAIR) is speaking confidently. A neighbor laughs and buys a book. Pauls looks like a hero. NO SPEECH BUBBLES. " + STYLE,
        filename: "ruta_panel_6.jpg"
    },
    {
        number: 7,
        title: "Momentum",
        prompt: "Sidewalk street booth. A sign on the booth says 'STORIES $1'. Other kids are reading illustrated booklets where the title 'Midshipman Marshall and his monkey Fielding' is visible on the covers. Ruta (ruta2.jpg, younger) is sitting in a folding chair solving a puzzle. NO SPEECH BUBBLES. " + STYLE,
        filename: "ruta_panel_7.jpg"
    },
    {
        number: 8,
        title: "Celebration Drive",
        prompt: "Interior of the car at sunset. Pauls (age 10, NORMAL BROWN HAIR) is counting coins. Ruta (ruta2.jpg, younger) is humming while driving. Warm sunset glow. NO SPEECH BUBBLES. " + STYLE,
        filename: "ruta_panel_8.jpg"
    },
    {
        number: 9,
        title: "Late-Night Creating",
        prompt: "Back home at night. Pauls (age 10, NORMAL BROWN HAIR) sketching monkeys. Ruta (ruta2.jpg, younger) tackling a puzzle with a pencil in her mouth. NO SPEECH BUBBLES. " + STYLE,
        filename: "ruta_panel_9.jpg"
    },
    {
        number: 10,
        title: "The Future",
        prompt: "Wide shot. Ruta (ruta2.jpg, younger) fills in the last square. Pauls (age 10, NORMAL BROWN HAIR) finished his story. They share a knowing, proud smile. NO SPEECH BUBBLES. " + STYLE,
        filename: "ruta_panel_10.jpg"
    }
];

async function generatePanel(panelNumber) {
    const panel = PANELS.find(p => p.number === panelNumber);
    if (!panel) return;

    console.log(`Generating Panel ${panelNumber}: ${panel.title}...`);

    const fullPrompt = {
        text: `Based on the attached reference images, generate a comic panel for the story "Pauls the Story Seller & Ruta the Latvian Sudoku Mom":
${panel.prompt}

Character Consistency & Likeness:
1. Young Pauls: VERY IMPORTANT - Depict as a 10-year-old boy. Use 'pauls2.jpg' ONLY for his facial structure and eyes. He must have NORMAL BROWN HAIR (not purple). Keep hair consistent across panels.
2. Ruta: Use 'ruta2.jpg' (improved reference) for her facial features, but depict her MUCH YOUNGER, in her 30s. Keep her hairstyle consistent.
3. Style: Nostalgic, playful digital comic book aesthetic.
4. NO DIALOGUE: NO speech bubbles and NO dialogue in the image. Written text is only allowed for object titles (like the books in panel 2 and panel 7).` };

    const payload = {
        contents: [
            {
                role: "user",
                parts: [paulsRef, rutaRef, fullPrompt]
            }
        ],
        generationConfig: {
            maxOutputTokens: 32768,
            temperature: 1,
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
                    if (part.text) {
                        console.log("Model response text:", part.text);
                    }
                }
            }
        }
    } catch (e) {
        console.error(`Error generating panel ${panelNumber}:`, e);
    }
}

async function run() {
    const num = parseInt(process.argv[2]);
    if (!isNaN(num)) {
        await generatePanel(num);
    } else {
        console.log("Usage: node scripts/generate-john.mjs [panel-number]");
    }
}

run();
