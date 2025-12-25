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

const peytonRef1 = fileToPart('images/peyton.jpg', 'image/jpeg');
const peytonRef2 = fileToPart('images/peyton2.jpg', 'image/jpeg');
const catRef = fileToPart('images/blackcat.jpg', 'image/jpeg');

const STORY_NAME = "Things No One Asked Them To Say";
const PANELS = [
    {
        number: 1,
        title: "Writer in Crisis",
        prompt: "Peyton (the woman from the reference images) at her desk night-owl style, surrounded by empty coffee mugs, half-written manuscripts everywhere, exhausted expression. Digital comic book / cartoon art style.",
        filename: "peyton_panel_1.jpg"
    },
    {
        number: 2,
        title: "Landlord by Necessity",
        prompt: "Front of a duplex house. Peyton's side is tidy with flowers; Steven & Craig's side (the other half) is chaotic with rainbow lights and mismatched patio furniture. Peyton is in the foreground wearing a tool belt and holding repair invoices, looking slightly stressed. Digital comic book / cartoon art style.",
        filename: "peyton_panel_2.jpg"
    },
    {
        number: 3,
        title: "Enter Drama Incarnate",
        prompt: "Two 50-year-old men, Steven and Craig, walk into Peyton's life. Steven (50) is wearing a stylish scarf and holding a tall iced coffee. Craig (50) is looking dramatic and expressive. They look like middle-aged men who have just moved in. Peyton is watching them from her porch, looking a bit overwhelmed. Digital comic book / cartoon art style.",
        filename: "peyton_panel_3.jpg"
    },
    {
        number: 4,
        title: "Complaint Olympics",
        prompt: "Two 50-year-old men, Steven and Craig, are having a dramatic meltdown on their porch. Craig (50) is crying hysterically, pointing at the neighbor's house. Steven (50, wearing a scarf) is gasping in shock at a slightly crooked trash can. They are middle-aged men acting like toddlers. Peyton is in the background, looking exhausted and rubbing her temples. Digital comic book / cartoon art style.",
        filename: "peyton_panel_4.jpg"
    },
    {
        number: 5,
        title: "Secret Agents of Chaos",
        prompt: "Peyton's two black cats are in the backyard. They are standing over Steven's laundry basket (which is near a shared fence) and are explicitly peeing into the basket of clothes. In the background, Peyton is peeking over the fence with a mischievous smirk. IMPORTANT: Peyton must look exactly like the woman in the reference images (peyton.jpg), youthful, attractive, and pretty. DO NOT include any speech bubbles or text boxes in the image. Digital comic book / cartoon art style.",
        filename: "peyton_panel_5.jpg"
    },
    {
        number: 6,
        title: "Confusion & Perfume",
        prompt: "Steven (50) is sniffing a shirt from his laundry basket with a look of extreme horror and disgust. Next to him, Craig (50) is frantically spraying four different bottles of cologne into the air, creating a cloud of mist. Peyton is in the background with a subtle, knowing smirk. IMPORTANT: Peyton must look like the woman in the reference images (youthful/pretty). NO SPEECH BUBBLES OR TEXT BOXES. Digital comic book / cartoon art style.",
        filename: "peyton_panel_6.jpg"
    },
    {
        number: 7,
        title: "The Spark",
        prompt: "Peyton is sitting on her sofa, laughing heartily into her smartphone. She is alone in the room, enjoying the conversation. IMPORTANT: Peyton's face must have a highly realistic likeness to the woman in the reference images (peyton.jpg), capturing her specific facial features, eyes, and smile while keeping her pretty. DO NOT include any other people, phone bubbles, or photos of other characters. NO SPEECH BUBBLES. Digital comic book / cartoon art style with high portrait detail.",
        filename: "peyton_panel_7.jpg"
    },
    {
        number: 8,
        title: "The Book",
        prompt: "Peyton is at her laptop, designing a book cover. The title on the screen is 'Things No One Asked Them To Say'. Her face is seen in profile or three-quarter view, showing a realistic and pretty likeness to the reference photos. Her two black cats are on the desk with her. NO SPEECH BUBBLES. Digital comic book / cartoon art style with detailed facial features.",
        filename: "peyton_panel_8.jpg"
    },
    {
        number: 9,
        title: "Viral Explosion",
        prompt: "Peyton is at a bookstore signing event, smiling warmly at a fan. Her face captures the realistic and attractive features from the reference images. Fans are in the background. A person holds a phone showing a viral video. NO SPEECH BUBBLES. Digital comic book / cartoon art style with realistic character likeness.",
        filename: "peyton_panel_9.jpg"
    },
    {
        number: 10,
        title: "Poetic Justice",
        prompt: "A large city billboard features a beautiful, realistic portrait of Peyton (based on her reference photos) with the text 'INTERNATIONAL HIT AUTHOR!'. On the street below, the two 50-year-old men, Steven and Craig, are walking past a laundry basket, looking confused. Peyton's cats are smirking from a nearby window. Near the bottom corner of the image, the text 'TO BE CONTINUED...' is written in a classic comic book style font. NO SPEECH BUBBLES. Digital comic book / cartoon art style.",
        filename: "peyton_panel_10.jpg"
    }
];

async function generatePanel(panelNumber) {
    const panel = PANELS.find(p => p.number === panelNumber);
    if (!panel) {
        console.error(`Panel ${panelNumber} not found.`);
        return;
    }

    console.log(`Generating Panel ${panelNumber}: ${panel.title}...`);

    const fullPrompt = {
        text: `Based on the attached reference images of Peyton (the woman) and the black cat, generate the following comic panel in a consistent digital comic book / cartoon art style:
${panel.prompt}

Character Consistency:
1. Peyton: Use the woman from peyton.jpg and peyton2.jpg (brownish hair, friendly face).
2. The Cats: Use the black cat from blackcat.jpg (sleek black cat with yellow eyes).
3. Style: Vibrant, clean lines, comic book aesthetic.` };

    const payload = {
        contents: [
            { role: 'user', parts: [peytonRef1, peytonRef2, catRef, fullPrompt] }
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
    const arg = process.argv[2];
    const num = parseInt(arg);
    if (!isNaN(num)) {
        await generatePanel(num);
    } else {
        console.log("Usage: node scripts/generate-peyton.mjs [panel-number]");
        console.log("Example: node scripts/generate-peyton.mjs 2");
    }
}

run();
