exports.up = function (knex) {
  return knex.schema.createTable('appointment', function (table) {
    table.increments('id').primary();
    table.integer('id_professor').notNullable();
    table.integer('id_service_area').notNullable();
    table.integer('id_patient').notNullable();
    table.integer('id_scheduling').notNullable();
    table.date('scheduling_date').notNullable();
    table.string('procedures').notNullable();
    table.string('recommendations').defaultTo('').notNullable();
    table.integer('confirmation').defaultTo(false).notNullable();

    table.foreign('id_scheduling').references('id').inTable('scheduling');
    table.foreign('id_patient').references('id').inTable('patient');
    table.foreign('id_service_area').references('id').inTable('service_area');
    table.foreign('id_professor').references('id').inTable('professor');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('appointment');
};
