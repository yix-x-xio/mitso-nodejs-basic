import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createGzip } from 'zlib';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = async () => {
    const srcPath = path.join(__dirname, 'files', 'fileToCompress.txt');
    const destPath = path.join(__dirname, 'archive.gz');
    const readStream = fs.createReadStream(srcPath);
    const gzip = createGzip();
    const writeStream = fs.createWriteStream(destPath);
    readStream.pipe(gzip).pipe(writeStream);
};

await compress();