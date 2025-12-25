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

const ginnyRef = fileToPart('images/ginny.jpg', 'image/jpeg');
const johnRef1 = fileToPart('images/john.jpg', 'image/jpeg');
const johnRef2 = fileToPart('images/john2.jpg', 'image/jpeg');

const STYLE = "Digital comic book / cartoon art style, light historical/romance flair, era-drama aesthetic. Cinematic lighting. Realistic character likeness. IMPORTANT: NO dialogue bubbles or speech bubbles. Minimal text is allowed only for transitions or labels (e.g., 'MEANWHILE...').";

const PANELS = [
    {
        number: 1,
        title: "Virginia's Secret Admiration",
        prompt: "Virginia (ginny.jpg) sits at her desk with a dreamy expression, holding a quill, doodling 'JM' in the margins of a notebook. She is a beautiful woman in her 20s. Cozy, light historical room. NO SPEECH BUBBLES. " + STYLE,
        filename: "ginny_panel_1.jpg"
    },
    {
        number: 2,
        title: "The Friend with Opinions",
        prompt: "Brooke (a friend, woman in her 20s, stylish and confident) is sprawled on a bed, painting her nails. She is looking at Virginia with an encouraging smirk. Virginia (ginny.jpg) is sitting nearby. Brooke is gesturing as if giving bold advice, encouraging the perfumed letter plan. NO SPEECH BUBBLES. " + STYLE,
        filename: "ginny_panel_2.jpg"
    },
    {
        number: 3,
        title: "A Scarlet Idea",
        prompt: "Virginia (ginny.jpg) holds a piece of fancy red stationery next to a perfume bottle. She looks determined. She is writing elegantly on the red paper. Close up on her hands and the letter. NO SPEECH BUBBLES. " + STYLE,
        filename: "ginny_panel_3.jpg"
    },
    {
        number: 4,
        title: "Delivery Mission",
        prompt: "Virginia (ginny.jpg) slides the red letter with a wax seal into a naval inbox. She looks nervous but excited. NO SPEECH BUBBLES. " + STYLE,
        filename: "ginny_panel_4.jpg"
    },
    {
        number: 5,
        title: "Meanwhile… Different Plans",
        prompt: "Transition panel. The text 'MEANWHILE...' is written in a classic comic font in a small box. Midshipman Marshall (john.jpg, john2.jpg) is packing a bag with bananas and flashcards. He looks happy and focused. NO SPEECH BUBBLES. " + STYLE,
        filename: "ginny_panel_5.jpg"
    },
    {
        number: 6,
        title: "The Red Letter Arrives",
        prompt: "Midshipman Marshall (john.jpg) holds the red, perfumed letter. Pink hearts or scent lines faintly rise from it. A sailor in the background is whistling teasingly. Marshall is blushing. NO SPEECH BUBBLES. " + STYLE,
        filename: "ginny_panel_6.jpg"
    },
    {
        number: 7,
        title: "Decision Made",
        prompt: "Marshall (john.jpg) stares at a wall calendar where 'TONIGHT!' is written on the date for the Winter Ball. He puts down the bag of bananas thoughtfully. He is smiling and adjusting his uniform collar in a mirror. NO SPEECH BUBBLES. " + STYLE,
        filename: "ginny_panel_7.jpg"
    },
    {
        number: 8,
        title: "The Winter Ball",
        prompt: "A beautiful winter ball entrance with snow falling outside. Marshall (john.jpg) in full dress uniform greets Virginia (ginny.jpg), who looks stunning in a formal dress. He bows to her. They are smiling. NO SPEECH BUBBLES. " + STYLE,
        filename: "ginny_panel_8.jpg"
    },
    {
        number: 9,
        title: "A Gentle Connection",
        prompt: "Marshall (john.jpg) and Virginia (ginny.jpg) are dancing together. Marshall is talking animatedly, and Virginia is laughing with admiration. Romantic atmosphere. NO SPEECH BUBBLES. " + STYLE,
        filename: "ginny_panel_9.jpg"
    },
    {
        number: 10,
        title: "A New Beginning",
        prompt: "Walking home under lanterns after the dance. Virginia (ginny.jpg) holds a banana that Marshall brought. In the background, a silhouette of Fielding the space monkey sits on a fence, watching them like a chaperone. Marshall and Virginia look happy. NO SPEECH BUBBLES. " + STYLE,
        filename: "ginny_panel_10.jpg"
    }
];

async function generatePanel(panelNumber) {
    const panel = PANELS.find(p => p.number === panelNumber);
    if (!panel) return;

    console.log(`Generating Panel ${panelNumber}: ${panel.title}...`);

    const fullPrompt = {
        text: `Based on the attached reference images, generate the following comic panel for the story "Virginia & The Scarlet Letter… of Perfume":
${panel.prompt}

Character Consistency & Constraints:
1. Virginia (Ginny): Use 'ginny.jpg' - a beautiful woman in her 20s.
2. John (Marshall): Use 'john.jpg' and 'john2.jpg' - young Navy officer.
3. Brooke: A stylish friend in her 20s.
4. Fielding: Small space monkey (if present).
5. Style: Playful, light historical/romance comic book aesthetic.
6. IMPORTANT: NO SPEECH BUBBLES. Minimal transition text (like 'MEANWHILE...') is okay if requested, but no dialogue.

Scene Context: A romantic, slightly era-drama style story about a crush, a letter, and a winter ball.` };

    const payload = {
        contents: [
            {
                role: "user",
                parts: [ginnyRef, johnRef1, johnRef2, fullPrompt]
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
