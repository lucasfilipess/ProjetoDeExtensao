const connection = require('../database/connection');
// const GenerateToken = require('../utils/GenerateToken');

module.exports = {
  async index(request, response) {
    try {
      const rows = await connection('person')
        .join('student', 'student.id_person', '=', 'person.id')
        .where('student.delete', false)
        .select(
          'student.id',
          'student.id_person',
          'person.type',
          'person.name',
          'person.surname',
          'student.ra',
          'student.period',
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
        .join('student', 'student.id_person', '=', 'person.id')
        .where('student.id', id)
        .where('student.delete', false)
        .select(
          'student.id',
          'student.id_person',
          'person.type',
          'person.name',
          'person.surname',
          'student.ra',
          'student.period',
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
        ra,
        period,
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
      await connection('student').insert({
        id_person,
        ra,
        period,
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

  async update(request, response) {
    try {
      const id = request.id;
      const {
        ra,
        period,
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

      const id_person_student = await connection('student')
        .where('student.id', id)
        .select('id_person')
        .first();

      await connection('person')
        .where('person.id', id_person_student.id_person)
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

      await connection('student').where('student.id', id).update({
        ra,
        period,
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
      const { id } = request.body;
      const type = request.type;

      if (type === 'superUser') {
        const id_person_student = await connection('student')
          .select('id_person')
          .where('student.id', id)
          .first();

        await connection('person')
          .where('person.id', id_person_student.id_person)
          .update({
            delete: true,
          });

        return response
          .status(200)
          .json({ status: 'success', message: 'user deleted' });
      }
      return response
        .status(401)
        .json({ status: 'error', message: 'bad credentials' });
    } catch (error) {
      return response
        .status(500)
        .json({ message: 'internal server error', error: error });
    }
  },
};
