const express = require('express');
const abrigoController = require('./controllers/abrigoController');
const petController = require('./controllers/petController');
const profileController = require('./controllers/profileController');
const sessionController = require('./controllers/sessionController');


const routes = express.Router();


routes.get('/profile', profileController.index);

routes.post('/session', sessionController.create);

routes.get('/abrigos', abrigoController.index);
routes.post('/abrigos', abrigoController.create);

routes.get('/pets', petController.index);
routes.post('/pets', petController.create);
routes.put('/pets/:id', petController.update);
routes.delete('/pets/:id', petController.delete);

module.exports = routes;