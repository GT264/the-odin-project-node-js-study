const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

const filePath = __dirname;

app.get('/', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream(path.resolve(filePath, 'pages/index.html')).pipe(res);
});

app.get('/about', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream(path.resolve(filePath, 'pages/about.html')).pipe(res);
});

app.get('/contact-me', (req, res) => {
    res.setHeader('Content-Type', 'text/html');
    fs.createReadStream(path.resolve(filePath, 'pages/contact-me.html')).pipe(res);
});

// Fallback
app.use((req, res) => {
    res.status(404).send('Not found');
});

app.listen(PORT, () => {});
