exports.seed = function (knex) {
  return knex('class')
    .del()
    .then(function () {
      return knex('class').insert([
        {
          id: 1,
          name: 'Fisioterapia',
          duration: 6,
          campus: 'Buritis',
        },
        {
          id: 2,
          name: 'Nutrição',
          duration: 4,
          campus: 'Buritis',
        },
        {
          id: 3,
          name: 'Psicologia',
          duration: 4,
          campus: 'Buritis',
        },
        {
          id: 4,
          name: 'Medicina',
          duration: 6,
          campus: 'Buritis',
        },
      ]);
    });
};
