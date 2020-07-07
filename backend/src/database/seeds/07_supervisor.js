exports.seed = function (knex) {
  return knex('supervisor')
    .del()
    .then(function () {
      return knex('supervisor').insert([
        {
          id: 1,
          id_person: 2,
          id_advice: 1,
          id_class: 1,
          registration: 124567896,
        },
        {
          id: 2,
          id_person: 3,
          id_advice: 2,
          id_class: 2,
          registration: 456879525,
        },
        {
          id: 3,
          id_person: 4,
          id_advice: 3,
          id_class: 3,
          registration: 785896324,
        },
      ]);
    });
};
