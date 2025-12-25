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

const johnRef1 = fileToPart('images/john.jpg', 'image/jpeg');
const johnRef2 = fileToPart('images/john2.jpg', 'image/jpeg');

const STYLE = "Digital comic book / cartoon art style, cinematic lighting, realistic character likeness, professional illustration.";

const PANELS = [
    {
        number: 1,
        title: "Patrol on the Open Sea",
        prompt: "Midshipman Marshall (use john.jpg and john2.jpg, young Navy officer in uniform) stands on the deck of a Navy vessel, looking out at an endless blue ocean. The sun is shining, and the scene is calm but cinematic. Realistic comic style, highly detailed. IMPORTANT: NO MONKEY IN THIS SCENE. Marshall is alone on deck. " + STYLE,
        filename: "john_panel_1.jpg"
    },
    {
        number: 2,
        title: "Anomaly Detected",
        prompt: "Inside the ship's radar room. Screens are flashing red warnings. Officers are huddled around a console, looking confused and urgent. Marshall (john.jpg) is peering intently upward through binoculars, looking focused. High tension atmosphere. IMPORTANT: NO MONKEY IN THIS SCENE. The monkey has not arrived yet. " + STYLE,
        filename: "john_panel_2.jpg"
    },
    {
        number: 3,
        title: "Fireball in the Sky",
        prompt: "Interior shot of a space capsule during reentry. A small space monkey in a silver suit is strapped into a seat, looking wide-eyed and alone. Through the porthole window, the blue sky and clouds are spinning. Cinematic lighting. IMPORTANT: NO HUMANS. Just the monkey. " + STYLE,
        filename: "john_panel_3.jpg",
        useRefs: false
    },
    {
        number: 4,
        title: "Recovery Mission",
        prompt: "Sailors in a small rescue boat have secured the capsule bobbing in the water. Marshall (john.jpg) has cracked the hatch open. Inside, a space monkey in a tiny silver suit is visible, looking frantic and baring its teeth. Marshall looks surprised. " + STYLE,
        filename: "john_panel_4.jpg"
    },
    {
        number: 5,
        title: "Panic on Deck",
        prompt: "On the deck of the ship. The monkey is out of the capsule, thrashing and screeching in his silver space suit. A clear nametag on the suit reads 'FIELDING'. Marshall (john.jpg) is kneeling in the foreground, slowly reaching into his bag with a calm expression. " + STYLE,
        filename: "john_panel_5.jpg"
    },
    {
        number: 6,
        title: "Banana Truce",
        prompt: "Close up. Marshall (john.jpg) gently offers a yellow banana to the monkey. The monkey, wearing a silver suit with a nametag 'FIELDING', has frozen. He is sniffing the air, expression changing from fear to curiosity. He clings to Marshall's arm. Marshall looks kind and reassuring. " + STYLE,
        filename: "john_panel_6.jpg"
    },
    {
        number: 7,
        title: "New Friends",
        prompt: "Sunset on the deck of the ship. Marshall (john.jpg) and the monkey (now wrapped in a blanket, silver suit visible underneath with nametag 'FIELDING') are sitting side-by-side against a railing. The monkey is happily eating the banana. Marshall is smiling at the horizon. Warm, emotional lighting. " + STYLE,
        filename: "john_panel_7.jpg"
    },
    {
        number: 8,
        title: "Farewell & Legend",
        prompt: "A helicopter has arrived to take the monkey. The monkey (Fielding), in his silver suit with nametag 'FIELDING', is looking back, saluting with a tiny hand while clutching a mission patch. Marshall (john.jpg) stands on deck saluting back. A banana peel is left on the deck near Marshall's feet. Poignant farewell. " + STYLE,
        filename: "john_panel_8.jpg"
    }
];

async function generatePanel(panelNumber) {
    const panel = PANELS.find(p => p.number === panelNumber);
    if (!panel) return;

    console.log(`Generating Panel ${panelNumber}: ${panel.title}...`);

    const fullPrompt = {
        text: `Based on the attached reference images of John (Midshipman Marshall), generate the following comic panel in a consistent digital comic book / cartoon art style:
${panel.prompt}

Character Consistency:
1. John (Marshall): Use the man from john.jpg and john2.jpg (young Navy officer).
2. Monkey: A space monkey in a silver suit.
3. Style: Cinematic, realistic comic book aesthetic.` };

    // Prepare parts - only include refs if not explicitly disabled
    const parts = [fullPrompt];
    if (panel.useRefs !== false) {
        parts.unshift(johnRef1, johnRef2);
    }

    const payload = {
        contents: [
            {
                role: "user",
                parts: parts
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
