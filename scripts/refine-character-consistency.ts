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

// Helper to convert local image to base64 for vision/reference if needed
// Note: DALL-E 3 doesn't support direct image-to-image/reference yet, 
// so we use highly descriptive prompts based on the visual features of the reference images.

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
                    if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
                    resolve();
                } catch (err) {
                    if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
                    reject(err);
                }
            });
            file.on('error', (err) => {
                if (fs.existsSync(tempPath)) fs.unlink(tempPath, () => { });
                reject(err);
            });
        }).on('error', (err) => {
            reject(err);
        });
    });
}

async function generateImage(prompt: string, outputPath: string) {
    console.log(`🎨 Refining Character Consistency for: "${outputPath.split('/').pop()}"`);
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
            console.log(`✅ Character-consistent image saved to ${outputPath}`);
        }
    } catch (error) {
        console.error("❌ Consistency Error:", error);
    }
}

// DEFINING CHARACTER CONSTANTS BASED ON REFERENCE IMAGES
const PHIN_DESC = "a 15-year-old boy with messy, voluminous curly brown hair, wearing a dark brown zip-up hoodie, with a neutral, slightly bored expression and large expressive eyes.";
const PAUL_DESC = "a middle-aged bald man with a short groomed beard, wearing thick black-rimmed glasses and a black turtleneck sweater.";
const STYLE_DESC = "Modern high-quality comic book illustration style, clean line art, vibrant cinematic lighting, saturated colors, no text or word bubbles, square format.";

const panels = [
    {
        name: "phin_panel_2.jpg",
        prompt: `${STYLE_DESC} Night scene. Phin (${PHIN_DESC}) is crouched in the shadows of a backyard. He is wearing a high-tech glowing thermal-imaging monocle on one eye and blowing a small silver whistle. A group of neighborhood cats are staring at a patch of jalapenos. Consistent character design.`
    },
    {
        name: "phin_panel_3.jpg",
        prompt: `${STYLE_DESC} Garden scene. Massive glowing red peppers grow from oversized plants. Paul (${PAUL_DESC}) stands in the center looking at a pepper with tears of joy. A black cat with a green bowtie sits on a branch nearby. Magical warm glow lighting.`
    },
    {
        name: "phin_panel_4.jpg",
        prompt: `${STYLE_DESC} Split-screen montage. Left: A magazine cover for 'Spice Weekly' featuring Paul (${PAUL_DESC}) looking triumphant. Right: A warehouse filled with boxes. In the foreground, Phin (${PHIN_DESC}) looks annoyed, holding a tablet displaying a 'No WiFi' error.`
    },
    {
        name: "phin_panel_5.jpg",
        prompt: `${STYLE_DESC} Garden strike. Phin (${PHIN_DESC}) stands with arms crossed, holding a cardboard sign that says 'NO BYTES, NO BITES'. A dozen cats sit on a fence, refusing to work. Jalapeno plants are grey and withering.`
    },
    {
        name: "phin_panel_6.jpg",
        prompt: `${STYLE_DESC} Corporate panic. Paul (${PAUL_DESC}) is in a wood-paneled office, sweating and horrified while looking at a crashing stock chart. A ransom note made of cut-out magazine letters on the desk says 'RESTORE FIBER OPTICS OR THE SAUCE DIES'.`
    },
    {
        name: "phin_panel_7.jpg",
        prompt: `${STYLE_DESC} The Surrender. Paul (${PAUL_DESC}) is on his knees in a bedroom holding up a golden WiFi router. Phin (${PHIN_DESC}) sits in a massive, high-tech RGB gaming chair with multiple monitors, looking like a cool mastermind villain.`
    },
    {
        name: "phin_panel_8.jpg",
        prompt: `${STYLE_DESC} New Status Quo. Phin (${PHIN_DESC}) is intensely focused on multiple coding monitors. A black cat with a green bowtie sits on his shoulder. In the distant background through a door, Paul (${PAUL_DESC}) is happily packing sauce bottles.`
    }
];

async function run() {
    const publicDir = path.join(process.cwd(), "public");
    for (const panel of panels) {
        const outputPath = path.join(publicDir, panel.name);
        await generateImage(panel.prompt, outputPath);
    }
}

run();
