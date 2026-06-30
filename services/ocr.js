const Tesseract = require("tesseract.js");
const fs = require("fs");

module.exports = async function readReceipt(imagePath) {

    const result = await Tesseract.recognize(
        imagePath,
        "ita"
    );

    fs.unlinkSync(imagePath);

    return result.data.text;
};