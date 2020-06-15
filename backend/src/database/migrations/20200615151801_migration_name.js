exports.up = function (knex) {
  return knex.schema.createTable('???', function (table) {
    table.increments('???').primary();
    table.string('???').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('???');
};

// Exemple
