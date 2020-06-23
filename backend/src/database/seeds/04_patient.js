exports.seed = function (knex) {
  return knex('patient')
    .del()
    .then(function () {
      return knex('patient').insert([
        {
          id: 1,
          id_person: 3,
        },
        {
          id: 2,
          id_person: 6,
        },
      ]);
    });
};
