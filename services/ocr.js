const Tesseract = require("tesseract.js");
const fs = requre("fs");

module.exports = async function readReceipt(imagePath) {
    
    const result = await Tesseract.recognize(
        imagePath,
        "ita"
    );
    fs.unlinksysnc(imagePath);

    return result.data.text;
};
