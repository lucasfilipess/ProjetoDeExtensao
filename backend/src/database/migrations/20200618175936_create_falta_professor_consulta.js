exports.up = function (knex) {
  return knex.schema.createTable('falta_professor_consulta', function (table) {
    table.increments('id').primary();
    table.integer('id_professor').notNullable();
    table.integer('id_consulta').notNullable();

    table.foreign('id_consulta').references('id').inTable('consulta');
    table.foreign('id_professor').references('id').inTable('professor');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('falta_professor_consulta');
};
