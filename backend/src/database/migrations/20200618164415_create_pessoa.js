exports.up = function (knex) {
  return knex.schema.createTable('pessoa', function (table) {
    table.increments('id').primary();
    table.integer('tipo').notNullable();
    table.string('nome').notNullable();
    table.integer('cpf');
    table.string('rg');
    table.string('telefone');
    table.string('celular');
    table.string('email').notNullable();
    table.integer('cep');
    table.string('uf');
    table.string('cidade');
    table.string('bairro');
    table.string('rua');
    table.integer('numero');
    table.string('complemento');
    table.string('senha').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('pessoa');
};
