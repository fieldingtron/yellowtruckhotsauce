import { GoogleAuth } from 'google-auth-library';
import fs from 'fs';
import path from 'path';

async function refreshToken() {
    try {
        const auth = new GoogleAuth({
            keyFile: './google-cloud.json',
            scopes: [
                'https://www.googleapis.com/auth/cloud-platform',
                'https://www.googleapis.com/auth/generative-language'
            ],
        });

        const client = await auth.getClient();
        const tokenResponse = await client.getAccessToken();
        const token = tokenResponse.token;

        if (!token) {
            throw new Error('Failed to retrieve access token');
        }

        const content = `export const ACCESS_TOKEN = '${token}';\n`;
        fs.writeFileSync('./newtoken.mjs', content);

        console.log('✅ Successfully refreshed token and updated newtoken.mjs');
        // console.log('Token:', token); // Optional: print for manual verification
    } catch (error) {
        console.error('❌ Error refreshing token:', error.message);
        process.exit(1);
    }
}

refreshToken();
