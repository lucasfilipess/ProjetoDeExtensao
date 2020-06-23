exports.seed = function (knex) {
  return knex('student')
    .del()
    .then(function () {
      return knex('student').insert([
        {
          id: 1,
          id_person: 2,
          ra: 424121445,
          period: 2,
        },
        {
          id: 2,
          id_person: 5,
          ra: 550161245,
          period: 6,
        },
      ]);
    });
};
