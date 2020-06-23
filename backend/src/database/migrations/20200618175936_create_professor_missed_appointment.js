exports.up = function (knex) {
  return knex.schema.createTable('professor_missed_appointment', function (
    table
  ) {
    table.increments('id').primary();
    table.integer('id_professor').notNullable();
    table.integer('id_appointment').notNullable();

    table.foreign('id_appointment').references('id').inTable('appointment');
    table.foreign('id_professor').references('id').inTable('professor');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('professor_missed_appointment');
};
