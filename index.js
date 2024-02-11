const express = require('express');
const cors = require('cors');
const multer = require('multer');

const app = express();
const port = 3000;

app.use(cors());

const upload = multer();

app.get('/', (req, res) => {
    res.send('Hello');
});

app.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: 'No files were uploaded.' });
    }
    res.json({ message: 'File uploaded successfully.' });
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
