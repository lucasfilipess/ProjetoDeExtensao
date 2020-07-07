exports.seed = function (knex) {
  return knex('student')
    .del()
    .then(function () {
      return knex('student').insert([
        {
          id: 1,
          id_person: 8,
          id_class: 1,
          ra: 125463217,
          period: '5°',
        },
        {
          id: 2,
          id_person: 9,
          id_class: 2,
          ra: 524689656,
          period: '6°',
        },
        {
          id: 3,
          id_person: 10,
          id_class: 3,
          ra: 145788564,
          period: '7°',
        },
      ]);
    });
};
