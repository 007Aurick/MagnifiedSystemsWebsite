import { spawn } from 'child_process';
import ffmpegPath from 'ffmpeg-static';

const file = process.argv[2];
if (!file) {
  console.error('usage: node scripts/probe-video.mjs <path>');
  process.exit(1);
}

const proc = spawn(ffmpegPath, ['-hide_banner', '-i', file], { stdio: ['ignore', 'pipe', 'pipe'] });
let stderr = '';
proc.stderr.on('data', (chunk) => {
  stderr += chunk.toString();
});
proc.on('close', () => {
  console.log(stderr);
});
