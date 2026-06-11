import fs from 'fs';
import path from 'path';

const dir = 'public';
for (let i = 1; i <= 4; i += 1) {
  const file = path.join(dir, `Video${i}.mov`);
  const buf = fs.readFileSync(file);
  const brand = buf.slice(8, 12).toString('ascii');
  const text = buf.toString('latin1');
  const codecs = [...new Set(text.match(/(avc1|hvc1|hev1|mp4v|apcn|apch|apcs|h264)/gi) || [])];
  console.log(`${file}: brand=${brand}, hints=${codecs.join(',') || 'unknown'}, sizeMB=${(buf.length / 1024 / 1024).toFixed(1)}`);
}
