const http = require('http');
const port = 3000;

const envVar = process.env;

console.log(`interval: ${envVar.INTERVAL}`, `timeout: ${envVar.TIMEOUT}`);

const requestHandler = (req, res) => {
  let date;

  console.log(req.method, req.url);

  const int = setInterval(() => {
    date = new Date().toISOString();
    console.log(date);
  }, envVar.INTERVAL);

  setTimeout(() => {
    res.end(date);
    clearInterval(int);
  }, envVar.TIMEOUT);
};

const server = http.createServer(requestHandler);

server.listen(port, err => {
  if (err) {
    return console.log('something bad happened', err);
  }
  console.log(`server is listening on ${port}`);
});
