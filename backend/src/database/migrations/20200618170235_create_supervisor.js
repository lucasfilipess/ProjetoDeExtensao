exports.up = function (knex) {
  return knex.schema.createTable('supervisor', function (table) {
    table.increments('id').primary();
    table.integer('id_person').notNullable();
    table.integer('id_advice').notNullable();
    table.integer('id_class').notNullable();
    table.integer('registration', 9).notNullable();
    table.boolean('delete').defaultTo(false).notNullable();
    table.foreign('id_person').references('id').inTable('person');
    table.foreign('id_advice').references('id').inTable('advice');
    table.foreign('id_class').references('id').inTable('class');
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('supervisor');
};
