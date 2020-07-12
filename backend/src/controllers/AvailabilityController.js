const connection = require('../database/connection');
const GenerateToken = require('../utils/GenerateToken');

module.exports = {
  async index(request, response) {
    try {
      const rows = await connection('availability_for_appointment').select('*');

      return response.status(200).json(rows);
    } catch (error) {
      return response
        .status(500)
        .json({ message: 'internal server error', error: error });
    }
  },
  async myAvailability(request, response) {
    try {
      const id = request.id;
      const rows = await connection('availability_for_appointment')
        .join(
          'service_area',
          'service_area.id',
          '=',
          'availability_for_appointment.id_service_area'
        )
        .where('availability_for_appointment.id_supervisor', id)
        .andWhere('availability_for_appointment.has_patient', false)
        // .select('availability_for_appointment.*');
        .select('availability_for_appointment.*', 'service_area.name');

      return response.status(200).json(rows);
    } catch (error) {
      return response
        .status(500)
        .json({ message: 'internal server error', error: error });
    }
  },

  async createAvailability(request, response) {
    try {
      const id_supervisor = request.id;
      const { id_service_area, date, hourly } = request.body;

      await connection('availability_for_appointment').insert({
        id_supervisor,
        id_service_area,
        date,
        hourly,
      });

      return response.status(201).json({
        status: 'success',
        message: 'availability for appointment created',
      });
    } catch (error) {
      return response
        .status(500)
        .json({ message: 'internal server error', error: error });
    }
  },
  async updateAvailability(request, response) {
    try {
      const id_supervisor = request.id;
      const id = request.params.id;
      const { id_service_area, date, hourly } = request.body;

      await connection('availability_for_appointment')
        .where('availability_for_appointment.id', id)
        .andWhere('availability_for_appointment.id_supervisor', id_supervisor)
        .update({
          id_service_area,
          date,
          hourly,
        });

      return response.status(201).json({
        status: 'success',
        message: 'availability for appointment created',
      });
    } catch (error) {
      return response
        .status(500)
        .json({ message: 'internal server error', error: error });
    }
  },

  async deleteAvailability(request, response) {
    try {
      const id = request.params.id;
      await connection('availability_for_appointment')
        .where('availability_for_appointment.id', id)
        .delete();

      return response.status(201).json({
        status: 'success',
        message: 'availability for appointment deleted',
      });
    } catch (error) {
      return response
        .status(500)
        .json({ message: 'internal server error', error: error });
    }
  },
};
