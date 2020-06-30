const now = require('../../utils/GetDateTime');

exports.up = function (knex) {
  return knex.schema.createTable('scheduling', function (table) {
    table.increments('id').primary();
    table.integer('id_professor').notNullable();
    table.integer('id_patient').notNullable();
    table.integer('id_service_area').notNullable();
    table.datetime('request_date').defaultTo(now).notNullable();
    table.date('confirmation_date').defaultTo('').notNullable();
    table.boolean('confirmation').defaultTo(false).notNullable();

    table.foreign('id_service_area').references('id').inTable('service_area');
    table.foreign('id_patient').references('id').inTable('patient');
    table.foreign('id_professor').references('id').inTable('professor');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('scheduling');
};
