exports.up = function (knex) {
  return knex.schema.createTable('paciente', function (table) {
    table.increments('id').primary();
    table.integer('id_pessoa').notNullable();
    table.foreign('id_pessoa').references('id').inTable('pessoa');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('paciente');
};
