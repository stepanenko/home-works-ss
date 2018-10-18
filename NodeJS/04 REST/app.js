const express = require('express');
const methodOverride = require('method-override');
const helmet = require('helmet');
const compression = require('compression');

const app = express();

const cars = [
  {
    id: 1,
    make: "Renault",
    model: "Megane",
    year: 2011
  },
  {
    id: 2,
    make: "Nissan",
    model: "Quashqai",
    year: 2015
  },
  {
    id: 3,
    make: "Audi",
    model: "Q7",
    year: 2018
  },
  {
    id: 4,
    make: "BMW",
    model: "307",
    year: 2013
  },
  {
    id: 5,
    make: "Opel",
    model: "Astra",
    year: 2017
  }
];

app.use(helmet());
app.use(compression());
app.use(methodOverride('X-HTTP-Method-Override'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send({
    "GET /api/cars" : "displaying all cars",
    "GET /api/cars/:id": "display single car by id",
    "POST /api/cars": "adding a car",
    "PUT /api/cars/:id": "editing a car",
    "DELETE /api/cars/:id": "deleting a car by id"
  })
});

app.get('/api/cars', (req,res) => {
  res.send(cars);
});

app.get('/api/cars/:id', (req, res) => {
  const index = cars.findIndex(car => car.id == req.params.id);
  if (index > -1) {
    res.send(cars[index]);
  } else res.send(`Car with id ${req.params.id} was not found`);
});

app.post('/api/cars', (req, res) => {
  const car = {
    id: cars.length + 1,
    make: req.body.make,
    model: req.body.model,
    year: req.body.year
  }
  cars.push(car);
  res.send(car);
});

app.put('/api/cars/:id', (req, res) => {
  const index = cars.findIndex(car => car.id == req.params.id);
  if (index > -1) {
    cars[index].make = req.body.make;
    cars[index].model = req.body.model;
    cars[index].year = req.body.year;
    res.send(cars[index]);
  } else res.send(`Car with id ${req.params.id} was not found`);
});

app.delete('/api/cars/:id', (req, res) => {
  const index = cars.findIndex(car => car.id == req.params.id);
  const deleted = cars.splice(index, 1);
  res.send(deleted);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));