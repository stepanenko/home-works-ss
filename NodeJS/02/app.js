const http = require('http');
const fs = require('fs');
const pug = require('pug');

const compiledFunction = pug.compileFile('template.pug');

console.log(compiledFunction({
  name: 'Timothy'
}));

const server = http.createServer();

server.on('request', (req, res) => {
  if (req.url === '/' || req.url === '/home') {
    //fs.createReadStream('./views/home.html').pipe(res); // works well
    fs.readFile('./views/home.html', (err, data) => {
      // console.log(data.toString()) // showing html file content
      res.end(data);
  })} 
  else if (req.url === '/clients') {
    fs.readFile('./clients.json', (err, data) => {
      res.end(data)
    })
  } 
  else if (req.url === '/api/users') {
    const users =[{ id: 1, name: 'Peter'}, { id: 2, name: "Clara"}];
    res.writeHead(200, {'Content-type': 'application/json'});
    res.end(JSON.stringify(users));
  }
  else if (req.url === '/about') {
    fs.readFile('./views/about.pug', (err, data) => {
      res.end();
    })
  }
  else res.end('404');

});

server.listen(3000, () => console.log('Listening...'));
