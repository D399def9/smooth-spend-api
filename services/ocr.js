const Tesseract = require("tesseract.js");
const fs = require("fs");

async function readReceipt(imagePath) {
    const result = await Tesseract.recognize(
        imagePath,
        "ita"
    );

    fs.unlinkSync(imagePath);

    return result.data.text;
}

module.exports = readReceipt;