exports.up = function (knex) {
  return knex.schema.createTable('aluno_has_agendamento', function (table) {
    table.increments('id').primary();
    table.integer('id_aluno').notNullable();
    table.integer('id_agendamento').notNullable();
    table.foreign('id_agendamento').references('id').inTable('agendamento');
    table.foreign('id_aluno').references('id').inTable('aluno');
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable('aluno_has_agendamento');
};
