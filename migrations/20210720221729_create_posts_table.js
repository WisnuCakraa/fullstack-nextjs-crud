
exports.up = function (knex) {
  return knex.schema.createTable('novels', function (table) {
    table.increments();
    table.string('title');
    table.string('genre');
    table.integer('chapter')
    table.text('synopsis');
    table.text('content');
    table.timestamps(true, true);
  })
};

exports.down = function (knex) {
  return knex.schema.dropTable('novels');
};
