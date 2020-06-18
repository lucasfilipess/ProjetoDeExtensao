exports.up = function (knex) {
  return knex.schema.createTable('area_de_atendimento', function (table) {
    table.increments('id').primary();
    table.string('nome').notNullable();
    table.string('descricao').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('area_de_atendimento');
};
