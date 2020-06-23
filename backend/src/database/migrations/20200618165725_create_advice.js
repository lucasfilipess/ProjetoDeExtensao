exports.up = function (knex) {
  return knex.schema.createTable('advice', function (table) {
    table.increments('id').primary();
    table.string('name', 30).notNullable();
    table.string('uf', 2).notNullable();
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable('advice');
};
