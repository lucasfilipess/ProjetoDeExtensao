const getDateTime = require('../../utils/GetDateTime');

exports.up = function (knex) {
  return knex.schema.createTable('medical_records', function (table) {
    table.increments('id').primary();
    table.integer('id_patient').notNullable();
    table.integer('id_supervisor').notNullable();
    table.integer('id_student').notNullable();
    table.string('procedures').notNullable();
    table.string('notes').notNullable();
    table.datetime('date').defaultTo(getDateTime.now()).notNullable();
    table.foreign('id_patient').references('id').inTable('patient');
    table.foreign('id_supervisor').references('id').inTable('supervisor');
    table.foreign('id_student').references('id').inTable('student');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('medical_records');
};
