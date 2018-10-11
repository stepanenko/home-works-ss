const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

app.use(express.json());

let json = require('./clients.json');
let clients = JSON.parse(JSON.stringify(json)); // works well

console.log(typeof clients); // OBJECT

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Clients',
    clients: clients
  });
});

app.get('/clients/add', (req, res) => {
  res.render('add_client', {
    title: 'Add Client'
  });
});

app.listen(3000, () => {
  console.log('Server started on port 3000...')
});