const fs = require('fs');

const fontPath = 'micrenc.ttf';
const fontBuffer = fs.readFileSync(fontPath);
const base64Font = fontBuffer.toString('base64');

console.log(base64Font);

