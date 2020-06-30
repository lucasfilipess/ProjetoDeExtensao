exports.seed = function (knex) {
  return knex('discord')
    .del()
    .then(function () {
      return knex('discord').insert([
        { id: 1, id_class: 1, id_student: 1 },
        { id: 2, id_class: 2, id_student: 2 },
      ]);
    });
};
