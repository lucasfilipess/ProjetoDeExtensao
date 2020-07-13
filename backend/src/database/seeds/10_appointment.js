exports.seed = function (knex) {
  return knex('appointment')
    .del()
    .then(function () {
      return knex('appointment').insert([
        {
          id: 1,
          id_patient: 5,
          id_supervisor: 2,
          id_service_area: 1,
          horary: '08:00 - 08:50',
          date: '25/07',
        },
        {
          id: 2,
          id_patient: 6,
          id_supervisor: 3,
          id_service_area: 1,
          horary: '08:00 - 08:50',
          date: '25/07',
        },
        {
          id: 3,
          id_patient: 7,
          id_supervisor: 4,
          id_service_area: 1,
          horary: '08:00 - 08:50',
          date: '25/07',
        },
      ]);
    });
};
