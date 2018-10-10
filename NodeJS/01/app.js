const http = require('http');
const fs = require('fs');

const server = http.createServer();

server.on('request', (req, res) => {
  switch (req.url) {
    case '/' : {
      //fs.createReadStream('./views/home.html', res).pipe(res); // works well
      fs.readFile('./views/home.html', (err, data) => {
        // console.log(data.toString()) // showing html file content
        res.end(data);
      });
      break;
    }
  }
});

server.listen(3000, () => console.log('Listening...'));
