exports.up = function (knex) {
  return knex.schema.createTable('consulta', function (table) {
    table.increments('id').primary();
    table.integer('id_professor').notNullable();
    table.integer('id_area_de_atendimento').notNullable();
    table.integer('id_paciente').notNullable();
    table.integer('id_agendamento').notNullable();
    table.date('data_atendimento').notNullable();
    table.string('procedimentos').notNullable();
    table.string('recomendacoes');
    table.integer('confirmacao');

    table.foreign('id_agendamento').references('id').inTable('agendamento');
    table.foreign('id_paciente').references('id').inTable('paciente');
    table
      .foreign('id_area_de_atendimento')
      .references('id')
      .inTable('area_de_atendimento');
    table.foreign('id_professor').references('id').inTable('professor');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('consulta');
};
