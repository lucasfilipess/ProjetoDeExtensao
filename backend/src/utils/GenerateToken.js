const jwt = require('jsonwebtoken');
const authConfig = require('../config/authConfig');

module.exports = (params) => {
  return jwt.sign(params, authConfig.secret, {
    expiresIn: '30d',
  });
};
