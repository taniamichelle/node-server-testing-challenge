exports.up = function (knex, Promise) {
    return knex.schema.createTable('fluffies', tbl => {
        tbl.increments();
        tbl.string('name', 255).notNullable();
        tbl.string('species', 128);
    });
};

exports.down = function (knex, Promise) {
    // undo the operation in up
    return knex.schema.dropTableIfExists('fluffies');
};
