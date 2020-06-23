exports.up = function (knex) {
  return knex.schema.createTable('patient', function (table) {
    table.increments('id').primary();
    table.integer('id_person').notNullable();
    table.boolean('delete').defaultTo(false).notNullable();
    table.foreign('id_person').references('id').inTable('person');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('patient');
};
