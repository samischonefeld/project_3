const express = require('express');
const authRouter = express.Router();
const passport = require('../services/auth/local');
const authHelpers = require('../services/auth/auth-helpers');
const usersController = require('../controller/users-controllers');

authRouter.post('/login', authHelpers.loginRedirect, (req, res) => {
 console.log('this is inside post..res.locals', res.locals)
  res.json(res.locals)
});

authRouter.get('/login', authHelpers.loginRedirect, (req, res) => {
  console.log('this is inside get..res.locals', res.locals)
  res.json(res.locals)
});

authRouter.post('/register', usersController.create);

authRouter.post('/', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/auth/login',
    failureFlash: true,
  })
);

authRouter.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = authRouter;
