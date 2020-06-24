const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    try {
      const rows = await connection('person')
        .join('professor', 'professor.id_person', '=', 'person.id')
        .where('professor.delete', false)
        .select(
          'person.type',
          'person.name',
          'person.surname',
          'professor.registration',
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
        .join('professor', 'professor.id_person', '=', 'person.id')
        .where('professor.id', id)
        .where('professor.delete', false)
        .select(
          'professor.id',
          'person.type',
          'person.name',
          'person.surname',
          'professor.registration',
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
        registration,
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
      await connection('professor').insert({
        id_person,
        registration,
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
        registration,
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

      const id_person_professor = await connection('professor')
        .where('professor.id', id)
        .select('id_person')
        .first();

      await connection('person')
        .where('person.id', id_person_professor.id_person)
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

      await connection('professor').where('professor.id', id).update({
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
  async delete(request, response) {
    try {
      const { id } = request.body;
      const type = request.type;

      if (type === 'superUser') {
        const id_person_professor = await connection('professor')
          .select('id_person')
          .where('professor.id', id)
          .first();

        await connection('person')
          .where('person.id', id_person_professor.id_person)
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
