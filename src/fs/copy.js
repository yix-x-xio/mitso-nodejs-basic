import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
    const sourceDir = path.join(__dirname, 'files');
    const destDir = path.join(__dirname, 'files_copy');

    try {
        if (!fs.existsSync(sourceDir)) {
            throw new Error('FS operation failed');
        }

        if (fs.existsSync(destDir)) {
            throw new Error('FS operation failed');
        }

        fs.mkdirSync(destDir);

        const files = fs.readdirSync(sourceDir);
        for (const file of files) {
            const srcFile = path.join(sourceDir, file);
            const destFile = path.join(destDir, file);
            fs.copyFileSync(srcFile, destFile);
        }
    } catch (error) {
        console.error(error.message);
    }
};

await copy();