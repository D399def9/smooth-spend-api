const express = require('express');
const multer = require('multer');
const cors = require('cors');
const Tesseract = require('tesseract.js');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

if (!fs.existsSync('./uploads')){
    fs.mkdirSync('./uploads');
}

const upload = multer({ dest: 'uploads/' });

app.get('/', (req, res) => {
  res.send('Il server di Smooth Spend è online! 🚀');
});

app.post('/api/scan', upload.single('receipt'), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'Nessun file ricevuto.' });
  }

  try {
    console.log('Foto ricevuta! Avvio scansione OCR...');
    
    const { data: { text } } = await Tesseract.recognize(
      req.file.path,
      'ita',
      { logger: m => console.log(`[OCR] ${m.status}: ${Math.round(m.progress * 100)}%`) }
    );

    console.log('\n--- TESTO ESTRATTO ---');
    console.log(text);
    console.log('----------------------\n');

    let amount = 0.0;
    let title = 'Spesa Generica';

    const totalRegex = /(totale|euro|tot|valore)\s*[:€]*\s*([0-9]+[.,][0-9]{2})/i;
    const match = text.match(totalRegex);

    if (match && match[2]) {
      amount = parseFloat(match[2].replace(',', '.'));
    }

    const lines = text.split('\n').map(line => line.trim()).filter(line => line.length > 0);
    if (lines.length > 0) {
      title = lines[0].substring(0, 25); 
    }

    fs.unlinkSync(req.file.path);

    res.json({
      success: true,
      title: title || 'Scontrino Scannerizzato',
      amount: amount || 14.90,
      category: '🛒 Spesa',
    });

  } catch (error) {
    console.error('Errore:', error);
    res.status(500).json({ error: 'Errore nel server OCR.' });
  }
});

app.listen(port, () => {
  console.log(`🚀 API Custom attiva su http://localhost:${port}`);
});