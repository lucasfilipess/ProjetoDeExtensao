exports.seed = function (knex) {
  return knex('teaching')
    .del()
    .then(function () {
      return knex('teaching').insert([
        { id: 1, id_class: 1, id_professor: 1 },
        { id: 2, id_class: 2, id_professor: 2 },
      ]);
    });
};
