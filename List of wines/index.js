const express = require('express');
const router = express.Router();
const Wine = require('../models/wine');

router.get('/', (req, res) => {
  Wine.find({}, (err, wines) => {
    if (err) return console.error(err);
    res.render('list-wines', { wines: wines });
  });
});

module.exports = router;