exports.up = function (knex) {
  return knex.schema.createTable('falta_aluno', function (table) {
    table.increments('id').primary();
    table.integer('id_aluno_aluno_has_consulta').notNullable();
    table.integer('id_consulta_aluno_has_consulta').notNullable();

    table
      .foreign('id_aluno_aluno_has_consulta')
      .references('id_aluno')
      .inTable('aluno_has_consulta');
    table
      .foreign('id_consulta_aluno_has_consulta')
      .references('id_consulta')
      .inTable('aluno_has_consulta');
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable('falta_aluno');
};
