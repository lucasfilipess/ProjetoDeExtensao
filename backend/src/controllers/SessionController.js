const connection = require('../database/connection');
const GenerateToken = require('../utils/GenerateToken');

module.exports = {
  async login(request, response) {
    try {
      const { email, password } = request.body;
      const rows = await connection('person')
        .select('name', 'type', 'id', 'password')
        .where({ email, password })
        .first();

      if (!rows) {
        return response.status(404).json({ msg: 'bad credentials' });
      }

      let user;
      const name = rows.name;
      const type = rows.type;

      if (type === 'preceptor' || type === 'professor') {
        [user] = await connection('supervisor')
          .select('id')
          .where('id_person', rows.id);

        const token = GenerateToken({
          id: user.id,
          type: type,
        });
        return response.status(200).json({ token, type, name });
      } else if (type === 'admin') {
        const token = GenerateToken({
          id: rows.id,
          type: type,
        });
        return response.status(200).json({ token, type, name });
      } else {
        [user] = await connection('patient')
          .select('id')
          .where('id_person', rows.id);
        const token = GenerateToken({
          id: user.id,
          type: type,
        });
        return response.status(200).json({ token, type, name });
      }
    } catch (error) {
      return response
        .status(500)
        .json({ message: 'internal server error', error: error });
    }
  },
};
