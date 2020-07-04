exports.up = function (knex) {
  return knex.schema.createTable('patient_has_accompanying', function (table) {
    table.increments('id').primary();
    table.integer('id_accompanying').notNullable();
    table.integer('id_accompanied').notNullable();
    table.boolean('delete').defaultTo(false).notNullable();
    table.foreign('id_accompanying').references('id').inTable('patient');
    table.foreign('id_accompanied').references('id').inTable('patient');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('patient_has_accompanying');
};
