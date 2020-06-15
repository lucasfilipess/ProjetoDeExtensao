const { Joi } = require('celebrate');

module.exports = {
  login: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(1),
  }),
};
