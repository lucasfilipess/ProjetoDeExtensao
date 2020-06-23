exports.seed = function (knex) {
  return knex('professor')
    .del()
    .then(function () {
      return knex('professor').insert([
        {
          id: 1,
          id_person: 1,
          registration: 120121445,
        },
        {
          id: 2,
          id_person: 4,
          registration: 150151245,
        },
      ]);
    });
};
