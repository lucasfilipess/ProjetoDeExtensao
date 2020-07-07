exports.up = function (knex) {
  return knex.schema.createTable('student', function (table) {
    table.increments('id').primary();
    table.integer('id_person').notNullable();
    table.integer('id_class').notNullable();
    table.integer('ra', 9).notNullable();
    table.string('period', 3).notNullable();
    table.boolean('delete').defaultTo(false).notNullable();
    table.foreign('id_person').references('id').inTable('person');
    table.foreign('id_class').references('id').inTable('class');
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable('student');
};
