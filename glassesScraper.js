const fs = require("fs");
const client = require("https");
const libmoji = require("libmoji");

const availableTraits = libmoji.getTraits("female", "cm");
const glassesOptions = availableTraits[7].options;

function downloadImage(url, filepath) {
  client.get(url, (res) => {
    res.pipe(fs.createWriteStream(filepath));
  });
}

for (let glasses of glassesOptions) {
  const glassesValue = glasses.value;

  downloadImage(
    `https://preview.bitmoji.com/avatar-builder-v3/preview/head?scale=4&gender=2&style=5&eye=-1&brow=-1&ear=-1&mouth=-1&nose=-1&jaw=1392&hair=2290&face_proportion=10&glasses=${glassesValue}`,
    `assets/glasses/webp/glasses-${glassesValue}.webp` // or .png
  );
}
