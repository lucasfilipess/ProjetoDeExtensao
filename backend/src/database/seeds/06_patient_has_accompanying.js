exports.seed = function (knex) {
  return knex('patient_has_accompanying')
    .del()
    .then(function () {
      return knex('patient_has_accompanying').insert([
        { id: 1, id_accompanying: 2, id_accompanied: 3 },
      ]);
    });
};
