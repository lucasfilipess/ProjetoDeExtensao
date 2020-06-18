exports.up = function (knex) {
  return knex.schema.createTable('dicencia', function (table) {
    table.increments('id').primary();
    table.integer('id_curso').notNullable();
    table.integer('id_aluno').notNullable();

    table.foreign('id_curso').references('id').inTable('curso');
    table.foreign('id_aluno').references('id').inTable('aluno');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('dicencia');
};
