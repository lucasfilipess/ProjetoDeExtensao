exports.seed = function (knex) {
  return knex('paciente')
    .del()
    .then(function () {
      return knex('paciente').insert([
        {
          id: 1,
          id_pessoa: 3,
        },
        {
          id: 2,
          id_pessoa: 6,
        },
      ]);
    });
};
