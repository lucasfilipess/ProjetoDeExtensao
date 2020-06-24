const connection = require('../database/connection');
const GenerateToken = require('../utils/GenerateToken');

module.exports = {
  async index(request, response) {
    try {
      const rows = await connection('person')
        .join('patient', 'patient.id_person', '=', 'person.id')
        .where('patient.delete', false)
        .select(
          'patient.id',
          'patient.id_person',
          'person.type',
          'person.name',
          'person.surname',
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

  async getMyData(request, response) {
    try {
      const id = request.id;
      const rows = await connection('person')
        .join('patient', 'patient.id_person', '=', 'person.id')
        .where('patient.id', id)
        .select(
          'person.type',
          'person.name',
          'person.surname',
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

  async create(request, response) {
    try {
      const {
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
      } = request.body;

      const [id_person] = await connection('person').insert({
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
      const [id_patient] = await connection('patient').insert({
        id_person,
      });

      const token = GenerateToken({
        id: id_patient,
        type: type,
      });

      return response
        .status(201)
        .json({ status: 'success', message: 'user created', token: token });
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
      } = request.body;

      const id_person_patient = await connection('patient')
        .select('id_person')
        .where('patient.id', id)
        .first();

      await connection('person')
        .where('person.id', id_person_patient.id_person)
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

      return response
        .status(200)
        .json({ status: 'success', message: 'user updated' });
    } catch (error) {
      return response
        .status(500)
        .json({ message: 'internal server error', error: error });
    }
  },

  async delete(request, response) {
    try {
      const id = request.id;
      const id_person_patient = await connection('patient')
        .select('id_person')
        .where('patient.id', id)
        .first();

      await connection('person')
        .where('person.id', id_person_patient.id_person)
        .update({
          delete: true,
        });

      return response
        .status(200)
        .json({ status: 'success', message: 'user deleted' });
    } catch (error) {
      return response
        .status(500)
        .json({ message: 'internal server error', error: error });
    }
  },
};
