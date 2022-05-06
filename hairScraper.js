const fs = require("fs");
const client = require("https");
const libmoji = require("libmoji");

const availableTraits = libmoji.getTraits("female", "cm");
const hairOptions = availableTraits[8].options;

function downloadImage(url, filepath) {
  client.get(url, (res) => {
    res.pipe(fs.createWriteStream(filepath));
  });
}

for (let hair of hairOptions) {
  const hairValue = hair.value;

  downloadImage(
    `https://preview.bitmoji.com/avatar-builder-v3/preview/head?scale=4&gender=2&style=5&eye=-1&brow=-1&ear=-1&mouth=-1&nose=-1&jaw=1392&face_proportion=10&hair=${hairValue}`,
    `assets/hair/png/hair-${hairValue}.png` // or .png
  );
}
