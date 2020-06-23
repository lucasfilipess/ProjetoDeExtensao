exports.up = function (knex) {
  return knex.schema.createTable('professor_availability', function (table) {
    table.increments('id').primary();
    table.integer('id_professor').notNullable();
    table.date('week_date').notNullable();
    table.time('schedule').notNullable();

    table.foreign('id_professor').references('id').inTable('professor');
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable('professor_availability');
};
