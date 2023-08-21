const express = require('express');
const mongoose = require('mongoose');

const routesUser =  require('./routes/user');
const routesSauce = require('./routes/sauce');

const path = require('path');

const app = express();

mongoose.connect('mongodb+srv://piiquante_p6:NaCUmddEsnidMdfm@cluster0.7un7cge.mongodb.net/',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use('/api/sauces', routesSauce);
app.use('/api/auth', routesUser);
app.use('/images', express.static(path.join(__dirname, 'images')));

module.exports = app;