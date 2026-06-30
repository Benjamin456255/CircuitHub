const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;
const PUBLIC = path.join(__dirname, "docs");
const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
};

const cleanRoutes = { "/": "index.html", "/resources": "resources.html", "/community": "community.html", "/projects": "projects.html" };

const server = http.createServer((req, res) => {
  let url = req.url.split("?")[0];
  if (cleanRoutes[url]) url = "/" + cleanRoutes[url];

  const filePath = path.join(PUBLIC, url);
  const ext = path.extname(filePath).toLowerCase();

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
      res.end("<h1>404</h1><p>Page not found</p>");
      return;
    }
    res.writeHead(200, { "Content-Type": MIME[ext] || "application/octet-stream" });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`CircuitHub running at http://localhost:${PORT}`);
});
