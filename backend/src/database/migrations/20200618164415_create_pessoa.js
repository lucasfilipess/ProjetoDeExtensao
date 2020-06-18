exports.up = function (knex) {
  return knex.schema.createTable('pessoa', function (table) {
    table.increments('id').primary();
    table.integer('tipo').notNullable();
    table.string('nome').notNullable();
    table.integer('cpf').notNullable();
    table.string('rg').notNullable();
    table.string('telefone');
    table.string('celular').notNullable();
    table.string('email');
    table.integer('cep').notNullable();
    table.string('uf').notNullable();
    table.string('cidade').notNullable();
    table.string('bairro').notNullable();
    table.string('rua').notNullable();
    table.integer('numero').notNullable();
    table.string('complemento');
    table.string('senha').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('pessoa');
};
