import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createGunzip } from 'zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
    const srcPath = path.join(__dirname, 'archive.gz');
    const destPath = path.join(__dirname, 'files', 'fileToCompress.txt');
    const readStream = fs.createReadStream(srcPath);
    const gunzip = createGunzip();
    const writeStream = fs.createWriteStream(destPath);
    readStream.pipe(gunzip).pipe(writeStream);
};

await decompress();