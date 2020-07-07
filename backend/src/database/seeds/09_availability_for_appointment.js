exports.seed = function (knex) {
  return knex('availability_for_appointment')
    .del()
    .then(function () {
      return knex('availability_for_appointment').insert([
        {
          id: 1,
          id_supervisor: 1,
          id_service_area: 1,
          date: '25/07/2020',
          hourly: ['08:00 - 08:50', '09:00 - 09:50', '10:00 - 10:50'],
        },
        {
          id: 2,
          id_supervisor: 1,
          id_service_area: 2,
          date: '26/07/2020',
          hourly: ['08:00 - 08:50', '09:00 - 09:50', '10:00 - 10:50'],
        },
        {
          id: 3,
          id_supervisor: 2,
          id_service_area: 1,
          date: '25/07/2020',
          hourly: ['08:00 - 08:50', '09:00 - 09:50', '10:00 - 10:50'],
        },
        {
          id: 4,
          id_supervisor: 2,
          id_service_area: 2,
          date: '26/07/2020',
          hourly: ['08:00 - 08:50', '09:00 - 09:50', '10:00 - 10:50'],
        },
        {
          id: 5,
          id_supervisor: 3,
          id_service_area: 1,
          date: '25/07/2020',
          hourly: ['08:00 - 08:50', '09:00 - 09:50', '10:00 - 10:50'],
        },
        {
          id: 6,
          id_supervisor: 3,
          id_service_area: 2,
          date: '26/07/2020',
          hourly: ['08:00 - 08:50', '09:00 - 09:50', '10:00 - 10:50'],
        },
      ]);
    });
};
