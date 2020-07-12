exports.up = function (knex) {
  return knex.schema.createTable('availability_for_appointment', function (
    table
  ) {
    table.increments('id').primary();
    table.integer('id_supervisor').notNullable();
    table.integer('id_service_area').notNullable();
    table.date('date').notNullable();
    table.specificType('hourly', 'text');
    table.boolean('has_patient').defaultTo(false).notNullable();

    table.foreign('id_supervisor').references('id').inTable('supervisor');
    table.foreign('id_service_area').references('id').inTable('service_area');
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable('availability_for_appointment');
};
