const connection = require('../database/connection');
// const GenerateToken = require('../utils/GenerateToken');

module.exports = {
  async index(request, response) {
    try {
      const rows = await connection('pessoa')
        .join('aluno', 'aluno.id_pessoa', '=', 'pessoa.id')
        .select(
          'pessoa.id',
          'aluno.ra',
          'aluno.periodo',
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

  async getMyData(request, response) {
    try {
      const id = request.id;
      const rows = await connection('pessoa')
        .join('aluno', 'aluno.id_pessoa', '=', 'pessoa.id')
        .where('aluno.id', id)
        .select(
          'pessoa.id',
          'aluno.ra',
          'aluno.periodo',
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
        ra,
        periodo,
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
      await connection('aluno').insert({
        id_pessoa,
        ra,
        periodo,
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
        ra,
        periodo,
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

      const id_pessoa_aluno = await connection('aluno')
        .where('aluno.id', id)
        .select('id_pessoa')
        .first();

      await connection('pessoa')
        .where('pessoa.id', id_pessoa_aluno.id_pessoa)
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

      await connection('aluno').where('aluno.id', id).update({
        ra,
        periodo,
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
