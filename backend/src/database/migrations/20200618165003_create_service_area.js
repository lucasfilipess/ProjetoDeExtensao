exports.up = function (knex) {
  return knex.schema.createTable('service_area', function (table) {
    table.increments('id').primary();
    table.integer('id_class').notNullable();
    table.string('name', 100).notNullable();
    table.string('description').notNullable();
    table.foreign('id_class').references('id').inTable('class');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('service_area');
};
