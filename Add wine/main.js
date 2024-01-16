$( function() {
    $( "#datepicker" ).datepicker({
        dateFormat: "dd-mm-yy"
        ,	duration: "fast"
    });
} );

const express = require('express');
const router = express.Router();
const Wine = require('../models/wine');

router.post('/', (req, res) => {
  const wine = new Wine({
    name: req.body.name,
    year: req.body.year,
    grape: req.body.grape
  });

  wine.save((err) => {
    if (err) return console.error(err);
    res.redirect('/list-wines');
  });
});

module.exports = router;