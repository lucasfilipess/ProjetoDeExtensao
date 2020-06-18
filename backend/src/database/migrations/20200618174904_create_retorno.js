exports.up = function (knex) {
  return knex.schema.createTable('retorno', function (table) {
    table.increments('id').primary();
    table.integer('id_professor').notNullable();
    table.integer('id_area_de_atendimento').notNullable();
    table.integer('id_paciente').notNullable();
    table.integer('id_consulta').notNullable();
    table.date('data_prevista').notNullable();
    table.date('data_atendimento').notNullable();
    table.string('resultados').notNullable();
    table.integer('confirmacao');

    table.foreign('id_professor').references('id').inTable('id_professor');
    table
      .foreign('id_area_de_atendimento')
      .references('id')
      .inTable('area_de_atendimento');
    table.foreign('id_paciente').references('id').inTable('paciente');
    table.foreign('id_consulta').references('id').inTable('consulta');
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable('retorno');
};
