const express = require('express');
const { celebrate } = require('celebrate');
const routes = express.Router();
const auth = require('./middlewares/auth');
const authEmail = require('./middlewares/authEmail');
const { login } = require('./middlewares/schemas');

const SessionController = require('./controllers/SessionController');

routes.post(
  '/login',
  celebrate({
    body: login,
  }),
  SessionController.login
);

module.exports = routes;
