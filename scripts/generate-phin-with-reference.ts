import OpenAI from "openai";
import * as dotenv from "dotenv";
import * as fs from "fs";
import * as path from "path";
import https from "https";
import sharp from "sharp";

dotenv.config();

const apiKey = process.env.OPENAI_API_KEY?.replace(/^"(.*)"$/, '$1');
if (!apiKey) {
    console.error("Please set OPENAI_API_KEY in your .env file");
    process.exit(1);
}

const openai = new OpenAI({ apiKey });

// Function to encode image to base64
function encodeImageToBase64(imagePath: string): string {
    const imageBuffer = fs.readFileSync(imagePath);
    return imageBuffer.toString('base64');
}

// Analyze reference image with GPT-4 Vision
async function analyzeReferenceImage(imagePath: string): Promise<string> {
    console.log(`\n🔍 Analyzing reference image with GPT-4 Vision...`);
    
    const base64Image = encodeImageToBase64(imagePath);
    
    const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
            {
                role: "user",
                content: [
                    {
                        type: "text",
                        text: `Analyze this comic panel image and provide detailed descriptions of:
1. The main character (Phin) - appearance, clothing, hair, age, facial features, expression
2. The art style - colors, lighting, composition, visual style
3. The setting/environment details
4. Any other visual elements

Be extremely specific and detailed so I can recreate this exact character and style in future panels. Focus on what makes the character visually distinctive.`
                    },
                    {
                        type: "image_url",
                        image_url: {
                            url: `data:image/jpeg;base64,${base64Image}`
                        }
                    }
                ]
            }
        ],
        max_tokens: 1000
    });
    
    const analysis = response.choices[0].message.content || "";
    console.log(`\n📋 Character Analysis:\n${analysis}\n`);
    
    return analysis;
}

// Generate DALL-E prompt based on analysis
async function createConsistentPrompt(analysis: string, panelDescription: string): Promise<string> {
    console.log(`\n✍️  Creating consistent prompt based on reference...`);
    
    const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
            {
                role: "user",
                content: `Based on this character analysis from a reference image:

${analysis}

Create a DALL-E 3 prompt for a new comic panel with the EXACT same character, art style, and visual consistency.

New panel description: ${panelDescription}

Requirements:
- Maintain exact character appearance from analysis
- Match the art style precisely
- Keep visual consistency
- Include composition and lighting details
- Format as a single detailed prompt

Prompt:`
            }
        ],
        max_tokens: 500
    });
    
    const prompt = response.choices[0].message.content || "";
    console.log(`\n📝 Generated prompt:\n${prompt}\n`);
    
    return prompt;
}

// Generate image with DALL-E 3
async function generateImage(prompt: string, outputPath: string) {
    console.log(`\n🎨 Generating image with DALL-E 3...`);

    try {
        const response = await openai.images.generate({
            model: "dall-e-3",
            prompt: prompt,
            n: 1,
            size: "1024x1024",
            quality: "hd",
        });

        if (response.data[0].url) {
            const imageUrl = response.data[0].url;
            await downloadImage(imageUrl, outputPath);
            console.log(`✅ Image saved to ${outputPath}`);
        } else {
            console.error("❌ No image URL received");
        }
    } catch (error) {
        console.error("❌ Error generating image:", error);
        throw error;
    }
}

async function downloadImage(url: string, outputPath: string): Promise<void> {
    return new Promise((resolve, reject) => {
        const tempPath = outputPath.replace('.jpg', '.temp.png');
        const file = fs.createWriteStream(tempPath);
        
        https.get(url, (response) => {
            response.pipe(file);
            file.on('finish', async () => {
                file.close();
                try {
                    await sharp(tempPath)
                        .jpeg({ quality: 90, mozjpeg: true })
                        .toFile(outputPath);
                    
                    fs.unlinkSync(tempPath);
                    resolve();
                } catch (err) {
                    fs.unlinkSync(tempPath);
                    reject(err);
                }
            });
            file.on('error', (err) => {
                fs.unlink(tempPath, () => {});
                reject(err);
            });
        }).on('error', (err) => {
            reject(err);
        });
    });
}

