exports.up = function (knex) {
  return knex.schema.createTable('falta_professor_retorno', function (table) {
    table.increments('id').primary();
    table.integer('id_professor').notNullable();
    table.integer('id_retorno').notNullable();

    table.foreign('id_retorno').references('id').inTable('retorno');
    table.foreign('id_professor').references('id').inTable('professor');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('falta_professor_retorno');
};
