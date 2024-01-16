const express = require('express');
const passport = require('passport');
const router = express.Router();

router.post('/', passport.authenticate('local', {
  successRedirect: '/add-wine',
  failureRedirect: '/login'
}));

module.exports = router;