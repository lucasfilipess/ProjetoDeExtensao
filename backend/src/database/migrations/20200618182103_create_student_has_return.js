exports.up = function (knex) {
  return knex.schema.createTable('student_has_return', function (table) {
    table.increments('id').primary();
    table.integer('id_student').notNullable();
    table.integer('id_return').notNullable();
    table.foreign('id_student').references('id').inTable('student');
    table.foreign('id_return').references('id').inTable('return');
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable('student_has_return');
};
