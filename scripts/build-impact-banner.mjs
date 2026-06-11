import sharp from 'sharp';

const src =
  'C:/Users/auric/.cursor/projects/c-Users-auric-OneDrive-Documents-MagnifiedSystemsWebsite/assets/c__Users_auric_AppData_Roaming_Cursor_User_workspaceStorage_fcd8d954be03be17e258a41769423900_images_image-b330b0a6-5220-43ba-9388-6ac05fe627d7.png';
const out = 'public/images/impact-sensor-helmet.png';

const W = 1920;
const H = 720;
const helmetW = Math.round(W * 0.58);

const gradientSvg = `<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0a4d6e"/>
      <stop offset="22%" stop-color="#0d5f7a"/>
      <stop offset="40%" stop-color="#0f6b78"/>
      <stop offset="55%" stop-color="#0b4a5c"/>
      <stop offset="68%" stop-color="#061018"/>
      <stop offset="100%" stop-color="#000000"/>
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#g)"/>
</svg>`;

const bg = await sharp(Buffer.from(gradientSvg)).png().toBuffer();

const helmetRaw = await sharp(src)
  .resize({ width: helmetW, height: H, fit: 'contain', position: 'right' })
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { data, info } = helmetRaw;
const fadePx = Math.round(info.width * 0.22);

for (let y = 0; y < info.height; y += 1) {
  for (let x = 0; x < fadePx; x += 1) {
    const i = (y * info.width + x) * 4;
    const fade = x / fadePx;
    data[i + 3] = Math.round(data[i + 3] * fade);
  }
}

const helmet = await sharp(data, {
  raw: { width: info.width, height: info.height, channels: 4 },
})
  .png()
  .toBuffer();

await sharp(bg)
  .composite([{ input: helmet, left: W - helmetW, top: 0 }])
  .png()
  .toFile(out);

const meta = await sharp(out).metadata();
console.log('written', meta.width, meta.height);
