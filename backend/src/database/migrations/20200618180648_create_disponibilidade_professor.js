exports.up = function (knex) {
  return knex.schema.createTable('disponilidade_professor', function (table) {
    table.increments('id').primary();
    table.integer('id_professor').notNullable();
    table.date('dia_semana').notNullable();
    table.time('horario').notNullable();

    table.foreign('id_professor').references('id').inTable('professor');
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable('disponilidade_professor');
};
