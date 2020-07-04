const connection = require('../database/connection');
const GenerateToken = require('../utils/GenerateToken');

module.exports = {
  async index(request, response) {
    try {
      const rows = await connection('person')
        .join('patient', 'patient.id_person', '=', 'person.id')
        .select(
          'patient.*',
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
        .andWhere('patient.delete', false)
        .select(
          'patient.id',
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

  async getMyAccompanied(request, response) {
    try {
      const id = request.id;
      const rows = await connection('person')
        .join('patient', 'patient.id_person', '=', 'person.id')
        .join(
          'patient_has_accompanying',
          'patient_has_accompanying.id_accompanied',
          '=',
          'patient.id'
        )
        .where('patient_has_accompanying.id_accompanying', id)
        .where('patient_has_accompanying.delete', false)

        .select(
          'patient.id',
          'person.name',
          'person.surname',
          'person.birth_date',
          'person.cpf',
          'person.rg',
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
      const { type, name, surname, email, password } = request.body;

      const [id_person] = await connection('person').insert({
        type,
        name,
        surname,
        email,
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
        name,
        surname,
        birth_date,
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
          name,
          surname,
          birth_date,
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

      await connection('patient').where('id', id).update({
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

  async createAccompanied(request, response) {
    try {
      const id_accompanying = request.id;
      const {
        type,
        name,
        surname,
        birth_date,
        cpf,
        rg,
        cep,
        uf,
        city,
        neighborhood,
        street,
        number,
        complement,
      } = request.body;

      const [id_person] = await connection('person').insert({
        type,
        name,
        surname,
        birth_date,
        cpf,
        rg,
        cep,
        uf,
        city,
        neighborhood,
        street,
        number,
        complement,
      });
      const [id_accompanied] = await connection('patient').insert({
        id_person,
      });

      await connection('patient_has_accompanying').insert({
        id_accompanying,
        id_accompanied,
      });
      return response
        .status(201)
        .json({ status: 'success', message: 'user created' });
    } catch (error) {
      return response
        .status(500)
        .json({ message: 'internal server error', error: error });
    }
  },

  async updateAccompanied(request, response) {
    try {
      const id_accompanied = request.params.id;

      const {
        name,
        surname,
        birth_date,
        cpf,
        rg,
        cep,
        uf,
        city,
        neighborhood,
        street,
        number,
        complement,
      } = request.body;

      const { id_person } = await connection('patient')
        .where('patient.id', id_accompanied)
        .select('id_person')
        .first();

      await connection('person').where('person.id', id_person).update({
        name,
        surname,
        birth_date,
        cpf,
        rg,
        cep,
        uf,
        city,
        neighborhood,
        street,
        number,
        complement,
      });
      return response
        .status(201)
        .json({ status: 'success', message: 'user updated' });
    } catch (error) {
      return response
        .status(500)
        .json({ message: 'internal server error', error: error });
    }
  },
  async deleteAccompanied(request, response) {
    try {
      const id_accompanying = request.id;
      const id = request.params.id;

      await connection('patient_has_accompanying')
        .where('patient_has_accompanying.id', id)
        .andWhere('patient_has_accompanying.id_accompanying', id_accompanying)
        .update({
          delete: true,
        });
      return response
        .status(201)
        .json({ status: 'success', message: 'user updated' });
    } catch (error) {
      console.log(error);
      return response
        .status(500)
        .json({ message: 'internal server error', error: error });
    }
  },
};
