const connection = require('../database/connection');
// const GenerateToken = require('../utils/GenerateToken');

module.exports = {
  async index(request, response) {
    try {
      const rows = await connection('service_area')
        .join('class', 'class.id', '=', 'service_area.id_class')
        .where('service_area.delete', false)
        .andWhere('class.delete', false)
        // .select('*');
        .select('service_area.*', 'class.name as class_name');

      return response.status(200).json(rows);
    } catch (error) {
      return response
        .status(500)
        .json({ message: 'internal server error', error: error });
    }
  },
  async myServiceArea(request, response) {
    try {
      const id = request.id;

      const rows = await connection('supervisor')
        .join('class', 'class.id', '=', 'supervisor.id_class')
        .join('service_area', 'service_area.id_class', '=', 'class.id')
        .where('service_area.delete', false)
        .andWhere('supervisor.id', id)
        .andWhere('class.delete', false)
        // .select('*');
        // .select('service_area.*', 'class.name as class_name');
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
      const { id_class, name, description } = request.body;

      await connection('service_area').insert({
        id_class,
        name,
        description,
      });

      return response.status(201).json({
        status: 'success',
        message: 'service area created',
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
      const { id_class, name, description } = request.body;

      await connection('service_area').where('service_area.id', id).update({
        id_class,
        name,
        description,
      });

      return response.status(201).json({
        status: 'success',
        message: 'service area updated',
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

      await connection('service_area').where('service_area.id', id).update({
        delete: true,
      });

      return response.status(201).json({
        status: 'success',
        message: 'service area deleted',
      });
    } catch (error) {
      return response
        .status(500)
        .json({ message: 'internal server error', error: error });
    }
  },
};
