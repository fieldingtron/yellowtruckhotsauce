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

// Character descriptions for consistency across all panels
const CHARACTERS = {
    phin: "A teenage boy (around 13-15 years old) with messy dark hair, wearing a hoodie and jeans, tech-savvy and slightly rebellious expression",
    professor: "A middle-aged professor with glasses, slightly disheveled appearance, wearing a lab coat or academic clothing, looking stressed and determined",
    cats: "Two sleek black cats with unnaturally intelligent green eyes, sitting upright with an eerie, knowing presence"
};

const STYLE = "Modern graphic novel illustration style, vibrant colors, dynamic composition, professional comic book art, square panel format, no speech bubbles, cinematic lighting";

// Phin's story panels with enhanced prompts
const PANELS = [
    {
        order: 1,
        filename: "phin_panel_1.jpg",
        description: "Phin is grounded. No school on time = No internet.",
        prompt: `${STYLE}. Scene: ${CHARACTERS.phin} sitting in his bedroom looking frustrated and bored, staring at a disconnected WiFi router on his desk. Modern teenage bedroom with gaming posters on walls, dark screens everywhere. Moody lighting showing his disappointment. Comic panel composition.`
    },
    {
        order: 2,
        filename: "phin_panel_2_grounded.jpg",
        description: "Study door shut tight. Professor inserting Wi-Fi router into a safe.",
        prompt: `${STYLE}. Scene: ${CHARACTERS.professor} placing a WiFi router into a heavy safe in his study. Door has sign reading "HOT SAUCE R&D — DO NOT ENTER." ${CHARACTERS.phin} watches through doorway, looking betrayed and angry. Study filled with hot sauce research notes and pepper specimens. Dramatic lighting emphasizing the conflict.`
    },
    {
        order: 3,
        filename: "phin_panel_3_garden.jpg",
        description: "Backyard pepper patch. Plants small, wilted, pathetic.",
        prompt: `${STYLE}. Scene: Backyard garden view with ${CHARACTERS.professor} kneeling beside small, wilted pepper plants, holding a soil test kit and frowning at results. ${CHARACTERS.phin} visible through kitchen window in background, observing. Sad, struggling garden with dying plants. Daylight, disappointed mood.`
    },
    {
        order: 4,
        filename: "phin_panel_4_research.jpg",
        description: "Phin sneaking into yard at night with flashlight & DIY thermal monocle.",
        prompt: `${STYLE}. Scene: Night time backyard. ${CHARACTERS.phin} sneaking outside with flashlight and DIY thermal goggles made from duct tape and electronics. ${CHARACTERS.cats} sitting on fence watching with alien awareness. Mysterious atmosphere, blue moonlight, shadows. Comic noir lighting.`
    },
    {
        order: 5,
        filename: "phin_panel_5_accident.jpg",
        description: "Cats casually peeing at base of pepper stems. Soil glows faint neon.",
        prompt: `${STYLE}. Scene: Close-up of ${CHARACTERS.cats} urinating at base of pepper plant stems. The soil begins to glow with faint neon green bioluminescent light and steam rises. ${CHARACTERS.phin} in background, frozen mid-step with shocked expression of realization. Night scene, eerie sci-fi lighting, moment of discovery.`
    },
    {
        order: 6,
        filename: "phin_panel_6_choir.jpg",
        description: "Backyard training setup. Phin with whistle, whiteboard diagrams, cat treats.",
        prompt: `${STYLE}. Scene: Backyard training area. ${CHARACTERS.phin} standing with whistle and clipboard, whiteboard with scientific diagrams behind him. ${CHARACTERS.cats} arranged in formation like soldiers or lab subjects, sitting at attention with eerie compliance. Cat treats and training equipment visible. Daylight, organized chaos, slightly unsettling perfect order from cats.`
    },
    {
        order: 7,
        filename: "phin_panel_7_harvest.jpg",
        description: "Rows of oversized glowing peppers. Professor drop-to-knees, overwhelmed.",
        prompt: `${STYLE}. Scene: Garden rows filled with oversized, vibrant red peppers with faint bio-luminescent glowing veins. ${CHARACTERS.professor} dropped to his knees, overwhelmed with emotion and joy. One of ${CHARACTERS.cats} sits beside him like a silent witness. Golden hour lighting, miracle harvest atmosphere, beautiful and slightly ominous.`
    },
    {
        order: 8,
        filename: "phin_panel_8_empire.jpg",
        description: "Magazine cover: THE SAUCE KING! Factory line bottling glowing sauce.",
        prompt: `${STYLE}. Scene: Split composition - foreground shows magazine cover "THE SAUCE KING!" with factory production line bottling glowing hot sauce, news drones hovering. ${CHARACTERS.phin} standing in shadows behind the success photos, unrecognized. Modern industrial setting, media frenzy atmosphere, bright corporate lighting contrasting with Phin in shadows.`
    },
    {
        order: 9,
        filename: "phin_panel_9_strike.jpg",
        description: "Garden guarded by cats with tiny picket signs. NO BYTES = NO BITES.",
        prompt: `${STYLE}. Scene: ${CHARACTERS.cats} holding tiny union-style picket signs in front of dying pepper garden. ${CHARACTERS.phin} standing defiantly with banner reading "NO BYTES = NO BITES". Peppers visibly drying and turning grey behind them. Confrontational atmosphere, organized protest, darkly comedic tone. Overcast lighting.`
    },
    {
        order: 10,
        filename: "phin_panel_10_treaty.jpg",
        description: "Professor kneels offering golden router. Phin's glowing cyberpunk bedroom.",
        prompt: `${STYLE}. Scene: ${CHARACTERS.phin}'s bedroom transformed into cyberpunk control center with multiple glowing screens showing code rain, LED strips, dark atmospheric lighting. ${CHARACTERS.professor} kneeling, offering a golden WiFi router and signed contract that reads "Unlimited Internet + Partnership Rights." ${CHARACTERS.cats} perched around the room like advisors. Neon lighting, power shift atmosphere, triumphant cyberpunk aesthetic.`
    }
];

