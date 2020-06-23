exports.up = function (knex) {
  return knex.schema.createTable('student_absences', function (table) {
    table.increments('id').primary();
    table.integer('id_student').notNullable();
    table.integer('id_appointment').notNullable();

    table
      .foreign('id_student')
      .references('id_student')
      .inTable('student_has_appointment');
    table
      .foreign('id_appointment')
      .references('id_appointment')
      .inTable('student_has_appointment');
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable('student_absences');
};
