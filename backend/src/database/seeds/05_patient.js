exports.seed = function (knex) {
  return knex('patient')
    .del()
    .then(function () {
      return knex('patient').insert([
        {
          id: 1,
          id_person: 5,
        },
        {
          id: 2,
          id_person: 6,
        },
        {
          id: 3,
          id_person: 7,
        },
      ]);
    });
};
