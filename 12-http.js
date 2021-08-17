const http = require('http');

const server = http.createServer((req,res)=>{

  switch (req.url) {
    case '/':
      res.write('welcome to home');
      break;
    case '/about':
      res.write('welcome to about');
      break;
    default:
    res.write(`
      <p>404</p>
      <a href="/">Home</a>
    `);
    break;
  }

  res.end();

});

server.listen(5000);
