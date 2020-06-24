const connection = require('../database/connection');
const GenerateToken = require('../utils/GenerateToken');

module.exports = {
  async login(request, response) {
    try {
      const { email, password } = request.body;

      const rows = await connection('person')
        .select('name', 'id', 'type', 'password')
        .where('email', email)
        .first();

      if (!rows) {
        return response.status(404).json({ msg: 'bad credentials' });
      }

      if (password === rows.password) {
        const [user] = await connection('patient')
          .select('id')
          .where('id_person', rows.id);
        const token = GenerateToken({
          id: user.id,
          type: rows.type,
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
      const { email, password } = request.body;
      const rows = await connection('person')
        .select('name', 'type', 'id', 'password')
        .where('email', email)
        .first();

      if (!rows) {
        return response.status(404).json({ msg: 'bad credentials' });
      }

      if (password === rows.password) {
        let user;
        if (rows.type === 'professor') {
          [user] = await connection('professor')
            .select('id')
            .where('id_person', rows.id);
        } else if (rows.type === 'student') {
          [user] = await connection('student')
            .select('id')
            .where('id_person', rows.id);
        }
        const token = GenerateToken({
          id: user.id,
          type: rows.type,
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
