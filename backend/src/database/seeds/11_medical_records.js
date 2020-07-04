exports.seed = function (knex) {
  return knex('medical_records')
    .del()
    .then(function () {
      return knex('medical_records').insert([
        {
          id: 1,
          id_patient: 5,
          id_supervisor: 2,
          id_student: 8,
          procedures:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
          notes:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium maxime nostrum ea neque, deserunt quas itaque architecto veritatis repudiandae omnis natus, dolorem aperiam a facere aliquid adipisci cumque voluptatibus. Autem!',
        },
        {
          id: 2,
          id_patient: 6,
          id_supervisor: 3,
          id_student: 9,
          procedures:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
          notes:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium maxime nostrum ea neque, deserunt quas itaque architecto veritatis repudiandae omnis natus, dolorem aperiam a facere aliquid adipisci cumque voluptatibus. Autem!',
        },
        {
          id: 3,
          id_patient: 7,
          id_supervisor: 4,
          id_student: 10,
          procedures:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
          notes:
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium maxime nostrum ea neque, deserunt quas itaque architecto veritatis repudiandae omnis natus, dolorem aperiam a facere aliquid adipisci cumque voluptatibus. Autem!',
        },
      ]);
    });
};
