exports.up = function (knex) {
  return knex.schema.createTable('discord', function (table) {
    table.increments('id').primary();
    table.integer('id_class').notNullable();
    table.integer('id_student').notNullable();
    table.foreign('id_class').references('id').inTable('class');
    table.foreign('id_student').references('id').inTable('student');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('discord');
};
