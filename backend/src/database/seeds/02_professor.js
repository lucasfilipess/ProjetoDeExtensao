exports.seed = function (knex) {
  return knex('professor')
    .del()
    .then(function () {
      return knex('professor').insert([
        {
          id: 1,
          id_pessoa: 1,
          matricula: 120121445,
        },
        {
          id: 2,
          id_pessoa: 4,
          matricula: 150151245,
        },
      ]);
    });
};
