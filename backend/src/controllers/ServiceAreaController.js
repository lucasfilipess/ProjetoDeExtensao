const connection = require('../database/connection');
// const GenerateToken = require('../utils/GenerateToken');

module.exports = {
  async index(request, response) {
    try {
      const rows = await connection('service_area')
        .where('delete', false)
        .select('name', 'description');

      return response.status(200).json(rows);
    } catch (error) {
      return response
        .status(500)
        .json({ message: 'internal server error', error: error });
    }
  },

  async create(request, response) {
    try {
      const type = request.type;
      if (type === 'admin') {
        const { name, description } = request.body;

        await connection('service_area').insert({
          name,
          description,
        });

        return response.status(201).json({
          status: 'success',
          message: 'service area created',
        });
      } else {
        return response
          .status(401)
          .json({ status: 'error', message: 'bad credentials' });
      }
    } catch (error) {
      return response
        .status(500)
        .json({ message: 'internal server error', error: error });
    }
  },
  async update(request, response) {
    try {
      const type = request.type;

      if (type === 'admin') {
        const { id, name, description } = request.body;

        await connection('service_area').where('service_area.id', id).update({
          name,
          description,
        });

        return response.status(201).json({
          status: 'success',
          message: 'service area updated',
        });
      } else {
        return response
          .status(401)
          .json({ status: 'error', message: 'bad credentials' });
      }
    } catch (error) {
      return response
        .status(500)
        .json({ message: 'internal server error', error: error });
    }
  },
  async delete(request, response) {
    try {
      const type = request.type;
      const { id } = request.body;

      if (type === 'admin') {
        await connection('service_area').where('service_area.id', id).update({
          delete: true,
        });

        return response.status(201).json({
          status: 'success',
          message: 'service area deleted',
        });
      } else {
        return response
          .status(401)
          .json({ status: 'error', message: 'bad credentials' });
      }
    } catch (error) {
      return response
        .status(500)
        .json({ message: 'internal server error', error: error });
    }
  },
};
