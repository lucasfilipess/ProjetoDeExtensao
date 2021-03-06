const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    try {
      const rows = await connection('person')
        .where('person.type', 'admin')
        .select('*');

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
        .where('person.type', 'admin')
        .andWhere('person.id', id)
        .select('*');

      return response.status(200).json(rows);
    } catch (error) {
      return response
        .status(500)
        .json({ message: 'internal server error', error: error });
    }
  },

  async createSupervisor(request, response) {
    try {
      const {
        id_advice,
        id_class,
        registration,
        type,
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

      const [id_person] = await connection('person').insert({
        type,
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
      await connection('supervisor').insert({
        id_person,
        registration,
        id_advice,
        id_class,
      });

      return response
        .status(201)
        .json({ status: 'success', message: 'user created' });
    } catch (error) {
      console.log(error);

      return response
        .status(500)
        .json({ message: 'internal server error', error: error });
    }
  },

  async updateSupervisor(request, response) {
    try {
      const id = request.params.id;
      const {
        id_advice,
        id_class,
        registration,
        type,
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
  async deleteSupervisor(request, response) {
    try {
      const id = request.params.id;

      await connection('supervisor').where('supervisor.id', id).update({
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

  async indexStudent(request, response) {
    try {
      const rows = await connection('person')
        .join('student', 'student.id_person', '=', 'person.id')
        .join('class', 'class.id', '=', 'student.id_class')
        .where('student.delete', false)
        .select(
          'student.*',
          'student.id_class',
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

  async createStudent(request, response) {
    try {
      const {
        id_class,
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
      });
      await connection('student').insert({
        id_person,
        id_class,
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

  async updateStudent(request, response) {
    try {
      const id = request.params.id;
      const {
        id_class,
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
        });

      await connection('student').where('student.id', id).update({
        id_class,
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
  async deleteStudent(request, response) {
    try {
      const id = request.params.id;

      await connection('student').where('id', id).update({
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
