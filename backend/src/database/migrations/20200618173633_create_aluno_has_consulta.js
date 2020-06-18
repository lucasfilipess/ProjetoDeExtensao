exports.up = function (knex) {
  return knex.schema.createTable('aluno_has_consulta', function (table) {
    table.increments('id').primary();
    table.integer('id_aluno').notNullable();
    table.integer('id_consulta').notNullable();

    table.foreign('id_aluno').references('id').inTable('aluno');
    table.foreign('id_consulta').references('id').inTable('consulta');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('aluno_has_consulta');
};
