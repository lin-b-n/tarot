const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
  fs.readFile('C:/Users/90671/Documents/Codex/2026-08-28/new-chat/outputs/tarot/tarot-website.html', (err, data) => {
    if (err) { res.end('Error'); return; }
    res.end(data);
  });
});
server.listen(8085, () => console.log('Server on 8085'));
