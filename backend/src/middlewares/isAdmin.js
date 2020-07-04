const jwt = require('jsonwebtoken');

const authConfig = require('../config/authConfig');

module.exports = (request, response, next) => {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).send({ error: 'no token provided' });
  }

  jwt.verify(authHeader, authConfig.secret, (error, decoded) => {
    if (error) {
      return response.status(401).send({ error: 'token invalid' });
    }
    if (decoded.type !== 'admin') {
      return response.status(401).send({ error: 'bad credentials' });
    }
    request.id = decoded.id;
    return next();
  });
};
