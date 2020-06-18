exports.up = function (knex) {
  return knex.schema.createTable('aluno', function (table) {
    table.increments('id').primary();
    table.integer('id_pessoa').notNullable();
    table.integer('ra').notNullable();
    table.integer('periodo').notNullable();
    table.foreign('id_pessoa').references('id').inTable('pessoa');
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable('aluno');
};
