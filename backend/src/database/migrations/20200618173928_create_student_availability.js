exports.up = function (knex) {
  return knex.schema.createTable('student_availability', function (table) {
    table.increments('id').primary();
    table.integer('id_student').notNullable();
    table.date('week_date').notNullable();
    table.time('schedule').notNullable();

    table.foreign('id_student').references('id').inTable('student');
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable('student_availability');
};
