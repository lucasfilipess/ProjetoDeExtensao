exports.up = function (knex) {
  return knex.schema.createTable('docencia', function (table) {
    table.increments('id').primary();
    table.integer('id_curso').notNullable();
    table.integer('id_professor').notNullable();
    table.foreign('id_curso').references('id').inTable('curso');
    table.foreign('id_professor').references('id').inTable('professor');
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable('docencia');
};
