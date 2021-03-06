const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    try {
      const rows = await connection('person')
        .join('supervisor', 'supervisor.id_person', '=', 'person.id')
        .join('advice', 'advice.id', '=', 'supervisor.id_advice')
        .join('class', 'class.id', '=', 'supervisor.id_class')
        .where('supervisor.delete', false)
        .select(
          'supervisor.id',
          'supervisor.id_class',
          'supervisor.id_advice',
          'person.type',
          'person.name',
          'person.surname',
          'person.birth_date',
          'person.cpf',
          'person.rg',
          'person.telephone',
          'person.cellPhone',
          'person.email',
          'person.cep',
          'person.uf',
          'person.city',
          'person.neighborhood',
          'person.street',
          'person.number',
          'person.complement',
          'person.password',
          'supervisor.registration',
          'advice.name as advice',
          'advice.uf as advice_uf',
          'class.name as class',
          'class.campus'
        );

      return response.status(200).json(rows);
    } catch (error) {
      return response
        .status(500)
        .json({ message: 'internal server error', error: error });
    }
  },

  async getMyData(request, response) {
    try {
      const id = request.id;
      const rows = await connection('person')
        .join('supervisor', 'supervisor.id_person', '=', 'person.id')
        .join('advice', 'advice.id', '=', 'supervisor.id_advice')
        .join('class', 'class.id', '=', 'supervisor.id_class')
        .where('supervisor.id', id)
        .andWhere('supervisor.delete', false)
        .select(
          'supervisor.id',
          'person.type',
          'person.name',
          'person.surname',
          'person.birth_date',
          'person.cpf',
          'person.rg',
          'person.telephone',
          'person.cellPhone',
          'person.email',
          'person.cep',
          'person.uf',
          'person.city',
          'person.neighborhood',
          'person.street',
          'person.number',
          'person.complement',
          'person.password',
          'supervisor.registration',
          'advice.id as id_advice',
          'class.id as id_class'
        );

      return response.status(200).json(rows);
    } catch (error) {
      return response
        .status(500)
        .json({ message: 'internal server error', error: error });
    }
  },

  async getMyAppointments(request, response) {
    try {
      const id = request.id;
      const rows = await connection('appointment')
        .join('person', 'person.id', '=', 'appointment.id_patient')
        .where('appointment.id_supervisor', id)
        .select(
          'appointment.*',
          'person.name',
          'person.surname',
          'person.birth_date',
          'person.cpf',
          'person.rg',
          'person.telephone',
          'person.cellPhone',
          'person.email',
          'person.cep',
          'person.uf',
          'person.city',
          'person.neighborhood',
          'person.street',
          'person.number',
          'person.complement'
        );

      return response.status(200).json(rows);
    } catch (error) {
      return response
        .status(500)
        .json({ message: 'internal server error', error: error });
    }
  },

  async update(request, response) {
    try {
      const id = request.id;
      const {
        id_advice,
        id_class,
        type,
        registration,
        name,
        surname,
        cpf,
        rg,
        telephone,
        cellPhone,
        email,
        cep,
        uf,
        city,
        neighborhood,
        street,
        number,
        complement,
        password,
      } = request.body;

      const id_person_supervisor = await connection('supervisor')
        .where('supervisor.id', id)
        .select('id_person')
        .first();

      await connection('person')
        .where('person.id', id_person_supervisor.id_person)
        .update({
          type,
          name,
          surname,
          cpf,
          rg,
          telephone,
          cellPhone,
          email,
          cep,
          uf,
          city,
          neighborhood,
          street,
          number,
          complement,
          password,
        });
      await connection('supervisor').where('supervisor.id', id).update({
        id_advice,
        id_class,
        registration,
      });

      return response
        .status(200)
        .json({ status: 'success', message: 'user updated' });
    } catch (error) {
      return response
        .status(500)
        .json({ message: 'internal server error', error: error });
    }
  },
};
