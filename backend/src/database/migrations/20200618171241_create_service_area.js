exports.up = function (knex) {
  return knex.schema.createTable('service_area', function (table) {
    table.increments('id').primary();
    table.string('name', 100).notNullable();
    table.string('description').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('service_area');
};