async function generateImage(panel: typeof PANELS[0], outputPath: string) {
    console.log(`\n🎨 Generating Panel ${panel.order}: ${panel.filename}`);
    console.log(`📝 Description: ${panel.description}`);
    console.log(`\n⏳ Calling DALL-E 3...`);

    try {
        const response = await openai.images.generate({
            model: "dall-e-3",
            prompt: panel.prompt,
            n: 1,
            size: "1024x1024",
            quality: "hd",
        });

        if (response.data[0].url) {
            const imageUrl = response.data[0].url;
            await downloadImage(imageUrl, outputPath);
            console.log(`✅ Image saved to ${outputPath}`);
            console.log(`💰 Cost: ~$0.08 (HD quality)`);
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
                    // Convert PNG to optimized JPG
                    await sharp(tempPath)
                        .jpeg({ quality: 90, mozjpeg: true })
                        .toFile(outputPath);
                    
                    // Clean up temp file
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

async function run() {
    // Get panel number from command line argument, default to 1
    const panelNumber = process.argv[2] ? parseInt(process.argv[2]) : 1;
    
    const panel = PANELS.find(p => p.order === panelNumber);
    
    if (!panel) {
        console.error(`❌ Invalid panel number: ${panelNumber}`);
        console.log(`\nAvailable panels: 1-${PANELS.length}`);
        console.log(`\nUsage: npx tsx scripts/generate-phin-panel.ts [panel-number]`);
        console.log(`Example: npx tsx scripts/generate-phin-panel.ts 1`);
        process.exit(1);
    }

    const publicDir = path.join(process.cwd(), "public");
    const outputPath = path.join(publicDir, panel.filename);

    console.log(`\n🎬 Phin's Story - Panel Generation`);
    console.log(`================================`);
    
    await generateImage(panel, outputPath);
    
    console.log(`\n✨ Done! Check: /public/${panel.filename}`);
    console.log(`\n💡 To generate next panel: npx tsx scripts/generate-phin-panel.ts ${panelNumber + 1}`);
}

run();
