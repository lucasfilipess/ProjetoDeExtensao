exports.up = function (knex) {
  return knex.schema.createTable('person', function (table) {
    table.increments('id').primary();
    table.string('type').notNullable();
    table.string('name', 30).notNullable();
    table.string('surname', 30).notNullable();
    table.string('cpf', 14);
    table.string('rg', 13);
    table.string('telephone', 14);
    table.string('cellPhone', 16);
    table.string('email').notNullable();
    table.string('cep', 9);
    table.string('uf', 2);
    table.string('city', 100);
    table.string('neighborhood', 100);
    table.string('street', 100);
    table.integer('number');
    table.string('complement');
    table.string('password').notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('person');
};