// Panel descriptions
const PANEL_DESCRIPTIONS: { [key: number]: { filename: string; description: string } } = {
    2: {
        filename: "phin_panel_2_grounded.jpg",
        description: "Study door shut tight. Sign: 'HOT SAUCE R&D — DO NOT ENTER.' Professor (middle-aged man with glasses in lab coat) inserting Wi-Fi router into a safe like it's radioactive. Phin watches from doorway, betrayed and furious."
    },
    3: {
        filename: "phin_panel_3_garden.jpg",
        description: "Backyard pepper patch. Plants small, wilted, pathetic. Professor kneels with soil test kit, frowning at results. Phin peers through window, realizing his father is desperate."
    },
    4: {
        filename: "phin_panel_4_research.jpg",
        description: "Night scene. Phin sneaking into the yard with flashlight and DIY thermal monocle made from goggles and duct tape. Two black cats watch from fence with alien awareness."
    },
    5: {
        filename: "phin_panel_5_accident.jpg",
        description: "Cats casually peeing at base of pepper stems. Soil glows faint neon and steam rises. Phin freezes mid-step — stunned realization moment."
    },
    6: {
        filename: "phin_panel_6_choir.jpg",
        description: "Backyard training setup. Phin with whistle, whiteboard diagrams, cat treats as incentives. Cats arranged like soldiers or lab subjects — eerie compliance."
    },
    7: {
        filename: "phin_panel_7_harvest.jpg",
        description: "Rows of oversized glowing peppers — deep red with faint bio-luminescent veins. Professor drop-to-knees, overwhelmed. One black cat sits beside him like a witness."
    },
    8: {
        filename: "phin_panel_8_empire.jpg",
        description: "Magazine cover: 'THE SAUCE KING!' Factory line bottling glowing sauce. News drones hover overhead. Phin stands in shadows behind success photos."
    },
    9: {
        filename: "phin_panel_9_strike.jpg",
        description: "Garden now guarded by cats holding tiny union-style picket signs. Phin stands defiantly with banner: NO BYTES = NO BITES. Peppers drying and greying behind him."
    },
    10: {
        filename: "phin_panel_10_treaty.jpg",
        description: "In Phin's glowing bedroom control center — dark screens, code rain, cyberpunk lighting. Professor kneels, offering a golden router and signed contract: 'Unlimited Internet + Partnership Rights.' Cats perched like advisors."
    }
};

async function run() {
    const panelNumber = process.argv[2] ? parseInt(process.argv[2]) : 2;
    
    if (panelNumber < 2 || panelNumber > 10) {
        console.error(`❌ Invalid panel number: ${panelNumber}`);
        console.log(`\nValid panels: 2-10 (panel 1 is the reference)`);
        console.log(`\nUsage: npx tsx scripts/generate-phin-with-reference.ts [panel-number]`);
        process.exit(1);
    }

    const publicDir = path.join(process.cwd(), "public");
    const referenceImagePath = path.join(publicDir, "phin_panel_1.jpg");
    
    if (!fs.existsSync(referenceImagePath)) {
        console.error(`❌ Reference image not found: ${referenceImagePath}`);
        console.log(`Please make sure phin_panel_1.jpg exists in /public/`);
        process.exit(1);
    }

    const panel = PANEL_DESCRIPTIONS[panelNumber];
    const outputPath = path.join(publicDir, panel.filename);

    console.log(`\n🎬 Phin's Story - Vision-Based Generation`);
    console.log(`========================================`);
    console.log(`📸 Reference: phin_panel_1.jpg`);
    console.log(`🎯 Target: Panel ${panelNumber}`);

    // Step 1: Analyze reference image
    const analysis = await analyzeReferenceImage(referenceImagePath);
    
    // Step 2: Create consistent prompt
    const prompt = await createConsistentPrompt(analysis, panel.description);
    
    // Step 3: Generate new panel
    await generateImage(prompt, outputPath);
    
    console.log(`\n✨ Done! Check: /public/${panel.filename}`);
    console.log(`💰 Total cost: ~$0.08 (DALL-E) + ~$0.01 (GPT-4 Vision) = ~$0.09`);
    console.log(`\n💡 To generate next panel: npx tsx scripts/generate-phin-with-reference.ts ${panelNumber + 1}`);
}

run();
