exports.up = function (knex) {
  return knex.schema.createTable('student', function (table) {
    table.increments('id').primary();
    table.integer('id_person').notNullable();
    table.integer('ra', 9).notNullable();
    table.integer('period').notNullable();
    table.boolean('delete').defaultTo(false).notNullable();
    table.foreign('id_person').references('id').inTable('person');
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable('student');
};
