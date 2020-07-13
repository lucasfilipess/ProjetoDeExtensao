const connection = require('../database/connection');
const GenerateToken = require('../utils/GenerateToken');

module.exports = {
  async create(request, response) {
    try {
      const id_patient = request.id;
      const { id, id_supervisor, date, horary, id_service_area } = request.body;

      await connection('appointment').insert({
        id_patient,
        id_supervisor,
        id_service_area,
        date,
        horary,
      });

      await connection('availability_for_appointment')
        .where('availability_for_appointment.id', id)
        .update({
          has_patient: true,
        });

      return response.status(201).json({
        status: 'success',
        message: 'availability for appointment created',
      });
    } catch (error) {
      console.log(error);

      return response
        .status(500)
        .json({ message: 'internal server error', error: error });
    }
  },

  async getMyAppointments(request, response) {
    try {
      const id = request.id;
      const rows = await connection('appointment')
        .join('supervisor', 'supervisor.id', '=', 'appointment.id_supervisor')
        .join('person', 'person.id', '=', 'supervisor.id_person')
        .join(
          'service_area',
          'service_area.id',
          '=',
          'appointment.id_service_area'
        )
        .where('appointment.id_patient', id)
        .select(
          'appointment.*',
          'person.name',
          'person.surname',
          'service_area.name as service_area'
        );

      return response.status(200).json(rows);
    } catch (error) {
      return response
        .status(500)
        .json({ message: 'internal server error', error: error });
    }
  },
};
