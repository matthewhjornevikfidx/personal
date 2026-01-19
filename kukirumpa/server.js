const express = require('express');
const compression = require('compression');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 80;

// Enable gzip compression
app.use(compression());

// Cache static assets
app.use(express.static(path.join(__dirname, 'public'), {
  maxAge: '7d',
  etag: true
}));

// Serve index.html for all routes (SPA support)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Kukirumpa running at http://localhost:${PORT}`);
});

