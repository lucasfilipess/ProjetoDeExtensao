exports.up = function (knex) {
  return knex.schema.createTable('student_has_appointment', function (table) {
    table.increments('id').primary();
    table.integer('id_student').notNullable();
    table.integer('id_appointment').notNullable();

    table.foreign('id_student').references('id').inTable('student');
    table.foreign('id_appointment').references('id').inTable('appointment');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('student_has_appointment');
};
