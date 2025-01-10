import http from 'http'; // Modern ESM imports
import fs from 'fs'; // Older way is to write => const fs = require("fs")

const getHTML = (filepath, res) => {
  // Reading filepath from server
  fs.readFile(filepath, 'utf-8', (err, data) => {
    if (err) {
      console.error(err);
      res.statusCode = 500;
      res.end('Error reading the file');
      return;
    }
    // File reading succesful sending it back to client
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(data);
  });
};

const server = http.createServer((req, res) => {
  // Homepage
  if (req.url === '/') {
    getHTML('./index.html', res);
  } else if (req.url === '/about') {
    getHTML('./about.html', res);
  } else if (req.url === '/contact-me') {
    getHTML('./contact-me.html', res);
  } else {
    getHTML('./404.html', res); // All other routes leading 404
  }
});

// Default port 5000 if no env.PORT
const PORT = process.env.PORT || 5000;

// Summon server on port 5000
server.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
