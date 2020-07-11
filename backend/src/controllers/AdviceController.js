const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    try {
      const rows = await connection('advice').select('*');

      return response.status(200).json(rows);
    } catch (error) {
      return response
        .status(500)
        .json({ message: 'internal server error', error: error });
    }
  },
};
