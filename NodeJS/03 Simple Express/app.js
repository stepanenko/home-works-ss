require('dotenv').config(); // will set env variables from '.env'
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

app.get('/api/posts/:year/:month', (req, res) => {
  res.send(req.params);
});

const port = process.env.PORT || 3000;
console.log('ENV PORT: ', process.env.PORT);

app.listen(port, () => {
  console.log(`Server started on port ${port}...`)
});
