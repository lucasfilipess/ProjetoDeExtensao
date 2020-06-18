exports.up = function (knex) {
  return knex.schema.createTable('conselho', function (table) {
    table.increments('id').primary();
    table.string('nome').notNullable();
    table.string('uf').notNullable();
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable('conselho');
};
