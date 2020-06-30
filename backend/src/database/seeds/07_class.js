exports.seed = function (knex) {
  return knex('class')
    .del()
    .then(function () {
      return knex('class').insert([
        { id: 1, name: 'Medicina', duration: 6, shift: 'Integral' },
        {
          id: 2,
          name: 'Nutrição',
          duration: 4,
          shift: 'Matutino',
        },
        {
          id: 3,
          name: 'Odontologia',
          duration: 4,
          shift: 'Diurno',
        },
        {
          id: 4,
          name: 'Psicologia',
          duration: 4,
          shift: 'Noturno',
        },
        {
          id: 5,
          name: 'Fisioterapia',
          duration: 4,
          shift: 'Noturno',
        },
        {
          id: 6,
          name: 'Enfermagem',
          duration: 4,
          shift: 'Noturno',
        },
        {
          id: 7,
          name: 'Educação Física',
          duration: 4,
          shift: 'Matutino',
        },
        {
          id: 8,
          name: 'Medicina Veterinária',
          duration: 4,
          shift: 'Noturno',
        },
      ]);
    });
};
