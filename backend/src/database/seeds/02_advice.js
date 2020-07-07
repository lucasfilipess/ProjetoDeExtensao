exports.seed = function (knex) {
  return knex('advice')
    .del()
    .then(function () {
      return knex('advice').insert([
        {
          id: 1,
          name: 'Conselho Regional de Medicina do Estado de Minas Gerais - CFM',
          uf: 'MG',
        },
        {
          id: 2,
          name:
            'Conselho Regional de Fisioterapia e Terapia Ocupacional - CREFITO',
          uf: 'MG',
        },
        {
          id: 3,
          name: 'Conselho Regional de Nutricionistas - CRN9',
          uf: 'MG',
        },
      ]);
    });
};
