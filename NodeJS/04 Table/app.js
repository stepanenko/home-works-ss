const express = require('express');
const path = require('path');
const helmet = require('helmet');
const compression = require('compression');

const app = express();

const actors = [
  {
    id: 1,
    name: "Tom",
    age : 52
  },
  {
    id: 2,
    name: "Jackie",
    age: 60
  },
  {
    id: 3,
    name: "Jessica",
    age: 41
  },
  {
    id: 4,
    name: "Alicia",
    age: 30
  }
];

app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/api/actors', (req, res) => {
  res.render('actors', {
    actors: actors
  });
});

app.get('/api/actors/:id', (req, res) => {
  const actor = actors.filter((val) => val.id == req.params.id);
  res.render('actors', {
    actors: actor
  });
});

app.post('/api/actors', (req, res) => {
  const actor = {
    id: actors.length + 1,
    name: req.body.name,
    age: req.body.age
  };
  actors.push(actor);
  res.redirect('/api/actors');
});

app.post('/api/actors/edit', (req, res) => {
  const index = actors.findIndex(val => val.id == req.body.id);
  actors[index].name = req.body.name;
  actors[index].age = req.body.age;
  res.redirect('/api/actors');
});

app.post('/api/actors/delete', (req, res) => {
  const index = actors.findIndex(val => val.id == req.body.id);
  if (index > -1) {
    actors.splice(index, 1);
  } else res.send(`An actor with id ${req.body.id} was not found`);
  res.redirect('/api/actors');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/', (req, res) => {
  res.redirect('/api/actors');
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log('Listening...'));