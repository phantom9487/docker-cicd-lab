const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');

  if (req.url === '/health') {
    res.statusCode = 200;
    res.end(JSON.stringify({ status: 'healthy' }));
    return;
  }

  res.statusCode = 200;
  res.end(JSON.stringify({
    message: 'Hello from Docker & AWS CI/CD Pipeline!',
    version: 'v2.0.0',
    timestamp: new Date().toISOString()
  }));
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
