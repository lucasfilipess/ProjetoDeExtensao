const getDateTime = require('../../utils/GetDateTime');

exports.up = function (knex) {
  return knex.schema.createTable('appointment', function (table) {
    table.increments('id').primary();
    table.integer('id_patient').notNullable();
    table.integer('id_supervisor').notNullable();
    table.datetime('request_date').defaultTo(getDateTime.now()).notNullable();
    table.string('horary').defaultTo('').notNullable();
    table.string('date').defaultTo('').notNullable();
    table.date('confirmation_date');
    table.boolean('confirmation').defaultTo(false).notNullable();

    table.foreign('id_supervisor').references('id').inTable('supervisor');
    table.foreign('id_patient').references('id').inTable('patient');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('appointment');
};
