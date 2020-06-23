exports.up = function (knex) {
  return knex.schema.createTable('teaching', function (table) {
    table.increments('id').primary();
    table.integer('id_class').notNullable();
    table.integer('id_professor').notNullable();
    table.foreign('id_class').references('id').inTable('class');
    table.foreign('id_professor').references('id').inTable('professor');
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable('teaching');
};
