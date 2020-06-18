exports.up = function (knex) {
  return knex.schema.createTable('curso', function (table) {
    table.increments('id').primary();
    table.string('nome').notNullable();
    table.integer('duracao').notNullable();
    table.string('turno').notNullable();
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable('curso');
};
