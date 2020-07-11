const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    try {
      const rows = await connection('class')
        .where('class.delete', false)
        .select('*');

      return response.status(200).json(rows);
    } catch (error) {
      return response
        .status(500)
        .json({ message: 'internal server error', error: error });
    }
  },

  async create(request, response) {
    try {
      const { campus, name, duration } = request.body;

      await connection('class').insert({
        campus,
        name,
        duration,
      });

      return response.status(201).json({
        status: 'success',
        message: 'class created',
      });
    } catch (error) {
      return response
        .status(500)
        .json({ message: 'internal server error', error: error });
    }
  },
  async update(request, response) {
    try {
      const id = request.params.id;
      const { campus, name, duration } = request.body;

      await connection('class').where('class.id', id).update({
        campus,
        name,
        duration,
      });

      return response.status(201).json({
        status: 'success',
        message: 'class updated',
      });
    } catch (error) {
      return response
        .status(500)
        .json({ message: 'internal server error', error: error });
    }
  },
  async delete(request, response) {
    try {
      const id = request.params.id;

      await connection('class').where('class.id', id).update({
        delete: true,
      });

      return response.status(201).json({
        status: 'success',
        message: 'class deleted',
      });
    } catch (error) {
      return response
        .status(500)
        .json({ message: 'internal server error', error: error });
    }
  },
};
