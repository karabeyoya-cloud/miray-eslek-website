import sharp from "sharp";
import { existsSync } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const imagesDir = path.join(__dirname, "..", "public", "images");

/** top/bottom/left/right as fraction of full screenshot height/width */
const crops = {
  "bio-portrait.jpg": {
    source: "bio-portrait-source.png",
    top: 0.155,
    bottom: 0.46,
  },
  "portre-sahne.jpg": {
    source: "WhatsApp Image 2026-07-09 at 02.38.44.jpeg",
    top: 0.155,
    bottom: 0.46,
  },
  "portre-klarnet.jpg": {
    source: "WhatsApp Image 2026-07-09 at 02.38.17 (2).jpeg",
    top: 0.155,
    bottom: 0.44,
  },
  "performans-klarnet.jpg": {
    source: "WhatsApp Image 2026-07-09 at 02.38.18.jpeg",
    top: 0.155,
    bottom: 0.42,
    right: 0.14,
  },
  "hero-sahne.jpg": {
    source: "WhatsApp Image 2026-07-09 at 02.38.18.jpeg",
    top: 0.155,
    bottom: 0.42,
    right: 0.14,
  },
  "atolye-kekik.jpg": {
    source: "WhatsApp Image 2026-07-09 at 02.38.18 (2).jpeg",
    top: 0.155,
    bottom: 0.44,
  },
  "afife-odul.jpg": {
    source: "WhatsApp Image 2026-07-09 at 02.38.20 (3).jpeg",
    top: 0.155,
    bottom: 0.44,
  },
  "afife-ekip.jpg": {
    source: "WhatsApp Image 2026-07-09 at 02.38.20 (4).jpeg",
    top: 0.155,
    bottom: 0.44,
  },
  "cerkes-ridvan-ekip.jpg": {
    source: "WhatsApp Image 2026-07-09 at 02.38.19 (5).jpeg",
    top: 0.155,
    bottom: 0.48,
  },
  "camur-performans.jpg": {
    source: "WhatsApp Image 2026-07-09 at 02.38.21.jpeg",
    top: 0.155,
    bottom: 0.44,
  },
  "camur-grup.jpg": {
    source: "WhatsApp Image 2026-07-09 at 02.38.19 (2).jpeg",
    top: 0.155,
    bottom: 0.48,
  },
  "ayakustu-konser.jpg": {
    source: "WhatsApp Image 2026-07-09 at 02.38.43.jpeg",
    top: 0.155,
    bottom: 0.46,
  },
  "mang-jam.jpg": {
    source: "WhatsApp Image 2026-07-09 at 02.38.42.jpeg",
    top: 0.19,
    bottom: 0.54,
  },
  "tico-muzegazhane.jpg": {
    source: "WhatsApp Image 2026-07-09 at 02.38.42 (4).jpeg",
    top: 0.24,
    bottom: 0.36,
  },
  "festival-kekeca.jpg": {
    source: "WhatsApp Image 2026-07-09 at 02.38.42 (1).jpeg",
    top: 0.155,
    bottom: 0.44,
  },
  "cem-mazlum.jpg": {
    source: "WhatsApp Image 2026-07-09 at 02.38.43 (1).jpeg",
    top: 0.155,
    bottom: 0.42,
  },
  "this-fire.jpg": {
    source: "WhatsApp Image 2026-07-09 at 02.38.45 (1).jpeg",
    top: 0.155,
    bottom: 0.44,
  },
  "soundpainting-kou.jpg": {
    source: "WhatsApp Image 2026-07-09 at 02.38.20.jpeg",
    top: 0.155,
    bottom: 0.46,
  },
  "sinirsiz-sesler.jpg": {
    source: "WhatsApp Image 2026-07-09 at 02.38.20 (1).jpeg",
    top: 0.155,
    bottom: 0.5,
  },
  "soundpainting-isaretler.jpg": {
    source: "WhatsApp Image 2026-07-09 at 02.38.44 (2).jpeg",
    top: 0.155,
    bottom: 0.44,
  },
  "bulustur-beyoglu.jpg": {
    source: "WhatsApp Image 2026-07-09 at 02.38.45 (2).jpeg",
    top: 0.155,
    bottom: 0.44,
  },
  "natik-outdoor.jpg": {
    source: "WhatsApp Image 2026-07-09 at 02.38.45.jpeg",
    top: 0.155,
    bottom: 0.44,
  },
  "her-gune-melodi.jpg": {
    source: "WhatsApp Image 2026-07-09 at 02.38.17 (1).jpeg",
    top: 0.17,
    bottom: 0.42,
  },
};

async function cropImage(name, config) {
  const input = path.join(imagesDir, config.source);
  const output = path.join(imagesDir, name);

  if (!existsSync(input)) {
    console.warn(`skip ${name}: missing ${config.source}`);
    return;
  }

  const meta = await sharp(input).metadata();
  const width = meta.width ?? 0;
  const height = meta.height ?? 0;

  const left = Math.round(width * (config.left ?? 0));
  const top = Math.round(height * config.top);
  const cropWidth = Math.round(width * (1 - (config.left ?? 0) - (config.right ?? 0)));
  const cropHeight = Math.round(height * (1 - config.top - config.bottom));

  await sharp(input)
    .extract({ left, top, width: cropWidth, height: cropHeight })
    .jpeg({ quality: 88, mozjpeg: true })
    .toFile(output);

  console.log(`cropped ${name} (${cropWidth}x${cropHeight})`);
}

for (const [name, config] of Object.entries(crops)) {
  await cropImage(name, config);
}

console.log("done");
