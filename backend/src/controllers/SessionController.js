const connection = require('../database/connection');
const GenerateToken = require('../utils/GenerateToken');

module.exports = {
  async login(request, response) {
    try {
      const { email, senha } = request.body;

      const rows = await connection('pessoa')
        .select('nome', 'tipo', 'id', 'senha')
        .where('email', email)
        .first();

      if (!rows) {
        return response.status(404).json({ msg: 'bad credentials' });
      }

      if (senha === rows.senha) {
        const [user] = await connection('paciente')
          .select('id')
          .where('id_pessoa', rows.id);
        const token = GenerateToken({
          id: user.id,
          tipo: rows.tipo,
        });
        return response.status(200).json({ token, name: rows.nome });
      } else {
        return response.status(404).json({ msg: 'bad credentials' });
      }
    } catch (error) {
      return response
        .status(500)
        .json({ message: 'internal server error', error: error });
    }
  },

  async adminLogin(request, response) {
    try {
      const { email, senha } = request.body;

      const rows = await connection('pessoa')
        .select('nome', 'tipo', 'id', 'senha')
        .where('email', email)
        .first();

      if (!rows) {
        return response.status(404).json({ msg: 'bad credentials' });
      }

      if (senha === rows.senha) {
        let user;
        if (rows.tipo === 1) {
          [user] = await connection('professor')
            .select('id')
            .where('id_pessoa', rows.id);
        } else if (rows.tipo === 2) {
          [user] = await connection('aluno')
            .select('id')
            .where('id_pessoa', rows.id);
        }
        const token = GenerateToken({
          id: user.id,
          tipo: rows.tipo,
        });

        return response
          .status(200)
          .json({ token, type: rows.tipo, name: rows.nome });
      } else {
        return response.status(404).json({ msg: 'bad credentials' });
      }
    } catch (error) {
      return response
        .status(500)
        .json({ message: 'internal server error', error: error });
    }
  },
};
