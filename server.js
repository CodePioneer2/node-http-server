import 'dotenv/config';
import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const app = express();
const port = process.env.port || 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.static(__dirname)); //include css

app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'index.html'));
});

app.get('/about', (req, res) => {
  res.sendFile(join(__dirname, 'about.html'));
});

app.get('/contact-me', (req, res) => {
  res.sendFile(join(__dirname, 'contact-me.html'));
});

app.get('*', (req, res) => {
  res.sendFile(join(__dirname, '404.html'));
});

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
