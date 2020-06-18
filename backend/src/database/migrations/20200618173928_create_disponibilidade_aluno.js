exports.up = function (knex) {
  return knex.schema.createTable('disponilidade_aluno', function (table) {
    table.increments('id').primary();
    table.integer('id_aluno').notNullable();
    table.date('dia_semana').notNullable();
    table.time('horario').notNullable();

    table.foreign('id_aluno').references('id').inTable('aluno');
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable('disponilidade_aluno');
};
