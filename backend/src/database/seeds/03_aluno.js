exports.seed = function (knex) {
  return knex('aluno')
    .del()
    .then(function () {
      return knex('aluno').insert([
        {
          id: 1,
          id_pessoa: 2,
          ra: 424121445,
          periodo: 2,
        },
        {
          id: 2,
          id_pessoa: 5,
          ra: 550161245,
          periodo: 6,
        },
      ]);
    });
};
