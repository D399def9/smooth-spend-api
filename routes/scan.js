const express = require("express");
const multer = require("multer");

const readReceipt = require("../services/ocr");
const parseReceipt = require("../utils/parser");

const router = express.Router();

const upload = multer({
    dest: "uploads/"
});

router.post("/scan", upload.single("receipt"), async (req, res) => {
    if (!req.file) {
        return res.status(400).json({
            error: "No image uploaded."
        });
    }

    try {
        const text = await readReceipt(req.file.path);

        const receipt = parseReceipt(text);

        res.json({
            success: true,
            ...receipt
        });

    } catch (error) {
        console.error(error);

        res.status(500).json({
            error: "Failed to process receipt."
        });
    }
});

module.exports = router;