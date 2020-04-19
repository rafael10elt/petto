const express = require('express');
const routes = express.Router();

module.exports = routes;

routes.get('/', (req, res) => {
    return res.json({
        name: 'rafa',
        idade: 31,
    });
});