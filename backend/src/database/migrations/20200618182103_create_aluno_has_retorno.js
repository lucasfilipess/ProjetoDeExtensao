exports.up = function (knex) {
  return knex.schema.createTable('aluno_has_retorno', function (table) {
    table.increments('id').primary();
    table.integer('id_aluno').notNullable();
    table.integer('id_retorno').notNullable();
    table.foreign('id_aluno').references('id').inTable('aluno');
    table.foreign('id_retorno').references('id').inTable('retorno');
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable('aluno_has_retorno');
};
