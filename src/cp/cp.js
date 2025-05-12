import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const spawnChildProcess = async (args) => {
    const scriptPath = path.join(__dirname, 'files', 'script.js');
    const child = spawn('node', [scriptPath, ...args], {
        stdio: ['pipe', 'pipe', 'inherit']
    });

    // pipe main process stdin to child stdin
    process.stdin.pipe(child.stdin);
    // pipe child stdout to main process stdout
    child.stdout.pipe(process.stdout);
};

// Пример вызова для теста (можно изменить аргументы)
spawnChildProcess(['arg1', 'arg2']);