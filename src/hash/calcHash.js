import { createHash } from 'crypto';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
    const filePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt');
    const fileBuffer = fs.readFileSync(filePath);
    const hash = createHash('sha256').update(fileBuffer).digest('hex');
    console.log(hash);
};

await calculateHash();