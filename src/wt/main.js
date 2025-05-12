import { Worker } from 'worker_threads';
import os from 'os';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const performCalculations = async () => {
    const numCPUs = os.cpus().length;
    const results = [];
    const workers = [];
    const workerPath = path.join(__dirname, 'worker.js');

    for (let i = 0; i < numCPUs; i++) {
        workers.push(
            new Promise((resolve) => {
                const worker = new Worker(workerPath, { type: 'module' });
                worker.on('message', (msg) => resolve(msg));
                worker.on('error', () => resolve({ status: 'error', data: null }));
                worker.on('exit', (code) => {
                    if (code !== 0) resolve({ status: 'error', data: null });
                });
                worker.postMessage(10 + i);
            })
        );
    }

    const res = await Promise.all(workers);
    console.log(res);
};

await performCalculations();