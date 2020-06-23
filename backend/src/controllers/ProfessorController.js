const connection = require('../database/connection');
// const GenerateToken = require('../utils/GenerateToken');

module.exports = {
  async index(request, response) {
    try {
      const rows = await connection('person')
        .join('professor', 'professor.person', '=', 'person.id')
        .select(
          'person.id',
          'professor.matricula',
          'person.tipo',
          'person.nome',
          'person.cpf',
          'person.rg',
          'person.telefone',
          'person.celular',
          'person.email',
          'person.cep',
          'person.uf',
          'person.cidade',
          'person.bairro',
          'person.rua',
          'person.numero',
          'person.complemento'
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
      const rows = await connection('pessoa')
        .join('professor', 'professor.id_pessoa', '=', 'pessoa.id')
        .where('professor.id', id)
        .select(
          'pessoa.id',
          'professor.matricula',
          'pessoa.tipo',
          'pessoa.nome',
          'pessoa.cpf',
          'pessoa.rg',
          'pessoa.telefone',
          'pessoa.celular',
          'pessoa.email',
          'pessoa.cep',
          'pessoa.uf',
          'pessoa.cidade',
          'pessoa.bairro',
          'pessoa.rua',
          'pessoa.numero',
          'pessoa.complemento'
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
        matricula,
        tipo,
        nome,
        cpf,
        rg,
        telefone,
        celular,
        email,
        cep,
        uf,
        cidade,
        bairro,
        rua,
        numero,
        complemento,
        senha,
      } = request.body;

      const [id_pessoa] = await connection('pessoa').insert({
        tipo,
        nome,
        cpf,
        rg,
        telefone,
        celular,
        email,
        cep,
        uf,
        cidade,
        bairro,
        rua,
        numero,
        complemento,
        senha,
      });
      await connection('professor').insert({
        id_pessoa,
        matricula,
      });

      // const token = GenerateToken({
      //   id: id_professor,
      //   tipo: tipo,
      // });

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
        matricula,
        tipo,
        nome,
        cpf,
        rg,
        telefone,
        celular,
        email,
        cep,
        uf,
        cidade,
        bairro,
        rua,
        numero,
        complemento,
        senha,
      } = request.body;

      const id_pessoa_professor = await connection('professor')
        .where('professor.id', id)
        .select('id_pessoa')
        .first();

      await connection('pessoa')
        .where('pessoa.id', id_pessoa_professor.id_pessoa)
        .update({
          tipo,
          nome,
          cpf,
          rg,
          telefone,
          celular,
          email,
          cep,
          uf,
          cidade,
          bairro,
          rua,
          numero,
          complemento,
          senha,
        });

      await connection('professor').where('professor.id', id).update({
        matricula,
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
