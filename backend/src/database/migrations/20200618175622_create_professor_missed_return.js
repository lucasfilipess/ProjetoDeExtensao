exports.up = function (knex) {
  return knex.schema.createTable('professor_missed_return', function (table) {
    table.increments('id').primary();
    table.integer('id_professor').notNullable();
    table.integer('id_return').notNullable();

    table.foreign('id_return').references('id').inTable('return');
    table.foreign('id_professor').references('id').inTable('professor');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('professor_missed_return');
};
