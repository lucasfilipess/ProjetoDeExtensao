exports.seed = function (knex) {
  return knex('advice')
    .del()
    .then(function () {
      return knex('advice').insert([
        { id: 1, name: 'conselho1', uf: 'MG' },
        { id: 2, name: 'conselho2', uf: 'SP' },
      ]);
    });
};
