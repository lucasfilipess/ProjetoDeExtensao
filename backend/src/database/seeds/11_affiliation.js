exports.seed = function (knex) {
  return knex('affiliation')
    .del()
    .then(function () {
      return knex('affiliation').insert([
        {
          id: 1,
          id_advice: 1,
          id_professor: 1,
          registration_date: '2020-6-24',
          id_registration: 12345,
        },
        {
          id: 2,
          id_advice: 2,
          id_professor: 2,
          registration_date: '2020-6-24',
          id_registration: 12345,
        },
      ]);
    });
};
