import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';
import ffmpegPath from 'ffmpeg-static';

const publicDir = 'public';

const run = (args) =>
  new Promise((resolve, reject) => {
    const proc = spawn(ffmpegPath, args, { stdio: ['ignore', 'pipe', 'pipe'] });
    let stderr = '';
    proc.stderr.on('data', (chunk) => {
      stderr += chunk.toString();
    });
    proc.on('close', (code) => {
      if (code === 0) resolve(stderr);
      else reject(new Error(stderr || `ffmpeg exited with code ${code}`));
    });
  });

for (let i = 1; i <= 4; i += 1) {
  const input = path.join(publicDir, `Video${i}.mov`);
  const output = path.join(publicDir, `Video${i}.mp4`);

  if (!fs.existsSync(input)) {
    console.log(`skip ${input} (missing)`);
    continue;
  }

  console.log(`converting ${input} -> ${output}`);
  await run([
    '-y',
    '-i',
    input,
    '-c:v',
    'libx264',
    '-preset',
    'medium',
    '-crf',
    '28',
    '-vf',
    'scale=1280:-2',
    '-c:a',
    'aac',
    '-b:a',
    '128k',
    '-movflags',
    '+faststart',
    output,
  ]);

  const sizeMb = (fs.statSync(output).size / 1024 / 1024).toFixed(1);
  console.log(`done ${output} (${sizeMb} MB)`);
}
