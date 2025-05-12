import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
    const oldPath = path.join(__dirname, 'files', 'wrongFilename.txt');
    const newPath = path.join(__dirname, 'files', 'properFilename.md');
    try {
        if (!fs.existsSync(oldPath) || fs.existsSync(newPath)) {
            throw new Error('FS operation failed');
        }
        fs.renameSync(oldPath, newPath);
    } catch {
        throw new Error('FS operation failed');
    }
};

await rename();