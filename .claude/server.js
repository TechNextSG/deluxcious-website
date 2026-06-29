const http = require('http'), fs = require('fs'), path = require('path');
const root = 'C:\\Users\\Rico\\deluxcious-website';
const types = { '.html':'text/html', '.css':'text/css', '.js':'text/javascript', '.svg':'image/svg+xml', '.png':'image/png', '.jpg':'image/jpeg', '.jpeg':'image/jpeg', '.webp':'image/webp', '.mp4':'video/mp4', '.ico':'image/x-icon' };
http.createServer((req, res) => {
  let u = decodeURIComponent(req.url.split('?')[0]);
  if (u === '/' || u === '') u = '/index.html';
  let f = path.join(root, u);
  fs.readFile(f, (e, d) => {
    if (e) { res.writeHead(404, {'content-type':'text/plain'}); res.end('404 ' + u); return; }
    res.writeHead(200, {'content-type': types[path.extname(f).toLowerCase()] || 'application/octet-stream'});
    res.end(d);
  });
}).listen(4321, () => console.log('Deluxcious static server on http://localhost:4321'));
