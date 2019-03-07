const http = require('http');
const app = require('./app');
const port = process.env.PORT || 3001;
const server = http.createServer();

server.on('request', app);

server.listen(port, () => {
  console.log(`start port ${port}`);
});
  