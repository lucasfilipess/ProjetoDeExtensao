exports.up = function (knex) {
  return knex.schema.createTable('affiliation', function (table) {
    table.increments('id').primary();
    table.integer('id_advice').notNullable();
    table.integer('id_professor').notNullable();
    table.date('registration_date').notNullable();
    table.integer('id_registration').unsigned().notNullable();
    table.foreign('id_advice').references('id').inTable('advice');
    table.foreign('id_professor').references('id').inTable('professor');
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable('affiliation');
};
