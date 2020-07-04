exports.up = function (knex) {
  return knex.schema.createTable('class', function (table) {
    table.increments('id').primary();
    table.string('name', 100).notNullable();
    table.integer('duration', 2).notNullable();
    table.integer('campus', 30).notNullable();
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable('class');
};
