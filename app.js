const http = require('http');
const port = 5000;

const server = http.createServer((req,res)=>{
  if(req.url === '/') {
    res.end('home');
  } else if(req.url === '/about') {
    res.end('about');
  } else {
    res.end('404');
  }
})

server.listen(port,()=>{
  console.log(`server is listening port ${port}`);
})
