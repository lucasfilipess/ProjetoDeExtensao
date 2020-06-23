exports.up = function (knex) {
  return knex.schema.createTable('professor', function (table) {
    table.increments('id').primary();
    table.integer('id_person').notNullable();
    table.integer('registration').notNullable();
    table.boolean('delete').defaultTo(false).notNullable();
    table.foreign('id_person').references('id').inTable('pessoa');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('professor');
};
