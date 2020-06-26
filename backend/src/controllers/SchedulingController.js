const connection = require('../database/connection');
// const GenerateToken = require('../utils/GenerateToken');

module.exports = {
  async historic(request, response) {
    try {
      const rows = await connection('scheduling').select('*');

      return response.status(200).json(rows);
    } catch (error) {
      return response
        .status(500)
        .json({ message: 'internal server error', error: error });
    }
  },

  // async index(request, response) {
  //   try {
  //     const rows = await connection('service_area')
  //       .where('delete', false)
  //       .select('*');

  //     return response.status(200).json(rows);
  //   } catch (error) {
  //     return response
  //       .status(500)
  //       .json({ message: 'internal server error', error: error });
  //   }
  // },

  async create(request, response) {
    try {
      const id_patient = request.id;
      const { id_professor, id_service_area, id_student } = request.body;

      await connection('scheduling').insert({
        id_professor,
        id_patient,
        id_student,
        id_service_area,
      });

      return response.status(201).json({
        status: 'success',
        message: 'scheduling created',
      });
    } catch (error) {
      return response
        .status(500)
        .json({ message: 'internal server error', error: error });
    }
  },
};
