exports.up = function (knex) {
  return knex.schema.createTable('student_has_scheduling', function (table) {
    table.increments('id').primary();
    table.integer('id_student').notNullable();
    table.integer('id_scheduling').notNullable();
    table.foreign('id_scheduling').references('id').inTable('scheduling');
    table.foreign('id_student').references('id').inTable('student');
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable('student_has_scheduling');
};
