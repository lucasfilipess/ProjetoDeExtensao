exports.up = function (knex) {
  return knex.schema.createTable('agendamento', function (table) {
    table.increments('id').primary();
    table.integer('id_professor').notNullable();
    table.integer('id_paciente').notNullable();
    table.integer('id_area_de_atendimento').notNullable();
    table.date('data_solicitacao').notNullable();
    table.date('data_confirmacao');
    table.integer('confirmacao');

    table
      .foreign('id_area_de_atendimento')
      .references('id')
      .inTable('area_de_atendimento');
    table.foreign('id_paciente').references('id').inTable('pacientes');
    table.foreign('id_professor').references('id').inTable('professor');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('agendamento');
};
