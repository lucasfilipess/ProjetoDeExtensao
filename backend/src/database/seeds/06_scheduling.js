exports.seed = function (knex) {
  return knex('scheduling')
    .del()
    .then(function () {
      return knex('scheduling').insert([
        {
          id: 1,
          id_professor: 1,
          id_patient: 1,
          id_service_area: 1,
        },
      ]);
    });
};
