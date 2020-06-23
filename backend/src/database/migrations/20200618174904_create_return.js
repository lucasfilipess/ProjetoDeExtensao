exports.up = function (knex) {
  return knex.schema.createTable('return', function (table) {
    table.increments('id').primary();
    table.integer('id_professor').notNullable();
    table.integer('id_service_area').notNullable();
    table.integer('id_patient').notNullable();
    table.integer('id_appointment').notNullable();
    table.date('preview_date').notNullable();
    table.date('scheduling_date').notNullable();
    table.string('results').notNullable();
    table.boolean('confirmation').defaultTo(false).notNullable();

    table.foreign('id_professor').references('id').inTable('id_professor');
    table.foreign('id_service_area').references('id').inTable('service_area');
    table.foreign('id_patient').references('id').inTable('patient');
    table.foreign('id_appointment').references('id').inTable('appointment');
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable('return');
};
