import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const inputDir = path.resolve('public/images');
const outputDir = path.resolve('public/images/optimized');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const files = fs.readdirSync(inputDir)
  .filter(f => f.startsWith('ezgif-frame-') && f.endsWith('.png'))
  .sort((a, b) => {
    const numA = parseInt(a.replace('ezgif-frame-', '').replace('.png', ''), 10);
    const numB = parseInt(b.replace('ezgif-frame-', '').replace('.png', ''), 10);
    return numA - numB;
  });

console.log(`Found ${files.length} frames to optimize...`);

async function run() {
  let count = 0;
  for (const file of files) {
    const inputPath = path.join(inputDir, file);
    const baseName = file.replace('.png', '.webp');
    const outputPath = path.join(outputDir, baseName);

    // Resize to 1920 width, maintain aspect ratio, high-quality WebP
    await sharp(inputPath)
      .resize(1920, 1080, { fit: 'cover' })
      .webp({ quality: 85, effort: 4 })
      .toFile(outputPath);

    count++;
    if (count % 10 === 0 || count === files.length) {
      console.log(`Optimized ${count}/${files.length} frames`);
    }
  }
  console.log('Optimization complete!');
}

run().catch(err => {
  console.error(err);
  process.exit(1);
});

