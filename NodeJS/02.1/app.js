const express = require('express');
const path = require('path');

const app = express();

let json = require('./clients.json');
//console.log(json);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Clients',
    clients: json
  });
});

app.get('/clients/add', (req, res) => {
  res.render('add_client', {
    title: 'Add Client'
  });
});

process.argv.forEach((val, i, arr) => {
  console.log(i + ' : ' + val)
});

app.listen(3000, () => {
  console.log('Server started on port 3000...')
});