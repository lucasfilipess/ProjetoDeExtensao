const connection = require('../database/connection');

module.exports = async (request, response, next) => {
  try {
    const { email } = request.body;

    const verify = await connection('users')
      .select('email')
      .where('email', email)
      .first();

    if (!verify) {
      return next();
    } else {
      return response.status(422).json({ error: 'email already registered' });
    }
  } catch (error) {
    return response.status(500).json({ error: 'internal server error' });
  }
};
