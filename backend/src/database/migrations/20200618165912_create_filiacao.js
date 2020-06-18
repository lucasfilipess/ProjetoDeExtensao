exports.up = function (knex) {
  return knex.schema.createTable('filiacao', function (table) {
    table.increments('id').primary();
    table.integer('id_conselho').notNullable();
    table.integer('id_professor').notNullable();
    table.date('data_registro').notNullable();
    table.integer('id_registro').notNullable();

    table.foreign('id_conselho').references('id').inTable('conselho');
    table.foreign('id_professor').references('id').inTable('professor');
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable('filiacao');
};
