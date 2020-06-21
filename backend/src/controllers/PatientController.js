const connection = require('../database/connection');
const GenerateToken = require('../utils/GenerateToken');

module.exports = {
  async index(request, response) {
    try {
      const rows = await connection('pessoa')
        .join('paciente', 'paciente.id_pessoa', '=', 'pessoa.id')
        .select(
          'pessoa.id',
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
        .join('paciente', 'paciente.id_pessoa', '=', 'pessoa.id')
        .where('paciente.id', id)
        .select(
          'pessoa.id',
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
          'pessoa.complemento',
          'pessoa.senha'
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
      const [id_paciente] = await connection('paciente').insert({
        id_pessoa,
      });

      const token = GenerateToken({
        id: id_paciente,
        tipo: tipo,
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

      const id_pessoa_paciente = await connection('paciente')
        .select('id_pessoa')
        .where('paciente.id', id)
        .first();

      await connection('pessoa')
        .where('pessoa.id', id_pessoa_paciente.id_pessoa)
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
